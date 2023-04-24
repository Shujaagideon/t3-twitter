import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';

import { lights } from './lights';
import { globe } from './globe';
import { dots } from './dots';


export const world = ({ appObj, appProps }) => {
  const container = new THREE.Object3D();
  container.matrixAutoUpdate = false;

  const pivotGroup = new THREE.Group();
  const scaleGroup = new THREE.Group();
  container.add(pivotGroup);
  container.add(scaleGroup);

  const worldManager = {
    initLights: null,
    initGlobe: null,
    updateGlobe: null,
    updateDots: null,
    destroyDots: null,
  };

  const init = () => {
    const { init: initLights, container: containerLights } = lights();

    container.add(containerLights);
    worldManager.initLights = initLights;
    worldManager.initLights();

    const {
      container: containerGlobe,
      init: initGlobe,
      update: updateGlobe,
    } = globe({
      pivotGroup,
      scaleGroup,
    });

    container.add(containerGlobe);
    worldManager.initGlobe = initGlobe;
    worldManager.updateGlobe = updateGlobe;
    worldManager.initGlobe();

    const {
      container: containerDots,
      update: updateDots,
      destroy: destroyDots,
    } = dots({
      appObj,
      appProps,
      pivotGroup,
    });
    container.add(containerDots);
    worldManager.updateDots = updateDots;
    worldManager.destroyDots = destroyDots;
  };

  const update = (updateInfo) => {
    worldManager.updateGlobe(updateInfo);
    worldManager.updateDots(updateInfo);
    updatePivotGroup();
    updateScaleGroup();
  };

  const destroy = () => {
    worldManager.destroyDots();
  };

  const SHIFT = 1.5; //2
  const MULTIPLIER = 0.45; //0.4
  const FINAL_SHIFT = 0.4; //0.6

  let rotationXParameter = 1;
  let rotationTween;

  const animateRotationParameter = destination => {
    if (rotationTween) {
      rotationTween.stop();
    }

    rotationTween = new TWEEN.Tween({
      progress: rotationXParameter,
    })
      .to({ progress: destination }, 800)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(obj => {
        rotationXParameter = obj.progress;
      });

    rotationTween.start();
  };

  const updatePivotGroup = () => {
    
    pivotGroup.rotation.x = appObj.scroll.scrollObj.currentY;
    pivotGroup.rotation.y = appObj.scroll.scrollObj.currentX;

    pivotGroup.position.z =
      (1 - rotationXParameter) * 1.4 +
      (1 - rotationXParameter) *
        ((Math.sin(appObj.scroll.scrollObj.currentX) + SHIFT) * MULTIPLIER +
          FINAL_SHIFT) *
        0.2;

    pivotGroup.rotation.x =
      appObj.scroll.scrollObj.currentY * rotationXParameter +
      Math.sin(appObj.scroll.scrollObj.currentX) *
        -0.4 *
        (1 - rotationXParameter);
  };

  const updateScaleGroup = () => {
    scaleGroup.position.z =
      (1 - rotationXParameter) * 1.4 +
      (1 - rotationXParameter) *
        ((Math.sin(appObj.scroll.scrollObj.currentX) + SHIFT) * MULTIPLIER +
          FINAL_SHIFT) *
        0.2;
  };

  return {
    init,
    container,
    destroy,
    update,
  };
};
