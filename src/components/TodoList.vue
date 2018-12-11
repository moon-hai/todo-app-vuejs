<template>
  <div class="panel-list">
    <div class="panel-block">
      <p class="control has-icons-left">
        <input class="input is-small" type="text" placeholder="search" v-model="name">
        <span class="icon is-small is-left">
          <i class="fas fa-search" aria-hidden="true"></i>
        </span>
      </p>
    </div>
    <TodoItem v-for="item in filterTodoItems(name)"
              :key="item.id"
              :item="item" />
  </div>
</template>

<script>
import TodoItem from './TodoItem'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'todo-list',
  data() {
    return {
      name: ''
    }
  },
  components: {
    TodoItem
  },
  computed: {
    ...mapState('todoItems', ['todoList']),

    ...mapGetters('todoItems', ['filterTodoItems'])
  },
  methods: {
    ...mapActions('todoItems', ['fetchAllItems'])
  },
  created() {
    this.fetchAllItems()
  }
}
</script>
