
<script setup>
  import '../aframe/emit-when-near';
  import '../aframe/event-set';
  import '../aframe/clickable';

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
 
  <a-entity v-if="scene='sky'"
    geometry="primitive: circle; radius:12"
    position="25 0 -52.6"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: red"
    visible="false"
  ></a-entity>

  


</template>