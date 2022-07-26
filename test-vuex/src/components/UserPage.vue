<template>
  <div class="user-page">
    {{ getUsers }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'UserPage',
  computed: mapGetters( ['getUsers'] ),
  mounted () {
    this.$store.dispatch("setUsers").then(response => {
      console.log(response)
    }, error => {
      console.error(error)
    })
  }
}
</script>

<style lang="scss">
.user-page {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
</style>