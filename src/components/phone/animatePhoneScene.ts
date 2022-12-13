import { phoneConstants } from './constants';
import * as Three from 'three';
import type { PhoneScene } from './initializePhoneScene';
let lastIndex = 0;

let freezeTimer = 0.0;
let stopPositionY = Math.PI + Math.PI / 2;
const clock = new Three.Clock();

export function animatePhoneScene(phoneScene?: PhoneScene) {
  const deltaTime = clock.getDelta();

  if (!phoneScene) return;

  const {
    phone,
    renderer,
    scene,
    camera,
    cubeCamera,
    effectComposer,
    screenMaterials,
  } = phoneScene;
  if (phone && freezeTimer > phoneConstants.freezeTimeInSeconds) {
    phone.rotation.y += deltaTime * phoneConstants.rotationSpeed;

    if (phone.rotation.y > stopPositionY) {
      stopPositionY += Math.PI * 2;
      freezeTimer = 0.0;
    } else {
      const currentIndex = Math.ceil(phone.rotation.y / (Math.PI * 2));

      if (currentIndex !== lastIndex) {
        if (phone.children[1] instanceof Three.Mesh) {
          phone.children[1].material =
            screenMaterials[currentIndex % screenMaterials.length];
        }

        lastIndex = currentIndex;
      }
    }
  } else {
    freezeTimer += deltaTime;
  }

  cubeCamera.update(renderer, scene);
  renderer.render(scene, camera);

  requestAnimationFrame(() => animatePhoneScene(phoneScene));
}
