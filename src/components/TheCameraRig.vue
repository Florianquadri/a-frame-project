<script setup>
  import '../aframe/disable-in-vr';
  import '../aframe/hide-in-vr';
  import '../aframe/simple-navmesh-constraint';
  import '../aframe/blink-controls';
  import '../aframe/event-set';
  import '../aframe/listen-to';
  import {underwater, viewSky, view} from '../utils/store.js';
  import {ref, computed, watchEffect} from 'vue';

  const placePoint = computed(() => underwater.value == false ? "0 0 -0.1" : "-0.1 0 -0.1");
  watchEffect(() => {
    console.log(placePoint.value);
  });

  const position = ref("0 0 0");

  function goUnderWater(){
    view.value = 'underwater'
    console.log("go under water");
    position.value = "0 5 -10";

setTimeout(()=>{
  document.querySelector("#head").components["simple-navmesh-constraint"].update();
}, 100
)
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

</script>

<template>
  <a-entity
    @go-under-water="goUnderWater()"
    @view-sky="viewStars()"

    
    id="camera-rig"
    movement-controls="camera: #head; speed:1;"
    disable-in-vr="component: movement-controls;"
    :position="position"
  >

      <a-entity
        id="head"
        look-controls="pointerLockEnabled: true"
        simple-navmesh-constraint="navmesh: [data-role='nav-mesh']; height: 1.65;"
        disable-in-vr="component: simple-navmesh-constraint;"
        camera
        position="0 1.65 0"
      >
      <a-entity v-if="view=='underwater'" position="0 -0.32 -0.28" rotation="0 180 0" scale="8 8 8" gltf-model="#scuba"></a-entity>
        <a-entity
          geometry="primitive: circle; radius: 0.0003;"
          material="shader: flat; color: white;"
          cursor
          raycaster="far: 3; objects: [clickable]; showLine: false;"
          :position="placePoint"
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