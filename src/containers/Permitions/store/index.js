import actions from "./actions"
import getters from "./getters"
import mutations from "./mutations"

export default {
    namespased: true,
    state:  () => ({
        permitions: []
    }),
    getters: getters,
    mutations: mutations,
    actions: actions
};