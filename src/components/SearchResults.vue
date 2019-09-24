<template>
  <section class="search-form">
    <input v-model="searchInput" placeholder="Search.." type="search" />
    <article v-if="search" class="results">
      <article class="result user">
        <h2>Users</h2>
        <ul class="list">
          <li :key="user.id" v-for="user in search.users" >
            {{user.firstName}} {{user.lastName}}
            <h3>Properties</h3>
            <ul class="list">
              <li :key="property.id" v-for="property in user.properties" >
                {{property.street}} {{property.city}} {{property.state}} {{property.zip}} {{property.rent}}
              </li>
            </ul>
          </li>
        </ul>
      </article>
      <article class="result user">
        <h2>Properties</h2>
        <ul class="list">
          <li :key="property.id" v-for="property in search.properties" >
            {{property.street}} {{property.city}} {{property.state}} {{property.zip}} {{property.rent}}
          </li>
        </ul>
      </article>    
    </article>
  </section>
</template>

<script>
import { SEARCH_RESULTS, GET_USERS } from "../queries.js";
export default {
  data () {
    return {
      searchInput: '',
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