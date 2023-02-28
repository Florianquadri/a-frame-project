import { ref } from 'vue';
export const underwater = ref(false);
export const viewSky = ref(false);
export const view = ref('onWater');
export function switchView(scene) {
    console.log(scene)
    view.value = scene
/*     setTimeout(() => {
      document.querySelector("#head").components["simple-navmesh-constraint"].update();
    }, 100
    ) */
  }