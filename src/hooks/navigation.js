import navigation_data from '../data/navigation'

import { ref } from 'vue'
export default function() {
    const navigation = ref(navigation_data)


    return { navigation }
}