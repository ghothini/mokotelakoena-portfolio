import { Component, Input } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent {
  @Input() tryFeature: any;
  renderer: any;
  scene: any = new THREE.Scene();
  camera: any = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
  // axisHelper: any = new THREE.AxesHelper(5);
  boxGeometry: any = new THREE.BoxGeometry(5,5,5);
  planeGeometry: any = new THREE.PlaneGeometry(30, 30);
  planeMaterial: any = new THREE.MeshBasicMaterial({ color: 'blue' });
  plane: any = new THREE.Mesh(this.planeGeometry, this.planeMaterial);
  orbit: any;
  // gridHelper: any = new THREE.GridHelper(40);
  textureLoader: any = new THREE.TextureLoader();
  cubeTextureLoader: any = new THREE.CubeTextureLoader();
  angularImg: any = '../../../assets/images/Angular.png';
  nodeImg: any = '../../../assets/images/node.png';
  mongoImg: any = '../../../assets/images/mongo.png';
  expressImg: any = '../../../assets/images/ex.png';
  cssImg: any = '../../../assets/images/css.png';
  htmlImg: any = '../../../assets/images/html.png';
  boxMaterial: any = new THREE.MeshBasicMaterial({
    map: this.textureLoader.load(this.angularImg)
  });
  angularTexture = this.textureLoader.load(this.angularImg);
  nodeTexture = this.textureLoader.load(this.nodeImg);
  expressTexture = this.textureLoader.load(this.expressImg);
  cssTexture = this.textureLoader.load(this.cssImg);
  mongoTexture = this.textureLoader.load(this.mongoImg);
  htmlTexture = this.textureLoader.load(this.htmlImg);
  // aboutTexture = this.textureLoader.load(this.aboutImg);
  materials: any = [
    new THREE.MeshBasicMaterial({map: this.nodeTexture}),
    new THREE.MeshBasicMaterial({map: this.htmlTexture} ),
    new THREE.MeshBasicMaterial({map: this.angularTexture}),
    new THREE.MeshBasicMaterial({map: this.expressTexture}),
    new THREE.MeshBasicMaterial({map: this.mongoTexture}),
    new THREE.MeshBasicMaterial({map: this.cssTexture}),
  ]
  box: any = new THREE.Mesh(this.boxGeometry, this.materials);
  // box2Geometry: any = new THREE.BoxGeometry(4, 4, 4);
  // box2Material: any = new THREE.MeshBasicMaterial({
  //   color: 'green',
  //   map: this.textureLoader.load(this.sideImg)
  // }
  // );
  // box2: any = new THREE.Mesh(this.box2Geometry, this.box2Material);

  constructor() {
    // Bind the context of animate function to the current instance
    this.animate = this.animate.bind(this);
  }

  ngOnInit(): void {
    const canvas = document.getElementById('box-geometry') as HTMLElement;

    this.renderer = new THREE.WebGLRenderer({canvas});
    this.orbit = new OrbitControls(this.camera, this.renderer.domElement);
    this.renderer.setSize(window.innerWidth - 800, window.innerHeight - 360);

    this.scene.add(this.box);
    // this.scene.add(this.box2);
    // this.box2.position.set(0, 15, 10)
    this.plane.rotation.x = -0.5 * Math.PI;
    // this.scene.add(this.gridHelper)

    this.camera.position.set(-10, 5, 7);
    this.orbit.update();
    this.renderer.setAnimationLoop(this.animate);
    this.renderer.setClearColor('ghostwhite');
  }

  animate(time: any) {
    if (this.box) {
      if(this.tryFeature) {
        this.box.rotation.x = time / 1000;
      }
      this.box.rotation.y = time / 1000;
      this.renderer.render(this.scene, this.camera);
    }
  }

}
