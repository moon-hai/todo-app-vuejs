<template>
  <div class="panel-block">
    <div class="field">
      <label class="label">Name <span class="tag is-danger">require</span></label>
      <div class="control">
        <input class="input" type="text" placeholder="Learn Javacript" v-model="params.name">
      </div>
    </div>

    <div class="field">
      <label class="label">Description <span class="tag is-danger">require</span></label>
      <div class="control">
        <input class="input" type="email" placeholder="Today I learn javascript" v-model="params.descriptions">
      </div>
    </div>

    <div class="control">
      <button class="button is-primary" @click.prevent="onSubmitForm">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  name: 'todo-form',
  data() {
    return {
      item: '',
      id: this.$route.params.id,
      params: {
        name: '',
        descriptions: ''
      }
    }
  },
  methods: {
    ...mapActions('message', ['setMsg']),

    onSubmitForm: function() {
      // Prevent when form is blank
      if (!this.params.name || !this.params.descriptions) return

      let data = {
        id: this.id || null,
        params: {
          name: this.params.name,
          descriptions: this.params.descriptions,
          status: this.item.status || false
        }
      }

      // This is add form or edit form
      if (this.id >= 0) {
        axios.put(`/item/${data.id}`, data.params)
              .then(response => this.setMsg())
              .catch(err => { throw err })
      } else {
        axios.post('/item', data.params)
             .then(response => {
                this.setMsg()
                this.params.name = ''
                this.params.descriptions = ''
               })
             .catch(err => { throw err })
      }
    }
  },
  created() {
    if (this.id >= 0) {
      axios.get(`/item/${this.id}`)
          .then(response => {
            this.item = response.data

            Object.keys(this.params).forEach(key => {
              this.params[key] = this.item[key]
            })
          })
    }
  }
}
</script>

<style lang="css" scoped>
  .panel-block {
    display: block;
  }

  .control {
    text-align: center;
  }
</style>
