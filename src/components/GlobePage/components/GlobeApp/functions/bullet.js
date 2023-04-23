import * as THREE from 'three';

import { calcPosFromLatLonRad } from './utils/calcPosFromLatLonRad';



export const bullet = () => {
  const container = new THREE.Object3D();
  container.matrixAutoUpdate = false;

  const geometry = new THREE.SphereBufferGeometry(0.02, 30, 30);

  const material = new THREE.MeshBasicMaterial({
    color: new THREE.Color('white'),
  });

  const mesh = new THREE.Mesh(geometry, material);

  const positionBullet = ({
    latitude,
    longitude,
  }) => {
    const { x, y, z } = calcPosFromLatLonRad(latitude, longitude);
    mesh.position.set(x, y, z);
    return { x, y, z };
  };

  //update
  //onresize

  return {
    mesh,
    positionBullet,
  };
};
