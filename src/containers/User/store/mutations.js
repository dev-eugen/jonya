import router from "@/router"

export default {
    updateData(state, payload) {
        state.data = payload
    },
    auth(state) {
        state.auth = true
    },
    logout(state) {
        state.auth = false
        localStorage.clear()
        state.permitions.permitions = [] 
        router.push('/login')
    }
}