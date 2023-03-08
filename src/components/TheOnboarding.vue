<script setup>
  import { ref } from 'vue';
  import {showOnboarding} from '../utils/store.js';

  defineProps({
    loaded: Boolean,
  });

/*   const showOnboarding = ref(true); */

  function enterScene() {
    showOnboarding.value = false;
    if (AFRAME.utils.device.checkHeadsetConnected() && !AFRAME.utils.device.isMobile()) {
      document.querySelector('a-scene').enterVR();
      console.log("test bouton")
    }
  }
</script>

<template>
  <div id="onboarding" v-if="showOnboarding">
    <div>
      <h1>Lost on the Island</h1>
      <p v-if="!loaded">loading...</p>
      <button v-if="loaded" @click="enterScene()">Enter the game</button>
      <div class="licences">
        <dl>
          <dt>
            <i>Included</i>
          </dt>
          <dt>
            <a href="https://github.com/c-frame/aframe-extras" target="_blank">aframe-extras controls and animation-mixer</a>
          </dt><dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/jure/aframe-blink-controls/" target="_blank">aframe-blink-controls</a>
          </dt><dd>
            <a href="https://github.com/jure/aframe-blink-controls/blob/main/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href=" https://github.com/AdaRoseCannon/aframe-xr-boilerplate" target="_blank">simple-navmesh-constraint</a>
          </dt><dd>
            By Ada Rose Cannon under MIT License
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/sky-pano-milkyway-0016725c047a4ea18cd0b5e5ef2fe441" target="_blank">Sky pano - milky way</a>
          </dt><dd>
            by <a href="https://sketchfab.com/mozillareality" target="_blank">Mozilla Hubs</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/pip-victory-final-b1565602acf2441db8c60b4ee3535aa7" target="_blank">Pip Victory final</a>
          </dt><dd>
            by <a href="https://sketchfab.com/raynart7" target="_blank">Raynart 7</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/arrow-point-pendant-e2cafa55bb5541b3a42b76917fc14af0" target="_blank">Arrow</a>
          </dt><dd>
            by <a href="https://sketchfab.com/heavy9" target="_blank">Heavy 9</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/borderlands-style-space-ship-1bf4bf7a147041d8ac3776551d505974" target="_blank">Borderlands style space ship</a>
          </dt><dd>
            by <a href="https://sketchfab.com/B.M.A" target="_blank">B.M.A</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/saturno-f7e67000ff7f461a88fbbec04a961b67#download" target="_blank">Saturno</a>
          </dt><dd>
            by <a href="https://sketchfab.com/robiscogames" target="_blank">Sara Robisco</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/mars-6f9ebc64e6c74068a8412a7dd74dfb96" target="_blank">Mars</a>
          </dt><dd>
            by <a href="https://sketchfab.com/JanesBt" target="_blank">Janes BT</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/neptune-8c6dc96f47ab4d798a1cb2d827da3fbe" target="_blank">Neptune</a>
            & <a href="https://sketchfab.com/3d-models/venus-b306aaadbf2b4fcea1afa2db5ed75b4f#download" target="_blank">Venus</a>
          </dt><dd>
            by <a href="https://sketchfab.com/minecraftnorge" target="_blank">Kongle</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/mercury-32347fa4ec1a4987b71f461a401d91c4" target="_blank">Mercure</a>
          </dt><dd>
            by <a href="https://sketchfab.com/shooter24994" target="_blank">Akshat</a>
          </dd>

          <dt>
            <a href="https://github.com/supermedium/aframe-environment-component" target="_blank">A-frame-environnement</a>
          </dt><dd>
            by <a href="https://github.com/supermedium/aframe-environment-component/commits?author=dmarcos" target="_blank">Dmacos</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/round-platform-64de8f896e3e40e4a1e8a67d01620ac1#download" target="_blank">Round platform</a>
          </dt><dd>
            by <a href="https://sketchfab.com/noortjeschuurs" target="_blank">Noortjeschuur</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/oceanfloor-0059985fb33047b3ba19137d6efe01a4" target="_blank">Oceanfloor</a>
          </dt><dd>
            by <a href="https://sketchfab.com/Guitarman2492" target="_blank">Guitarman2492</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/sci-fi-spaceship-bridge-aaa5259e54e14c79936df3d127644287" target="_blank">Sci-fi spaceship bridge</a>
          </dt><dd>
            by <a href="https://sketchfab.com/dylanheyes" target="_blank">Dylanheyes</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/low-poly-porsche-964-wide-body-2554786e72b14c589ea2098a3bad1525" target="_blank">Porsche low-poly</a>
          </dt><dd>
            by <a href="https://sketchfab.com/dsm350" target="_blank">All-wide</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/telescope-7220b6283360440fbbf8ccff08e25a7f" target="_blank">Telescope</a>
          </dt><dd>
            by <a href="https://sketchfab.com/topfrank2013" target="_blank">Francesco Coldesina</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/scuba-goggles-and-snorkel-6552ed7809cb4eaca6fd3c987165adbb" target="_blank">Scuba Googles And Snorkel</a>
          </dt><dd>
            by <a href="https://sketchfab.com/milansaman21" target="_blank">Turtle_Flipper></a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/saturn-project-a878df3b9fbb4e7eacaed49cc7d7940c" target="_blank">Saturn project</a>
          </dt><dd>
            by <a href="https://sketchfab.com/KDT7" target="_blank">KDT7></a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/red-betta-fish-e088615fe2934a92be6316782d25f93a" target="_blank">Red fish</a>
          </dt><dd>
            by <a href="https://sketchfab.com/elqui" target="_blank">Elinor Quittner></a>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h1 { font-size: 1.5rem }
  a {
    color: #eee;
    text-decoration: none;
  }
  .licences {
    margin: 2rem 0;
    font-size: 1rem;
    text-align: left;
  }
  .licences dt {
    padding-top: 0.75rem;
    font-size: 0.9rem;
    font-weight: bold;
  }
  .licences dd {
    margin-left: 0;
    font-size: 0.8rem;
  }

  #onboarding {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #333;
    color: #ccc;
    width: 100vw;
    height: 100vh;
    padding: 1rem;
    font-family: monospace;
    z-index: 10000;
    overflow: auto;
  }
  #onboarding > * {
    margin: 0 auto;
    max-width: 50rem;
    width: calc(100vw - 10rem);
    text-align: center;
    border-radius: 0.3rem;
    padding: 1rem;
    font-size: 1.3rem;
  }
  #onboarding button {
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    background-color: white;
    color: black;
    border: none;
    cursor: pointer;
  }
</style>