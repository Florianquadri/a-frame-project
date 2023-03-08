<script setup>
import '../aframe/emit-when-near';
import '../aframe/event-set';
import '../aframe/clickable';
import {inMySpaceship, ascIsClicked} from '../utils/store.js'

import { ref } from 'vue';

function spaceshipClicked($event) {
  console.log("spaceship is clicked")
  inMySpaceship.value = true;
  ascIsClicked.value = false;
  setTimeout(() => {
      document.querySelector("#head").setAttribute("simple-navmesh-constraint", "enabled", true);
    }, 500)
  /*    document.querySelector('#camera-rig').emit('go-on-spaceship'); */
}

</script>


  <template>
    <a-entity clickable teleport-camera-rig="x: -53; y: 120; z: -150; " rotation="0 0 0"
      @click=spaceshipClicked($event)></a-entity>
  </template>
