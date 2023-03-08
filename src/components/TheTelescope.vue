<script setup>
import '../aframe/emit-when-near';
import '../aframe/event-set';
import '../aframe/clickable';
import { switchView, telescopeIsClicked } from '../utils/store.js'

import { ref } from 'vue';


function telescopeClicked($event) {
  telescopeIsClicked.value = true;
  console.log("telescope mask clicked")
  /*   document.querySelector('#camera-rig').emit('view-sky'); */
  switchView("sky")
}

/*   const randomColor = ref(randomHsl()); */
</script>

<template>
  <a-entity clickable rotation="0 0 0" @click=telescopeClicked($event)></a-entity>
</template>