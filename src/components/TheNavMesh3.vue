
<script setup>
  import '../aframe/emit-when-near';
  import '../aframe/event-set';
  import '../aframe/clickable';

  import { ref } from 'vue';

  defineProps({
    scene: String,
  });


</script>

<template>
 
 <a-entity v-if="scene='underwater'">
    <a-entity
    geometry="primitive: plane; height: 240; width: 235"
    position="-50 0 0"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: red"
    visible="false"
  ></a-entity>

  </a-entity>

  


</template>