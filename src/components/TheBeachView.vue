<script setup>

import { ref } from 'vue';
import TheNavMesh from './TheNavMesh.vue';
import ScubaMask from './ScubaMask.vue';
import TheTelescope from './TheTelescope.vue';
/* import TheCorde from './TheCorde.vue'; */
import TheAscenceur from './TheAscenceur.vue'
import TheSpaceship from './TheSpaceship.vue'
import { view, showOnboarding } from '../utils/store.js';
import '../aframe/emit-when-near';

const textIntro = ref(false)
const textIntro2 = ref(false)

function showTextIntro(){
  console.log("test")
  textIntro.value=true;
}

function showTextIntro2(){
  console.log("test")
  textIntro2.value=true;
}

</script>

<template>
  <TheNavMesh scene="onWater" />
  <a-text  emit-when-near=" event: showTextValue; distance:3;" align="center" value="Welcome on the Island !" position="0 1.5 7"
  @showTextValue=" showTextIntro()"></a-text>
  <a-text v-if="textIntro"  emit-when-near=" event: showTextValue2; distance:3;" align="center" value="    YOU CAN" position="0 1.5 0"
  @showTextValue2=" showTextIntro2()"></a-text>
  <a-text v-if="textIntro2" align="center" value="CHILL" position="-2 1.5 -10"></a-text>
  <a-text v-if="textIntro2" align="center" value="EXPLORE " position="0 1.5 -7"></a-text>
  <a-text v-if="textIntro2" align="center" value="& ESCAPE..." position="2 1.5 -10"></a-text>
<!--   <a-box color="red" depth="2" height="3" width="5" position="0 1.6 -14.827" visible="false"
    emit-when-near=" event: showTextValue;"
    sound="src: #kass; loop:true; on: showTextValue;  volume: 0.1; refDistance: 5; rolloffFactor: 1 "  
    @showTextValue=" OpenIntro()"
    ></a-box> -->
  <a-entity scale="2 2 2" environment="preset: starry; ground : none;"></a-entity>
  <a-entity position="0 -1 -50" scale="1 1 1" rotation="0 90 0" gltf-model="#porsche"></a-entity>
  <a-entity position="30 -18 -160" rotation="0 180 0" scale="8 8 8" gltf-model="#sea2"></a-entity>
  <!--       <a-light type="point" color="red" position="0 5 -10"></a-light> -->
  <a-entity position="-30 2 -85.6"
    light="type: spot; angle: 60; color:red; intensity:10; target:#scubaLeft; decay:500;"></a-entity>
  <a-entity position="40 2 -60.6"
    light="type: spot; angle: 60; color:red; intensity:10; target:#scubaRight; decay:500;"></a-entity>
  <a-entity position="25 2 -57.6"
    light="type: spot; angle: 60; color:red; intensity:10; target:#telescopee; decay:500;"></a-entity>

  <!--     <a-entity star-system></a-entity> -->
  <!--     <a-entity position="-30 -1 -85.6" rotation="0 0 0" scale="8 8 8" gltf-model="#scuba"></a-entity> -->
  <ScubaMask id="scubaLeft" scale="10 10 10" gltf-model="#scuba" position="-30 -1 -85.6" :x="-30" :z="-85.6" />
  <ScubaMask id="scubaRight" scale="10 10 10" gltf-model="#scuba" position="40 -1 -60.6" />
  <TheTelescope id="telescopee" scale="0.05 0.05 0.05" gltf-model="#telescope" position="25 -1 -57.6" />
  <TheSpaceship id="vaisseau" position="-55 80 -147" rotation="0 90 0" scale="3 3 3" gltf-model="#skyship"></TheSpaceship>
  <TheAscenceur position="-55 0 -147" scale="3 3 3" gltf-model="#platform"></TheAscenceur>
  <!--   <TheCorde id="corde" position="-53 40 -150" scale="2 8 2" gltf-model="#rope"></TheCorde> -->
  <a-entity position="-55 1 -147" id="plateformEmplacement"></a-entity>
  <a-entity position="-55 6 -147"
    light="type: spot; angle: 60; color:#ffffff; intensity:3; target:#plateformEmplacement; decay:500;"></a-entity>
  <a-light type="ambient" color="#fffef7"></a-light>
  <a-entity v-if="!showOnboarding"
      sound="src:#wave-sound; autoplay: true ; maxDistance: 300; loop: true; volume: 40;"
      position="0 -122.3 -5"
      ></a-entity>
</template>