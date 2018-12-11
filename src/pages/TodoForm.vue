<template>
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <p class="tag is-success" v-if="this.flash">Congrat! You've created / edit successfully !!</p>
      <div class="panel">
        <p class="panel-heading">
          todo form
        </p>
        <TodoForm />
      </div>
    </div>
  </div>
</template>

<script>
import TodoForm from '../components/TodoForm'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'todo-form',
  data() {
    return {
      id: this.$route.params
    }
  },
  components: {
    TodoForm
  },
  methods: {
    ...mapActions('todoItem', ['resetFlash'])
  },
  computed: {
    ...mapState('todoItem', ['flash'])
  },
  created() {
    this.resetFlash()
  }
}
</script>

<style lang="css">
  .tag.is-success {
    margin-bottom: 20px;
    height: 2em;
    font-size: 16px;
  }
</style>
