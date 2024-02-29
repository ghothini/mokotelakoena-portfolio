import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

@Component({
  selector: 'app-sphere',
  templateUrl: './sphere.component.html',
  styleUrls: ['./sphere.component.scss']
})
export class SphereComponent implements AfterViewInit {
  scene: any = new THREE.Scene();
  camera: any = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  renderer: any;
  controls: any;
  nuetrinosImg: string = '../../../assets/images/neutrinos.png'
  textureLoader: any = new THREE.TextureLoader();

  sphereTextureLoader: any = this.textureLoader.load(this.nuetrinosImg);

  // Geometries
  moonGeometry: any = new  THREE.SphereGeometry(3, 64, 64);
  moonMaterial: any = new THREE.MeshStandardMaterial({map: this.sphereTextureLoader});
  pointLight: any = new THREE.PointLight(0xffffff,50);
  moon: any = new THREE.Mesh(this.moonGeometry, this.moonMaterial);

  constructor() {
    this.animate = this.animate.bind(this);
  }

  ngAfterViewInit(): void {
    const canvas = document.getElementById('sphere-canvas') as HTMLElement;
    this.renderer = new THREE.WebGLRenderer({ canvas });
    this.controls = new OrbitControls(this.camera,this.renderer.domElement);

    this.scene.add(this.moon)
    this.scene.add(this.pointLight);
    this.pointLight.position.z = 10;
    this.camera.position.z = 5;
    this.renderer.setSize(window.innerWidth - 800, window.innerHeight - 365);
    this.animate();
    this.renderer.setClearColor('ghostwhite');
  }

  animate(): void {
    requestAnimationFrame(this.animate)
    // this.box.rotation.x += 0.01;
    this.moon.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }
}
