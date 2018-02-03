<template>
    <div>
        <page-header>Languages used in </page-header>
        <div>
            <router-link :to="{name: 'repositories-list'}" :class="'button is-primary'">Back</router-link>
        </div>

        <loader>
            <div class="list">
                <language-entry
                    v-for="(lines, name) in languages"
                    :language="getLanguageObject(name, lines)"
                    :key="name"
                > </language-entry>
            </div>
        </loader>
    </div>
</template>

<script>
    import LanguageEntry from './Languages/LanguageEntry.vue';
    import PageHeader from "./common/PageHeader.vue";
    import Loader from "./common/Loader.vue";

    import api from '../api/repositories';

    export default {
        components: {
            'loader': Loader,
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
            api.getLanguages(this.$route.params.repository).then(response => {
                this.languages = response.body;
            });
        }
    };
</script>
