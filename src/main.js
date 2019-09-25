import Vue from 'vue'
import App from './App.vue'
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const apolloProvider = new VueApollo({
  defaultClient: client
});

Vue.use(VueApollo);
Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
  apolloProvider
}).$mount('#app')