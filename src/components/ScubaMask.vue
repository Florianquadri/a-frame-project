<script setup>
  import '../aframe/emit-when-near';
  import '../aframe/event-set';
  import '../aframe/clickable';

  import { ref } from 'vue';
  

  function scubaMaskClicked($event){
  console.log("scuba mask clicked")
}

/*   const randomColor = ref(randomHsl()); */
</script>

<template>
        <a-entity clickable
        rotation="0 0 0"
        @click=scubaMaskClicked($event)></a-entity>

</template>