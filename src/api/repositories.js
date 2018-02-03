'use strict';

import Vue from 'vue';
import VueResource from 'vue-resource';
import store from '../store/';
import {sprintf} from 'sprintf-js';

Vue.use(VueResource);

let api = new Vue({
    store,
    created: function() {
        let self = this;
        Vue.http.interceptors.push(function(request, next) {
            self.$store.dispatch('startAjax');
            next(function() {
                self.$store.dispatch('finishAjax');
            });
        });
    },
    methods: {
        getRepositories: function () {
            return this.$http.get('https://api.github.com/users/heremaps/repos');
        },
        getLanguages: function (name) {
            let endpoint = sprintf('https://api.github.com/repos/heremaps/%s/languages', name);

            return this.$http.get(endpoint);
        },
    }
});

export default api;
