import store from "@/store"
const install = app => {
    app.config.globalProperties.$p = (name) => { 
       // return store.getters['permitions/permition'](name) ? true : false
    }
}
  
  export { install as default }