
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
 
 <a-entity v-if="scene='underwater'">
    <a-entity
    geometry="primitive: plane; height: 240; width: 235"
    position="-50 0 0"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: white"
    visible="false"
  ></a-entity>

  </a-entity>

  


</template>