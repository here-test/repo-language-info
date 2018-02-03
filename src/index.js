import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import routes from './routes';
import store from './store/';

Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(VueRouter);

new Vue({
    el: '#app',
    router: new VueRouter({routes: routes}),
    store,
});
