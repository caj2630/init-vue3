<template>
  <div>views</div>
  {{ state }}
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'IndexPage',
  setup () {
    const router = useRouter()

    const route = useRoute()

    const { state, getters, commit, dispatch } = useStore()

    return {
      state
    }
  }
}
</script>

<style scoped>

</style>
