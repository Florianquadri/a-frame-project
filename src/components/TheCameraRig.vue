<script setup>
  import '../aframe/disable-in-vr';
  import '../aframe/hide-in-vr';
  import '../aframe/simple-navmesh-constraint';
  import '../aframe/blink-controls';
  import '../aframe/event-set';
  import '../aframe/listen-to';
  import '../aframe/teleport-camera-rig';
  import {underwater, viewSky, view} from '../utils/store.js';
  import {ref, computed, watchEffect} from 'vue';

  const placePoint = computed(() => underwater.value == false ? "0 0 -0.1" : "-0.1 0 -0.1");
  watchEffect(() => {
    console.log(placePoint.value);
  });

  const position = ref("0 0 10");

  function goUnderWater(){
    view.value = 'underwater'
    console.log("go under water");
/*     position.value = "0 0 -10"; */

/* setTimeout(()=>{
  document.querySelector("#head").components["simple-navmesh-constraint"].update();
}, 100
) */
  }

  function viewStars(){
    console.log("view sky");
    view.value='sky'
/*     position.value = "0 0 0"; */
setTimeout(()=>{
  document.querySelector("#head").components["simple-navmesh-constraint"].update();
}, 100
)

    //changer de scène
  }

  function testAsc(){
    console.log("test asc")
    document.querySelector("#head").setAttribute("simple-navmesh-constraint", "enabled", false);
  }

</script>

<template>
  <a-entity
    @go-under-water="goUnderWater()" 
    teleport-camera-rig="on:go-on-spaceship; x:-55; y:3; z:-147;"
    @view-sky="viewStars()"
    @go-on-spaceship="$event=>testAsc()"
    animation="property: object3D.position.y;to:81; dur: 10000; easing: linear; loop: false; startEvents:go-on-spaceship;"
    
    id="camera-rig"
    movement-controls="camera: #head; speed:1;"
    disable-in-vr="component: movement-controls;"
    position="0 0 10"
  >

      <a-entity
        id="head"
        look-controls="pointerLockEnabled: true"
        simple-navmesh-constraint="navmesh: [data-role='nav-mesh']; height: 1.65; fall:1;"
        adisable-in-vr="component: simple-navmesh-constraint;"
        camera
        position="0 1.65 0"
      >
      <a-entity v-if="view=='underwater'" position="0 -0.045 -0.03" rotation="0 180 0" scale="1 1 1" gltf-model="#scuba"></a-entity>
        <a-entity
          geometry="primitive: circle; radius: 0.0003;"
          material="shader: flat; color: white;"
          cursor
          raycaster="far: 25; objects: [clickable]; showLine: false;"
          position="0 0 -0.1"
          disable-in-vr="component: raycaster; disableInAR: false;"
          hide-in-vr="hideInAR: false"
        ></a-entity>
      </a-entity>

      <a-entity
        id="hand-left"
        hand-controls="hand: left"
        blink-controls="
          cameraRig: #camera-rig;
          teleportOrigin: #head;
          collisionEntities: [data-role='nav-mesh'];
          snapTurn: false;
        "
      ></a-entity>

      <a-entity
        id="hand-right"
        hand-controls="hand: right"
        laser-controls="hand: right"
        raycaster="far: 2; objects: [clickable]; showLine: true;"
      ></a-entity>

  </a-entity>
</template>