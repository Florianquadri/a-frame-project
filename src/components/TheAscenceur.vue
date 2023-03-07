<script setup>
  import '../aframe/emit-when-near';
  import '../aframe/event-set';
  import '../aframe/clickable';

  import { ref } from 'vue';
  import {onPlatform} from '../utils/store.js'
  
  const detailsAnimation = ref(null);
  const ascIsClicked = ref(false);

  function ascClicked($event){
  console.log("ascenseur is clicked clicked")
/*   onPlatform.value=true; */
   document.querySelector('#camera-rig').emit('go-on-spaceship');
  ascIsClicked.value = true;
  detailsAnimation.value = "property: position; to: -53 80 -150; dur: 10000; easing: linear; loop: false"
  /*   detailsAnimation.value = "property: position; to: -70 80 -147; dur: 10000; easing: linear; loop: false" */
}

</script>

<template>
  <a-entity clickable @click=ascClicked($event) :animation="detailsAnimation"
      >
      
      </a-entity>
</template>

<!-- <template>
    <a-entity v-if="!ascIsClicked">
      <a-entity clickable
        rotation="0 0 0"
        @click=ascClicked($event)></a-entity>
</a-entity>
  <a-entity v-if="ascIsClicked">
    <a-entity animation="property: position; to: -53 70 -150; dur: 10000; easing: linear; loop: false"
        rotation="0 0 0"
        ></a-entity>
  </a-entity>

</template> -->