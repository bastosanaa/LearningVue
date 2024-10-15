<template>
  <div id="app">
    <UserTable></UserTable>
    <UserDetails></UserDetails>
  </div>
</template>

<script>
import UserTable from '@/components/UserTable.vue';
import UserDetails from './components/UserDetails.vue';
export default {
  components: {
    UserTable,
    UserDetails
  }
}
</script>

<style>
  div {
    display: flex;
    padding: 1rem;
  }
</style>