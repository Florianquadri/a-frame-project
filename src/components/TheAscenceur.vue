<script setup>
  import '../aframe/emit-when-near';
  import '../aframe/event-set';
  import '../aframe/clickable';

  import { ref } from 'vue';
  import {onPlatform, ascIsClicked, detailsAnimation} from '../utils/store.js'
  

  function ascClicked(event){
  console.log("ascenseur is clicked clicked")
/*   onPlatform.value=true; */
   document.querySelector('#camera-rig').emit('go-on-spaceship');
   ascIsClicked.value = true;
   event.target.removeAttribute('animation')
   event.target.setAttribute('animation','property: position; to: -53 81 -150; dur: 10000; easing: linear; loop: false')
}
</script>

<template>
  <a-entity id="ascMove" clickable @click=ascClicked($event)
      >  
      </a-entity>
</template>
