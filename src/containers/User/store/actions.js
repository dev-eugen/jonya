export default {
    async auth({ commit }) {
        const userData = axios.get(/* route */)
        commit('updateData', await userData)
    }
}