<template>
  <section class="search-form">
    <section class="search-wrapper">
      <!-- @TODO - add loading feedback -->
      <vue-autosuggest
          type="search"
          id="search"
          component-attr-class-autosuggest-results="suggestions"
          v-model="searchQuery"
          :suggestions="suggestionList"
          :input-props="{
            id:'autosuggest__input',
            placeholder:'What are you looking for?'
          }"
          @input="getSuggestions"
          @selected="doSearch"
          v-on:keyup.enter="doSearch"
      >  
        <template slot-scope="{suggestion}">
            <span class="suggestion my-suggestion-item">{{suggestion.item}}</span>
        </template>
      </vue-autosuggest>      
      <b-button class="btn search" @click="doSearch" variant="success">Search</b-button>
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
import { SEARCH_RESULTS, AUTOSUGGEST } from "../queries.js";
import PropertyList from "./PropertyList";
import UserList from "./UserList";
import { VueAutosuggest } from 'vue-autosuggest';
export default {
  components: {
    PropertyList,
    UserList,
    VueAutosuggest
  },
  data () {
    return {
      searchQuery: '',
      suggestionList: [],
      timeout: null,
    }
  },
  apollo: {
    search: {
      query: SEARCH_RESULTS,
      variables () {
        return {
          input: ''
        }
      }
    },
    autosuggest: {
      query: AUTOSUGGEST,
      variables () {
        return {
          input: ''
        }
      },
    }    
  },
  methods: {
     async doSearch() {
      return await this.$apollo.queries.search.refetch({
        input: this.searchQuery
      });
     },
     async getSuggestions() {
      await new Promise(resolve => setTimeout(resolve, 300));
      let suggestions = [];
      this.suggestionList = [];
      if (this.searchQuery) {
        
        // @TODO - include property suggestions
        let result = await this.$apollo.queries.autosuggest.refetch({
          input: this.searchQuery
        });
        suggestions = result.data.autosuggest.users;
      }
      this.suggestionList = [{
        data: suggestions
      }];
     }  
  },

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
    margin-top: 30px;
  }
  .search-wrapper {
    width: 800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-auto-rows: 66px;
    grid-gap: 20px;
  }
  #search {
    width: 100%;
    height: 60px;
    font-size: 40px;
  }
  .btn.search {
    display: inline-block;
  }
</style>

<style>
  .autosuggest__results-container,
  .suggestions {
    position: relative;
    z-index: 10;
    background: #fff;
    text-align: left;
  }
  .suggestions ul {
    list-style-type: none; 
    padding: 0;
  }
  .suggestions > ul {
    border: 1px solid gray;
  }
  .suggestions > ul li {
    padding-left: 10px;    
  }
  .suggestions > ul li:hover,
  .suggestions > ul li:focus {
    background: #218838;
    color: #fff;
    cursor: pointer;
  }
  #search input[type="text"] {
    display: block;
    width: 100%;
  }
</style>