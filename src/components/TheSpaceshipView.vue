<script setup>

import TheNavMesh from './TheNavMesh.vue';
/* import TheCorde from './TheCorde.vue'; */
import TheAscenceur from './TheAscenceur.vue'
import PortalTeleporter from './PortalTeleporter.vue';
import TheSpaceship from './TheSpaceship.vue'
import { view, inMySpaceship, positionAsc } from '../utils/store.js';
import { ref } from 'vue';
const foxAnimation = ref(null)
const foxAnimationRotation = ref(null)
const foxIsReadyToEscape = ref(null)

function foxClicked() {
  console.log("coucou")
  foxAnimation.value = "property: position; to: -53 112 -150; dur: 3000; easing: linear; loop: false"
  foxAnimationRotation.value = "property: rotation; to: 0 440 0; loop: false; dur: 3000"
  setTimeout(() => {
    foxIsReadyToEscape.value = true;
  }, 3000
  )
}

function back2Beginning(){
  positionAsc.value = "-55 0 -147";
  inMySpaceship.value = false;
  switchView('onWater')
}

</script>

<template>
  <a-entity position="-45 120 -150" rotation="0 270 0" scale="2.5 2.5 2.5" gltf-model="#spaceshipInterior"></a-entity>
  <a-text v-if="foxIsReadyToEscape" align="center" value="Congrats, you escape ! Hope to see you soon again"
    position="-5 120 -150" rotation="0 -90 0" scale="15 15 15"></a-text>
  <a-text align="center" value="Click on the fox" position="-31 130 -162" rotation="0 -60 0" scale="4 4 4"></a-text>
  <a-text align="center" value="and be ready" position="-31 130 -137" rotation="0 240 0" scale="4 4 4"></a-text>
  <a-light type="ambient" color="#fffef7"></a-light>
  <a-entity clickable @click=foxClicked($event) position="-25 128 -150" rotation="30 270 0" scale="1 1 1"
    gltf-model="#fox" :animation="foxAnimation" :animation__rotation="foxAnimationRotation"></a-entity>
  <a-entity v-if="foxIsReadyToEscape"
    sound="src:#victory-song; autoplay: true ; maxDistance: 300; loop: true; volume: 30;"
    position="0 -122.3 -5"></a-entity>
  <PortalTeleporter rotation="0 90 0" label="Miss the island..." scale="5 5 5"  :x="0" :y="0" :z="10" material="color: #ffffff"
    position="-105 120 -150" :rot="0" @click="back2Beginning()" />
</template>