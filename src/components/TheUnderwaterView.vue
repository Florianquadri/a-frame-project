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
      <a-entity position="-40 1.5 -130" rotation="0 0 0" scale="0.02 0.02 0.02" gltf-model="#redFish"
      animation="property: position; to: 70 1.5 50; dur: 10000; easing: linear; loop: true;"></a-entity>
<!--       <a-entity id="fishMoving" position="-40 1.5 -130" rotation="0 0 0" scale="0.02 0.02 0.02" gltf-model="#redFish"
      animation__first="property: position; to: 70 1.5 50; dur: 10000; easing: linear; loop: false; startEvents:animationcomplete__forth"
      animation__second="property: rotation; to: 0 180 0; loop: false; dur: 1000; startEvents:animationcomplete__first"
      animation__third="property:  position; to: -40 1.5 -130; loop: false; dur: 10000; startEvents:animationcomplete__second"
      animation__forth="property: rotation; to: 0 0 0; loop: false; dur: 1000; startEvents:animationcomplete__third"></a-entity> -->
      <a-sky color="white"></a-sky>
      <a-light color="white" position="0 3 50"></a-light>
      <a-entity v-if="view='underwater'" sound="src:#underwater-song; autoplay: true ; maxDistance: 300; loop: true; volume: 30;"
    position="0 -122.3 -5"></a-entity>
      <!--     <a-light type="ambient" color="#fffef7"></a-light> -->
</template>