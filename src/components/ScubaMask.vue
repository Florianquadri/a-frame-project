<script setup>
  import '../aframe/emit-when-near';
  import '../aframe/event-set';
  import '../aframe/clickable';
  import { switchView } from '../utils/store.js'

  import { ref } from 'vue';

  defineProps({
  x: {
    type: Number,
    default: 0
  },
  y: {
    type: Number,
    default: 0
  },
  z: {
    type: Number,
    default: -9
  }
}); 
  

  function scubaMaskClicked($event){
  console.log("scuba mask clicked")
  switchView("underwater")
/*   document.querySelector('#camera-rig').emit('go-under-water'); */
}

/*   const randomColor = ref(randomHsl()); */
</script>

<template>
        <a-entity clickable :teleport-camera-rig="`x: ${x}; y: ${y}; z: ${z}; `"
        rotation="0 0 0"
        @click=scubaMaskClicked($event)></a-entity>

</template>