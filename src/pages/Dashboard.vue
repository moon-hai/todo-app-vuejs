<template>
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <message :display="this.flash" :content="this.messContent"/>
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
import message from '../mixins/message'
import Tab from '../components/Tab'
import TodoList from '../components/TodoList'

export default {
  name: 'dashboard',
  mixins: [message],
  data() {
    return {
      messContent: "Congrat! You've done !!"
    }
  },
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
