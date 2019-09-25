<template>
  <section class="search-form">
    <section class="search-wrapper">
      <b-form-input type="search" id="search" v-model="searchInput" placeholder="Search.."></b-form-input>
    </section>
    <article class="results">
      <article class="result user">
        <h2>Users</h2>
        <UserList  v-if="search" :users="search.users"/>
      </article>
      <article class="result user">
        <h2>Properties</h2>
        <PropertyList  v-if="search" :properties="search.properties"/>
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
  .search-form {
    padding: 20px 60px;
  }
  .results {
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  .search-wrapper {
    margin: 40px 0;
  }
  #search {
    width: 600px;
    height: 60px;
    font-size: 40px;
    margin: 0 auto;
  }
</style>