<template>
  <div id="app" @dragover.prevent  @drop.prevent> 
    <component  :is="layout">
      <router-view />
    </component>
  </div>
</template> 
<!--<script setup>
    import { computed, getCurrentInstance } from 'vue'
    import { useRoute } from 'vue-router'

    import router from '@/router'

    import  SideMenu  from '@/layouts/SideMenu.vue'
 
    const route = useRoute()
    const app = getCurrentInstance()

    console.log(app);
 

    const layout = computed(() => `${route.meta.layout}Menu`)  
 
</script>-->
<script> 
import store from '@/store'
import SideMenu from '@/layouts/SideMenu.vue'
export default {
  components: {
    SideMenu
  },
  computed: {
    layout() {
      return `${this.$route.meta.layout}Menu`
    }
  },
  setup(props) {
    return {
      store
    }
  }
}
</script> 