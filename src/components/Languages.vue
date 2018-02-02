<template>
    <div>
        <page-header>Languages used in </page-header>
        <div>
            <router-link :to="{name: 'repositories-list'}">Back</router-link>
        </div>

        <div class="list">
            <language-entry
                v-for="(lines, name) in languages"
                :language="getLanguageObject(name, lines)"
                :key="name"
            > </language-entry>
        </div>
    </div>
</template>

<script>
    import { sprintf } from 'sprintf-js';
    import LanguageEntry from './Languages/LanguageEntry.vue';
    import PageHeader from "./common/PageHeader.vue";

    export default {
        components: {
            'page-header': PageHeader,
            'language-entry': LanguageEntry
        },
        data() {
            return {
                languages: {}
            };
        },
        methods: {
            getLanguageObject(name, lines) {
                return {name, lines};
            }
        },
        mounted() {
            let endpoint = sprintf('https://api.github.com/repos/heremaps/%s/languages', this.$route.params.repository);

            this.$http.get(endpoint).then(response => {
                this.languages = response.body;
            }, response => {
                console.log('Repositories languages loading error');
            });
        }
    };
</script>
