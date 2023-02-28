<script setup>
import { ref } from 'vue';
import { randomHsl } from '../utils/color.js';
import { underwater, viewSky } from '../utils/store.js';
import * as Environnement from "https://unpkg.com/aframe-environment-component@1.3.2/dist/aframe-environment-component.min.js"
/* import * as starEnvironnement2 from "https://cdn.rawgit.com/matthewbryancurtis/aframe-star-system-component/db4f1030/index.js" */

import TheCameraRig from './TheCameraRig.vue';
import TheBeachScene from './TheBeachScene.vue';



const allDayAssetsLoaded = ref(false);




</script>

<template>
  <a-scene background="color: black;" renderer="colorManagement: true;">

    <a-assets @loaded="allDayAssetsLoaded = true">


      <a-asset-item id="porsche" src="assets/porsche_low.glb"></a-asset-item>
      <a-asset-item id="telescope" src="assets/telescope.glb"></a-asset-item>
      <a-asset-item id="sea" src="assets/low_poly_island.glb"></a-asset-item>
      <a-asset-item id="sea2" src="assets/isola__island.glb"></a-asset-item>
      <a-asset-item id="starsView" src="assets/sky_pano_-_milkyway.glb"></a-asset-item>
      <a-asset-item id="skyship" src="assets/borderlands_style_space_ship.glb"></a-asset-item>
      <a-asset-item id="scuba" class="cliquable" src="assets/scuba_goggles_and_snorkel.glb"></a-asset-item>
      <a-asset-item id="nightDive" src="assets/oceanfloor.glb"></a-asset-item>
      <a-asset-item id="moon" src="assets/moon.glb"></a-asset-item>
      <a-asset-item id="saturne" src="assets/saturno.glb"></a-asset-item>
      <a-asset-item id="jupiter" src="assets/jupiter.glb"></a-asset-item>
      <a-asset-item id="mars" src="assets/mars.glb"></a-asset-item>
      <a-asset-item id="neptune" src="assets/neptune.glb"></a-asset-item>
      <a-asset-item id="venus" src="assets/venus.glb"></a-asset-item>
      <a-asset-item id="mercury" src="assets/mercury.glb"></a-asset-item>
    </a-assets>

    <a-entity v-if="allDayAssetsLoaded">
      <TheBeachScene></TheBeachScene>
  </a-entity>

  



    <TheCameraRig />

  </a-scene>
</template>

<style scoped>
#switchView {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  background: #fff;
  border: 3px solid #000;
  padding: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
}
</style>