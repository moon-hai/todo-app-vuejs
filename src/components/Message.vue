<template>
  <p class="tag is-success" v-if="this.display">{{ this.content }}</p>
</template>

<script>
export default {
  name: 'message',
  props: ['display', 'content']
}
</script>

