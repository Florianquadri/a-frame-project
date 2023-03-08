
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
 
 <a-entity
    geometry="primitive: plane; height: 135; width: 35"
    position="190.648 0.01 -240.669"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: green"
    visible="false"
  ></a-entity>

  


</template>