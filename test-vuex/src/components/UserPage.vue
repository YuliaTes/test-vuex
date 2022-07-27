<template>
  <div class="user-page">
    <section class="vuex">
      <h2>Vuex</h2>
      <div class="buttons">
        <button class="btn" @click=" refreshPage ">Refresh page</button>
        <button class="btn" @click=" updateComponent ">Update component</button>
        <button class="btn" @click=" addUser ">Add user</button>
      </div>
      <div class="content">
        <article class="user-item" v-for="user in users" :key="user">
          <p>Name: {{user.firstName}}</p>
          <p>Genger: {{user.gender}}</p>
          <p>ID: {{user.id}}</p>
        </article>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'UserPage',
  data() {
    return {
      users: []
    }
  },
  methods: {
    refreshPage() {
      window.location.reload()
    },
    updateComponent() {
      this.$forceUpdate()
    },
    addUser() {
      this.$store.dispatch("addUser")
    },
    getUsers() {
      this.$store.dispatch("setUsers").then(response => {
        this.users = response
      }, error => {
        console.error(error)
      } )
    }
  },
  mounted() {
    this.getUsers()
  }
}
</script>

<style lang="scss">
.user-page {
  width: 100%;
  height: 100%;
  margin: 0 auto;

  .content {
    max-width: 80%;
    margin: 0 auto 30px;
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
    .user-item {
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 10px;
    }
  }

  .buttons {
    margin: 0 auto 30px;

    .btn {
      margin: 0 10px 0 0;
      padding: 6px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      background-color: #eee;
      transition: 0.2s all linear;

      &:hover {
        background-color: #DEDEDE;
      }

      &:active {
        background-color: #ccc;
      }

      &:last-child {
        margin: 0;
      }
    }
  }
}
</style>