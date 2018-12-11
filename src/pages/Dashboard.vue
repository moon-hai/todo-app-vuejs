<template>
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <p class="tag is-success" v-if="this.flash">Congrat! You've done !!</p>
      <nav class="panel">
        <p class="panel-heading">
          todo list

          <router-link class="button is-primary" to="/add">+</router-link>
        </p>
        <TodoList />
        <Tab />
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Tab from '../components/Tab'
import TodoList from '../components/TodoList'

export default {
  name: 'dashboard',
  components: {
    TodoList,
    Tab
  },
  computed: {
    ...mapState('todoItems', ['flash'])
  },
  methods: {
    ...mapActions('todoItems', ['resetFlash'])
  },
  created() {
    this.resetFlash()
  }
}
</script>

<style lang="css">
  .panel-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .tag.is-success {
    margin-bottom: 20px;
    height: 2em;
    font-size: 16px;
  }
</style>
