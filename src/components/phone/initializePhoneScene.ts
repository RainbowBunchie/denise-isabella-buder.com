import { phoneConstants } from './constants';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import GUI from 'lil-gui';
import * as Three from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const texturePaths = [
  'images/turtlet-1.png',
  'images/octa-1.png',
  'images/octa-2.png',
  'images/octa-3.png',
  'images/octa-4.png',
  'images/octa-5.png',
  'images/octa-6.png',
  'images/octa-7.png',
];
export interface PhoneScene {
  renderer: Three.WebGLRenderer;
  camera: Three.PerspectiveCamera;
  phone: Three.Object3D;
  scene: Three.Scene;
  cubeCamera: Three.CubeCamera;
  effectComposer: EffectComposer;
  screenMaterials: Three.MeshStandardMaterial[];
}

export async function initializePhoneScene({
  containerClass,
}): Promise<PhoneScene> {
  const circleMaterial = new Three.MeshStandardMaterial({
    //color: "#bc1330",
    roughness: 0.05,
    metalness: 1,
  });

  //const background = gui.addFolder("Background");
  //background.add(circleMaterial, "metalness", 0, 1).name("Metalness")
  //background.add(circleMaterial, "roughness", 0, 1).name("Roughness");
  //background.addColor(circleMaterial, "color").name("Color");

  // General Threejs initialization
  const scene = new Three.Scene();

  const camera = new Three.PerspectiveCamera(75, 500 / 500, 1, 10);
  camera.position.z = 3;

  const renderer = new Three.WebGLRenderer({
    powerPreference: 'low-power',
    antialias: true,
    alpha: true,
  });
  renderer.outputEncoding = Three.sRGBEncoding;
  renderer.toneMapping = Three.ACESFilmicToneMapping;
  renderer.setSize(500, 500);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const [threeContainer] = document.getElementsByClassName(containerClass);
  threeContainer?.appendChild(renderer.domElement);

  // Controls
  const orbitControls = new OrbitControls(camera, renderer.domElement);
  orbitControls.enableZoom = false;
  orbitControls.enablePan = false;

  // Lock rotation to only one axis
  orbitControls.minPolarAngle = Math.PI / 2;
  orbitControls.maxPolarAngle = Math.PI / 2;

  // Post processing
  const effectComposer = new EffectComposer(renderer);

  const renderPass = new RenderPass(scene, camera);
  effectComposer.addPass(renderPass);

  // Lights
  const ambientLight = new Three.AmbientLight();
  ambientLight.intensity = 0.9;
  scene.add(ambientLight);

  const directionalLight = new Three.DirectionalLight();
  directionalLight.intensity = phoneConstants.directionalLightIntensity;
  directionalLight.position.set(3, 2, 3);
  scene.add(directionalLight);

  // First texture - other textures are loaded later for better performance
  const textureLoader = new Three.TextureLoader();
  const firstTexture = await textureLoader.loadAsync(texturePaths[0]);
  firstTexture.encoding = Three.sRGBEncoding;
  const firstScreenMaterial = new Three.MeshStandardMaterial({
    map: firstTexture,
  });
  const screenMaterials: Three.MeshStandardMaterial[] = [firstScreenMaterial];

  const compileObjects: Three.Mesh[] = [];
  for (let i = 1; i < texturePaths.length - 1; i++) {
    // can result in images having not the same order. TODO: fix this if they should be in order
    textureLoader.loadAsync(texturePaths[i]).then((texture) => {
      texture.encoding = Three.sRGBEncoding;
      const screenMaterial = firstScreenMaterial.clone();
      screenMaterial.map = texture;
      screenMaterials.push(screenMaterial);

      // This whole code is needed to precompile materials by adding them to the scene on a position where they cannnot be seen.
      // Otherwise the scene freezes for a few miliseconds when the material is first assigned.
      const compileGeometry = new Three.BoxGeometry();
      const compileMesh = new Three.Mesh(compileGeometry, screenMaterial);
      compileMesh.position.set(0, 0, -3);
      compileMesh.scale.set(0.01, 0.01, 0.01);
      scene.add(compileMesh);
      compileObjects.push(compileMesh);

      // clean up
      if (screenMaterials.length === texturePaths.length) {
        for (const object of compileObjects) {
          scene.remove(object);
        }
      }
    });
  }

  // Load model
  const gltfLoader = new GLTFLoader();
  const gltf = await gltfLoader.loadAsync('phone.glb');

  if (gltf.scene.children[0]) {
    const phone = gltf.scene.children[0];
    const screen = phone.children[1];

    phone.scale.set(
      phoneConstants.scale,
      -phoneConstants.scale,
      phoneConstants.scale
    );
    phone.rotation.reorder('YXZ');
    phone.rotation.set(-0.2, -Math.PI / 2, 0);

    if (screen instanceof Three.Mesh) {
      screen.material.map = firstTexture;
    }

    scene.add(phone);

    // Add background circle
    const cubeRenderTarget = new Three.WebGLCubeRenderTarget(256);
    cubeRenderTarget.texture.type = Three.HalfFloatType;

    const cubeCamera = new Three.CubeCamera(1, 10, cubeRenderTarget);
    cubeCamera.position.set(0, 0.2, -0.8);

    circleMaterial.envMap = cubeRenderTarget.texture;

    const circleGeometry = new Three.CircleGeometry(2.3, 128);
    const circleMesh = new Three.Mesh(circleGeometry, circleMaterial);
    circleMesh.position.set(0, 0, -0.8);

    circleMesh.visible = phoneConstants.backgroundEnabled;
    scene.add(circleMesh);

    // sparkles
    const sparklesGeometry = new Three.BufferGeometry();
    const sparkleCount = 30;
    const sparklePositionArray = new Float32Array(sparkleCount * 3);

    for (let i = 0; i < sparkleCount; i++) {
      sparklePositionArray[i * 3] = Math.random() * 3 - 1.5;
      sparklePositionArray[i * 3 + 1] = Math.random() * 3 - 1.5;
      sparklePositionArray[i * 3 + 2] = Math.random() * 3 - 1.5;
    }

    sparklesGeometry.setAttribute(
      'position',
      new Three.BufferAttribute(sparklePositionArray, 3)
    );

    const sparklesMaterial = new Three.PointsMaterial({
      size: 0.1,
      sizeAttenuation: true,
    });

    const sparkles = new Three.Points(sparklesGeometry, sparklesMaterial);
    sparkles.visible = phoneConstants.sparklesEnabled;
    scene.add(sparkles);

    // GUI
    const gui = new GUI();
    gui.hide();

    const phoneGUI = gui.addFolder('phone');
    phoneGUI.add(phoneConstants, 'rotationSpeed', 1, 20).name('Rotation speed');
    phoneGUI
      .add(phoneConstants, 'freezeTimeInSeconds', 1, 15)
      .name('Freeze time');
    phoneGUI
      .add(phoneConstants, 'scale', 0.5, 3)
      .name('Scale')
      .onChange((value: number) => phone.scale.set(value, -value, value));

    const sparklesGUI = gui.addFolder('sparkles');
    sparklesGUI
      .add(phoneConstants, 'sparklesEnabled')
      .name('enabled')
      .onChange((value: boolean) => (sparkles.visible = value));

    const backgroundGUI = gui.addFolder('background');
    backgroundGUI
      .add(phoneConstants, 'backgroundEnabled')
      .name('enabled')
      .onChange((value: boolean) => (circleMesh.visible = value));

    const lightsGUI = gui.addFolder('lights');
    lightsGUI
      .add(phoneConstants, 'ambientLightIntensity', 0, 2)
      .name('Ambient Light Intensity')
      .onChange((value: number) => (ambientLight.intensity = value));

    lightsGUI
      .add(phoneConstants, 'directionalLightIntensity', 0, 2)
      .name('Directional Light Intensity')
      .onChange((value: number) => (directionalLight.intensity = value));

    return {
      renderer,
      camera,
      phone,
      scene,
      cubeCamera,
      effectComposer,
      screenMaterials,
    };
  }

  throw new Error('Could not initialize scene.');
}
