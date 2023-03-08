import { ref } from 'vue';
export const underwater = ref(false);
export const viewSky = ref(false);
export const view = ref('onWater');
export const inMySpaceship = ref(false);
export const onPlatform=ref(false);
export const showOnboarding =ref(true);
export const ascIsClicked = ref(false);
export const telescopeIsClicked = ref(false);
export const detailsAnimation = ref(null);
export function switchView(scene) {
    console.log(4352523)
    view.value = scene
    document.querySelector("#head").setAttribute("simple-navmesh-constraint", "enabled", false);
    setTimeout(() => {
      document.querySelector("#head").setAttribute("simple-navmesh-constraint", "enabled", true);
    }, 500
    )
  }
