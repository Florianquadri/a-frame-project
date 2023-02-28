<script setup>

import TheNavMesh from './TheNavMesh.vue';
import ScubaMask from './ScubaMask.vue';
import TheTelescope from './TheTelescope.vue';
import { view } from '../utils/store.js';

</script>

<template>
    <TheNavMesh scene="onWater" />
      <a-entity environment="preset: starry; ground : none;"></a-entity>
      <a-entity position="0 -1 -50" scale="1 1 1" rotation="0 90 0" gltf-model="#porsche"></a-entity>
      <a-entity position="30 -18 -160" rotation="0 180 0" scale="8 8 8" gltf-model="#sea2"></a-entity>
      <!--     <a-entity star-system></a-entity> -->
      <!--     <a-entity position="-30 -1 -85.6" rotation="0 0 0" scale="8 8 8" gltf-model="#scuba"></a-entity> -->
      <ScubaMask id="scubaLeft" scale="10 10 10" gltf-model="#scuba" position="-30 -1 -85.6" />
      <ScubaMask id="scubaRight" scale="10 10 10" gltf-model="#scuba" position="40 -1 -60.6" />
      <TheTelescope id="telescope" scale="0.05 0.05 0.05" gltf-model="#telescope" position="25 -1 -57.6" />
      <a-entity position="-30 80 -150" rotation="0 90 0" scale="3 3 3" gltf-model="#skyship"></a-entity>
      <a-light type="ambient" color="#fffef7"></a-light>
</template>