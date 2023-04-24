import * as THREE from 'three';

import { bullet } from './bullet';
import { curve, CurveReturn } from './curve';
import vertexShader from './shaders/globe/vertex.glsl';
import fragmentShader from './shaders/globe/fragment.glsl';
import vertexShaderHalo from './shaders/halo/vertex.glsl';
import fragmentShaderHalo from './shaders/halo/fragment.glsl';


let dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

export const globe = ({ scaleGroup, pivotGroup }) => {
  const container = new THREE.Object3D();

  container.matrixAutoUpdate = false;

  const geometry = new THREE.SphereBufferGeometry(1.16, 50, 50);
  let mesh;
  let meshHalo;

  const material = new THREE.MeshBasicMaterial({
    color: dark ? new THREE.Color('#083344') : new THREE.Color('#e0f2fe'),
  });

  const generateGlobe = () => {
    mesh = new THREE.Mesh(geometry, material);
    scaleGroup.add(mesh);
  };

  const generateGlow = () => {
    const geometry = new THREE.SphereBufferGeometry(1.165, 50, 50);
    const material = new THREE.ShaderMaterial({
      depthWrite: false,
      transparent: true,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        color: {value: dark ? new THREE.Color('#083344') : new THREE.Color('#e0f2fe')}
      },
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.z = 135;
    container.add(mesh);
    scaleGroup.add(mesh);

    const geometryHalo = new THREE.CircleGeometry(1.52, 50);
    const materialHalo = new THREE.ShaderMaterial({
      depthWrite: false,
      transparent: true,
      vertexShader: vertexShaderHalo,
      fragmentShader: fragmentShaderHalo,
      uniforms: {
        uTime: { value: 0 },
        color: {value: dark ? new THREE.Color('#083344') : new THREE.Color('#e0f2fe')} 
      },
    });
    meshHalo = new THREE.Mesh(geometryHalo, materialHalo);
    container.add(meshHalo);
    scaleGroup.add(meshHalo);
  };

  const curvesArray = [];

  const init = () => {
    generateGlobe();
    generateGlow();
    generateBullets();
  };


  const routes = [
    {
      name: 'op1',
      pointStart: [1.2921, 36.8219],
      pointFinish: [52.01, 31.1656],
    },
    {
      name: 'op2',
      pointStart: [1.2921, 36.8219],
      pointFinish: [-32.834179, 22.67],
    },
    {
      name: 'op3',
      pointStart: [1.2921, 36.8219],
      pointFinish: [35, -119],
    },
    {
      name: 'op4',
      pointStart: [1.2921, 36.8219],
      pointFinish: [-27.537817, 142],
    },
    {
      name: 'op5',
      pointStart: [1.2921, 36.8219],
      pointFinish: [23.1291, 113.2644],
    },
    {
      name: 'op6',
      pointStart: [1.2921, 36.8219],
      pointFinish: [6.5244, 3.3792],
    },
    {
      name: 'op7',
      pointStart: [1.2921, 36.8219],
      pointFinish: [-14.2350, -51.9253],
    },
  ];

  const generateBullets = () => {
    routes.forEach(route => {
      const bullet1 = bullet();
      const bullet2 = bullet();

      const b1 = bullet1.positionBullet({
        latitude: route.pointStart[0],
        longitude: route.pointStart[1],
      });
      const b2 = bullet2.positionBullet({
        latitude: route.pointFinish[0],
        longitude: route.pointFinish[1],
      });

      container.add(bullet1.mesh, bullet2.mesh);
      pivotGroup.add(bullet1.mesh, bullet2.mesh);

      const curve12 = curve();
      curve12.generateCurve({ p1: b1, p2: b2 });
      curvesArray.push(curve12);
      container.add(curve12.container);
      pivotGroup.add(curve12.container);
    });
  };

  const update = (updateInfo) => {
    curvesArray.forEach(curveItem => {
      curveItem.update(updateInfo);
    });
  };

  return {
    container,
    init,
    update,
  };
};
