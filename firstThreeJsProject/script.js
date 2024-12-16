import * as THREE from 'three'

// Scene
const scene = new THREE.Scene();

// Object
const geometery = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'red'});
const mesh = new THREE.Mesh(geometery, material);

scene.add(mesh);

// Camera

