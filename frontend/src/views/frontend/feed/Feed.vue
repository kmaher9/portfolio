<template>
  <div
    class="container"
    style="height: 100vh; border: 1px solid rgba(0, 0, 0, 0.1);">
    <compose-tweet/>
  </div>
</template>

<script>
import Compose from '@/components/frontend/feed/Compose.vue'

export default {
  components: {
    'ComposeTweet': Compose
  }
}
</script>

<style lang="scss" scoped>
  .container {
    padding: 0;
  }
</style>