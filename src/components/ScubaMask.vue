<script setup>
  import '../aframe/emit-when-near';
  import '../aframe/event-set';
  import '../aframe/clickable';

  import { ref } from 'vue';
  

  function scubaMaskClicked($event){
  console.log("scuba mask clicked")
  document.querySelector('#camera-rig').emit('go-under-water');
}

/*   const randomColor = ref(randomHsl()); */
</script>

<template>
        <a-entity clickable teleport-camera-rig="x: 0; y: 0; z: -10; "
        rotation="0 0 0"
        @click=scubaMaskClicked($event)></a-entity>

</template>