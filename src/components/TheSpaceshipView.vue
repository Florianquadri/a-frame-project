<script setup>

import TheNavMesh from './TheNavMesh.vue';
import ScubaMask from './ScubaMask.vue';
import TheTelescope from './TheTelescope.vue';
/* import TheCorde from './TheCorde.vue'; */
import TheAscenceur from './TheAscenceur.vue'
import TheSpaceship from './TheSpaceship.vue'
import { view } from '../utils/store.js';
import { ref } from 'vue';
const foxAnimation = ref(null)
const foxAnimationRotation = ref(null)
const foxIsReadyToEscape = ref(null)

function foxClicked(){
    console.log("coucou")
    foxAnimation.value = "property: position; to: -53 112 -150; dur: 3000; easing: linear; loop: false"
    foxAnimationRotation.value = "property: rotation; to: 0 440 0; loop: false; dur: 3000"
 setTimeout(()=>{
    foxIsReadyToEscape.value = true;
}, 3000
) 
}

</script>

<template>

  <a-entity position="-45 120 -150" rotation="0 270 0" scale="2.5 2.5 2.5" gltf-model="#spaceshipInterior"></a-entity>
  <a-text v-if="foxIsReadyToEscape" align="center" value="Congrats, you escape ! Hope to see you soon again" position="-5 120 -150" rotation="0 -90 0" scale="15 15 15"></a-text>
  <a-text align="center" value="Click on the fox" position="-31 130 -162" rotation="0 -60 0" scale="4 4 4"></a-text>
  <a-text align="center" value="and be ready" position="-31 130 -137" rotation="0 240 0" scale="4 4 4"></a-text>
  <a-light type="ambient" color="#fffef7"></a-light>
  <a-entity clickable @click=foxClicked($event) position="-25 128 -150" rotation="30 270 0" scale="1 1 1" gltf-model="#fox"
  :animation="foxAnimation" :animation__rotation="foxAnimationRotation"></a-entity>
</template>