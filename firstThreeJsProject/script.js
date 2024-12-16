import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
// instanciation de la scène
const scene = new THREE.Scene();

// Object
// création et instanciation d'un carré rouge
const geometery = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(geometery, material);

scene.add(mesh);

// Sizes
// Définir la taille de la scène
const sizes = {
    width: 800,
    height: 600,
};

// Camera
// instanciation de la camera pour voir la scène
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
/* reculer la camera car sinon elle est dans notre cube
    vu que tout démarre a la position 0 0 0 */
camera.position.z = 3;
scene.add(camera);

// Renderer
// instanciation du moteur de rendu pour avoir un retour
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
