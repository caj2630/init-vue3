<template>
  <div>views</div>
  <button
    type="button"
    @click="clickHandler"
  >
    button
  </button>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { onMounted } from 'vue'

export default {
  name: 'IndexPage',
  setup () {
    const router = useRouter()

    const route = useRoute()

    const { state, getters, commit, dispatch } = useStore()

    onMounted(() => {
      console.log('Component is mounted!')
    })

    function clickHandler(){
      console.log(11111)
    }

    return {
      state,
      clickHandler
    }
  },


}
</script>

<style scoped>

</style>
