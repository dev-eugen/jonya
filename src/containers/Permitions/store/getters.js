export default {
    permition: (state) => (str) => state.role ?  state.permitions.find(e => e.name == state.role).allowed.some(e => e.value == str) : false
}