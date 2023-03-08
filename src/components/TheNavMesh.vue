
<script setup>
  import '../aframe/emit-when-near';
  import '../aframe/event-set';
  import '../aframe/clickable';
  import {onPlatform} from '../utils/store.js'

  import { ref } from 'vue';

  defineProps({
    scene: String,
  });

/*   const whichScene = ref(scene); */
/*   const myNavMesh = computed(()=>{
    if(scene.value == "onWater"){
      return "onWater"
    }
  }) */


</script>
<template>
  <a-entity v-if="scene='onWater'">

    <a-entity
    geometry="primitive: plane; height: 80; width: 425"
    position="30 0.01 11.75"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: blue"
    visible="false"
  ></a-entity>
  <a-entity
    geometry="primitive: plane; height: 70; width: 350"
    position="30 0.01 -330.75"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: blue"
    visible="false"
  ></a-entity>
  <a-entity
    geometry="primitive: plane; height: 35; width: 140"
    position="83 0.01 -33.75"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: red"
    visible="false"
  ></a-entity>
  <a-entity
    geometry="primitive: plane; height: 20; width: 110"
    position="75 0.01 -50.75"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: red"
    visible="false"
  ></a-entity>
  <a-entity
    geometry="primitive: plane; height: 20; width: 80"
    position="80 0.01 -55.75"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: green"
    visible="false"
  ></a-entity>
  <a-entity
    geometry="primitive: circle; radius:38"
    position="-46 0.01 -53.75"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: red"
    visible="false"
  ></a-entity>
  <a-entity
    geometry="primitive: circle; radius:18"
    position="-17.809 0.01 -22.046"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: red"
    visible="false"
  ></a-entity>
  <a-entity
    geometry="primitive: circle; radius:18"
    position="20.278 0.01 -32.503"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: red"
    visible="false"
  ></a-entity>
  <a-entity
    geometry="primitive: plane; height: 400; width: 105"
    position="-130 0.01 -150.75"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: blue"
    visible="false"
  ></a-entity>
  <a-entity
    geometry="primitive: plane; height: 420; width: 50"
    position="215 0.01 -155.75"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: blue"
    visible="false"
  ></a-entity>
  <a-entity
    geometry="primitive: plane; height: 45; width: 15"
    position="-70.648 0.01 -125.669"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: green"
    visible="false"
  ></a-entity>
  <a-entity
    geometry="primitive: plane; height: 25; width: 15"
    position="-60.218 0.01 -136.326"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: green"
    visible="false"
  ></a-entity>
  <a-entity
    geometry="primitive: plane; height: 35; width: 55"
    position="-70.648 0.01 -250.669"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: green"
    visible="false"
  ></a-entity>
  <a-entity
    geometry="primitive: plane; height: 135; width: 35"
    position="190.648 0.01 -240.669"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: green"
    visible="false"
  ></a-entity>
  <a-entity
    geometry="primitive: plane; height: 25; width: 95"
    position="180.648 0.01 -280.669"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: green"
    visible="false"
  ></a-entity>
  <a-entity
    geometry="primitive: plane; height: 15; width: 65"
    position="130.648 0.01 -290.669"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: red"
    visible="false"
  ></a-entity>
  <a-entity
    geometry="primitive: circle; radius:38"
    position="192 0.01 -253.75"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: red"
    visible="false"
  ></a-entity>
  <a-entity
    geometry="primitive: circle; radius:20"
    position="-20 0.01 -300.75"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: red"
    visible="false"
  ></a-entity>
  <a-entity
    geometry="primitive: plane; height: 37; width: 70"
    position="-70 120 -149"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: red"
    visible="false"
  ></a-entity>

</a-entity>
</template>