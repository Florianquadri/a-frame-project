<script setup>

import TheNavMeshWater from './TheNavMesh3.vue';
import PortalTeleporter from './PortalTeleporter.vue';
import {view, switchView } from '../utils/store.js';


</script>

<template>
 <PortalTeleporter label="Back at the surface" shape="sphere" :x="-30" :y="0.5" :z="-82.6" material="color: #ffffff"
        position="-30 0.5 -86.6" :rot="0" @click="switchView('onWater')" />
      <TheNavMeshWater scene="underwater" />
      <!--     <TheNavMesh :scene="underwater" /> -->
      <a-entity position="-50 1 -12" rotation="0 -80 0" scale="150 150 150" gltf-model="#nightDive"></a-entity>
      <a-entity position="0 0 -4" rotation="0 0 0" scale="1 1 1" gltf-model="#coralfish"></a-entity>
      <a-sky color="white"></a-sky>
      <a-light color="white" position="0 3 50"></a-light>
      <!--     <a-light type="ambient" color="#fffef7"></a-light> -->
</template>