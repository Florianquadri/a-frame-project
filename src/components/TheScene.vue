<script setup>
import { ref } from 'vue';
import { randomHsl } from '../utils/color.js';
import { underwater, viewSky, view, switchView, inMySpaceship} from '../utils/store.js';
import * as Environnement from "https://unpkg.com/aframe-environment-component@1.3.2/dist/aframe-environment-component.min.js"


import ScubaMask from './ScubaMask.vue'
import TheTelescope from './TheTelescope.vue'
import TheCameraRig from './TheCameraRig.vue';
import TheNavMesh from './TheNavMesh.vue';
import TheNavMeshSky from './TheNavMesh2.vue';
import TheNavMeshWater from './TheNavMesh3.vue';
import PortalTeleporter from './PortalTeleporter.vue';
import TheBeachView from './TheBeachView.vue';
import TheSkyView from './TheSkyView.vue';
import TheUnderwaterView from './TheUnderwaterView.vue';
import TheSpaceshipView from './TheSpaceshipView.vue';


import '../aframe/life-like-automaton';

defineProps({
  scale: Number,
  overlaySelector: String,
});

const allDayAssetsLoaded = ref(false);

function switchOverAndUnderwater($event) {
  underwater.value = !underwater.value;
}

function scubaMaskClicked($event) {
  console.log("scuba mask clicked")
}

/* function switchPlace($event) {
  viewSky.value = !viewSky.value;
} */


</script>

<template>
  <a-scene background="color: black;" renderer="colorManagement: true;" :webxr="`
                              requiredFeatures: local-floor;
                              referenceSpaceType: local-floor;
                              optionalFeatures: dom-overlay;
                              overlayElement: ${overlaySelector};
                            `">

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
      <a-asset-item id="rope" src="assets/rope.glb"></a-asset-item>
      <a-asset-item id="platform" src="assets/platform.glb"></a-asset-item>
      <a-asset-item id="spaceshipInterior" src="assets/spaceshipInterior4.glb"></a-asset-item>
      <a-asset-item id="fox" src="assets/victory_final.glb"></a-asset-item>
      <a-asset-item id="wave-sound" response-type="arraybuffer" src="assets/ocean.mp3" preload="auto"></a-asset-item>
      
    </a-assets>

    <a-entity v-if="allDayAssetsLoaded && view == 'onWater'">
      <TheBeachView></TheBeachView>
      <TheSpaceshipView v-if="inMySpaceship"></TheSpaceshipView>
    </a-entity>

    <a-entity v-if="view == 'underwater'">
      <TheUnderwaterView></TheUnderwaterView>
    </a-entity>

    <a-entity v-if="view == 'sky'">
      <TheSkyView></TheSkyView>
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