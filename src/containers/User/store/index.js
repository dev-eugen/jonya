import actions from "./actions"
import getters from "./getters"
import mutations from "./mutations"

export default {
    namespased: true,
    state:  () => ({
        auth: false,
        data: {}
    }),
    getters: getters,
    mutations: mutations,
    actions: actions
};