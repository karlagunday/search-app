<template>
  <section class="search-form">
    <input v-model="searchInput" placeholder="Search.." type="search" />
    <article v-if="search" class="results">
      <article class="result user">
        <h2>Users</h2>
        <UserList :users="search.users"/>
      </article>
      <article class="result user">
        <h2>Properties</h2>
        <PropertyList :properties="search.properties"/>
      </article>    
    </article>
  </section>
</template>

<script>
import { SEARCH_RESULTS } from "../queries.js";
import PropertyList from "./PropertyList";
import UserList from "./UserList";
export default {
  components: {
    PropertyList,
    UserList
  },
  data () {
    return {
      searchInput: ''
    }
  },
  apollo: {
    search: {
      query: SEARCH_RESULTS,
      variables () {
        return {
          input: this.searchInput
        }
      }
    }
  }
};
</script>

<style scoped>
</style>