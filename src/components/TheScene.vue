<script setup>
import { ref } from 'vue';
import { randomHsl } from '../utils/color.js';
import { underwater, viewSky, view } from '../utils/store.js';
import * as Environnement from "https://unpkg.com/aframe-environment-component@1.3.2/dist/aframe-environment-component.min.js"


import ScubaMask from './ScubaMask.vue'
import TheTelescope from './TheTelescope.vue'
import TheCameraRig from './TheCameraRig.vue';
import TheNavMesh from './TheNavMesh.vue';
import TheNavMeshSky from './TheNavMesh2.vue';
import TheNavMeshWater from './TheNavMesh3.vue';
import PortalTeleporter from './PortalTeleporter.vue';

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

function switchView(scene) {
  console.log(scene)
  view.value = scene
  setTimeout(() => {
    document.querySelector("#head").components["simple-navmesh-constraint"].update();
  }, 100
  )
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
    </a-assets>

    <a-entity v-if="allDayAssetsLoaded && view == 'onWater'">
      <TheNavMesh scene="onWater" />
      <a-entity environment="preset: starry; ground : none;"></a-entity>
      <a-entity position="0 -1 -50" scale="1 1 1" rotation="0 90 0" gltf-model="#porsche"></a-entity>
      <!--     <a-entity position="0 -5.5 20" rotation="0 90 0" scale="7 7 7" gltf-model="#sea"></a-entity>
        <a-entity position="-50 -5.5 20" rotation="0 90 0" scale="7 7 7" gltf-model="#sea"></a-entity> -->
      <a-entity position="30 -18 -160" rotation="0 180 0" scale="8 8 8" gltf-model="#sea2"></a-entity>
      <!--     <a-entity star-system></a-entity> -->
      <!--     <a-entity position="-30 -1 -85.6" rotation="0 0 0" scale="8 8 8" gltf-model="#scuba"></a-entity> -->
      <ScubaMask id="scubaLeft" scale="10 10 10" gltf-model="#scuba" position="-30 -1 -85.6" />
      <ScubaMask id="scubaRight" scale="10 10 10" gltf-model="#scuba" position="40 -1 -65.6" />
      <TheTelescope id="telescope" scale="0.05 0.05 0.05" gltf-model="#telescope" position="25 -1 -57.6" />
      <a-entity position="-30 80 -150" rotation="0 90 0" scale="3 3 3" gltf-model="#skyship"></a-entity>
      <a-light type="ambient" color="#fffef7"></a-light>
    </a-entity>

    <button id="switchView" @click="switchOverAndUnderwater($event)">Switcher view</button>

    <a-entity v-if="view == 'underwater'">
      <PortalTeleporter label="Back at the surface" shape="sphere" :x="20" :y="1" :z="-28" material="color: #ffffff"
        position="-30 0.5 -86.6" :rot="0" @click="switchView('onWater')" />
      <TheNavMeshWater scene="underwater" />
      <!--     <TheNavMesh :scene="underwater" /> -->
      <a-entity position="-50 1 -12" rotation="0 -80 0" scale="150 150 150" gltf-model="#nightDive"></a-entity>
      <a-entity position="0 0 -4" rotation="0 0 0" scale="1 1 1" gltf-model="#coralfish"></a-entity>
      <a-sky color="white"></a-sky>
      <a-light color="white" position="0 3 50"></a-light>
      <!--     <a-light type="ambient" color="#fffef7"></a-light> -->
    </a-entity>

    <a-entity v-if="view == 'sky'" postion="0 0 0">
      <PortalTeleporter shape="sphere" label="Back to the beach" :x="25" :y="1" :z="-53.6" material="color: #ffffff"
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