import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import routes from './routes';


Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes,
});

new Vue({
    el: '#app',
    router
});
