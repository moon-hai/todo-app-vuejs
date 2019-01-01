<template>
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <message :display="this.isDisplay" :content="this.messContent"/>
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
import message from '../mixins/message'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'todo-form',
  mixins: [message],
  data() {
    return {
      id: this.$route.params,
      messContent: "Congrat! You've created / edit successfully !!"
    }
  },
  components: {
    TodoForm
  },
  methods: {
    ...mapActions('message', ['resetMsg'])
  },
  computed: {
    ...mapState('message', ['isDisplay'])
  },
  created() {
    this.resetMsg()
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
