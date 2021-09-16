import { createStore } from 'vuex'
import user from '@user/store'

const store = createStore({
    modules: {
        user,
    },
})

export default store
