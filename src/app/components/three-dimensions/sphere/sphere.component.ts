import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
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
  isMobileDevice: boolean = false;

  sphereTextureLoader: any = this.textureLoader.load(this.nuetrinosImg);

  // Geometries
  moonGeometry: any;
  // moonGeometry: any = new THREE.SphereGeometry(1, 64, 64);
  moonMaterial: any = new THREE.MeshStandardMaterial({ map: this.sphereTextureLoader });
  pointLight: any = new THREE.PointLight(0xffffff, 50);
  moon: any;

  @HostListener('window:resize', ['$event'])
  onresize(event: any) {
    this.handleScreenSizeChanges();
  }
  constructor() {
    this.animate = this.animate.bind(this);
  }

  ngAfterViewInit(): void {
    const canvas = document.getElementById('sphere-canvas') as HTMLElement;
    this.renderer = new THREE.WebGLRenderer({ canvas });
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.handleScreenSizeChanges();
    this.moonGeometry = new THREE.SphereGeometry(this.isMobileDevice ? 1 : 3, 64, 64);
    this.moon = new THREE.Mesh(this.moonGeometry, this.moonMaterial);

    this.scene.add(this.moon)
    this.scene.add(this.pointLight);
    this.pointLight.position.z = 10;
    // this.camera.position.z = 3;
    this.camera.position.z = this.isMobileDevice ? 3 : 5;
    this.renderer.setSize(this.isMobileDevice ? window.innerWidth : window.innerWidth - 800, this.isMobileDevice ? window.innerHeight : window.innerHeight - 365);
    // this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.animate();
    this.renderer.setClearColor('ghostwhite');
    this.handleScreenSizeChanges();
  }

  handleScreenSizeChanges() {
    if (window.innerWidth < 615) {
      console.log("< 615", window.innerWidth)
      this.isMobileDevice = true;
    } else {
      this.isMobileDevice = false;
    }
    this.camera.aspect = window.innerWidth / window.innerHeight;
  }

  animate(): void {
    requestAnimationFrame(this.animate)
    // this.box.rotation.x += 0.01;
    this.moon.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }
}
