<template>
  <div class="panel-item">
    <a class="panel-block" @click="toggleDescription" :class="{ 'is-active': !isHidden }">
      <p>
        <span class="panel-icon">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span>
        {{ item.name }}
      </p>
      <a class="button"
        :class="item.status ? 'is-warning' : 'is-primary'"
        v-text="item.status ? 'Pending...' : 'Completed'"
        @click.stop.prevent="toggleStatus(item)"></a>
    </a>
    <div class="panel-detail" :class="{ 'hidden': isHidden }">
      <p>{{ item.descriptions }}</p>
      <p class="button-group">
        <router-link :to="`/edit/${item.id}`" class="button is-primary">Edit</router-link>
        <a class="button is-danger" @click="removeItem(item)">Remove</a>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'todo-item',
  props: ['item'],
  data() {
    return {
      isHidden: true
    }
  },
  methods: {
    ...mapActions('todoItems', ['toggleStatusItem', 'removeToDoItem']),

    toggleDescription: function() {
      this.isHidden = !this.isHidden
    },
    toggleStatus: function(item) {
      let data = {
        id: item.id,
        status: !item.status
      }
      this.toggleStatusItem(data)
    },
    removeItem: function(item) {
      this.removeToDoItem(item.id)
    }
  }
}
</script>

<style lang="css">
  .panel-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .panel-block.is-active {
    color: #3273dc;
  }

  .panel-block .panel-icon {
    vertical-align: middle
  }

  .panel-detail {
    padding: 10px;
    border: 1px solid #ccc;
    border-top: 0;
    border-bottom: 0;
  }

  .panel-detail.hidden {
    display: none;
  }

  .panel-detail .button-group {
    margin-top: 20px;
    text-align: center;
  }
</style>

