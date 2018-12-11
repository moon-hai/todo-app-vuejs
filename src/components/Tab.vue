<template>
  <p class="panel-tabs">
    <a @click="getAll">all</a>
    <a @click="getPending">pending</a>
    <a @click="getCompleted">completed</a>
  </p>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'tab',
  methods: {
    ...mapActions('todoItems', ['getAllItems', 'getPendingItems', 'getCompletedItems']),

    getAll: function() {
      this.getAllItems()
    },
    getPending: function() {
      this.getPendingItems()
    },
    getCompleted: function() {
      this.getCompletedItems()
    }
  }
}
</script>

<style lang="css">
  .panel-tabs {
    border-top: 1px solid #ccc;
  }
</style>
