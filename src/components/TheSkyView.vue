<script setup>

import TheNavMeshSky from './TheNavMesh2.vue';
import {view, switchView } from '../utils/store.js';
import PortalTeleporter from './PortalTeleporter.vue';


</script>

<template>
 <PortalTeleporter shape="sphere" label="Back to the beach" :x="25" :y="1" :z="-48.6" material="color: #ffffff"
        position="25 1 -65.6" rotation="0 0 0" :rot="0" @click="switchView('onWater')" />
      <!--     <TheNavMesh :scene="sky" /> -->
      <TheNavMeshSky scene="sky" />
      <a-entity position="25 -1 -57.6" rotation="0 0 0" scale="4 4 4" gltf-model="#starsView"></a-entity>
      <a-entity position="24 1.5 -58.6" rotation="0 90 0" scale="0.1 0.1 0.1" gltf-model="#skyship"></a-entity>
      <a-entity position="28 2 -58.6" rotation="0 90 0" scale="0.2 0.2 0.2" gltf-model="#moon"></a-entity>
      <a-entity position="28.874 1.942 -49.011" rotation="0 90 0" scale="0.3 0.3 0.3" gltf-model="#saturne"></a-entity>
      <a-entity position="28.117 1.989 -53.065" rotation="0 90 0" scale="0.4 0.4 0.4" gltf-model="#jupiter"></a-entity>
      <a-entity position="27.018 1.113 -56.260" rotation="0 90 0" scale="0.2 0.2 0.2" gltf-model="#mars"></a-entity>
      <a-entity position="26.620 1.777 -44" rotation="0 90 0" scale="0.3 0.3 0.3" gltf-model="#neptune"></a-entity>
      <a-entity position="-21.039 0.406 -60.532" rotation="0 90 0" scale="0.3 0.3 0.3" gltf-model="#venus"></a-entity>
      <a-entity position="-19.378 0.952 -61.194" rotation="0 90 0" scale="0.3 0.3 0.3" gltf-model="#mercury"></a-entity>
      <a-light type="ambient" color="#fffef7"></a-light>
      <a-sphere id="uranus" color="#aec1c8" radius="0.5" position="28.103 1.870 -44.456" rotation="90 90 0"></a-sphere>
</template>