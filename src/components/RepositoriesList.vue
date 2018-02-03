<template>
    <div>
        <page-header>Repositories</page-header>
        <loader>
            <h2>List</h2>
            <div class="repos-list">
                <repository-entry
                    v-for="repository in repositories"
                    :repository="repository"
                    :key="repository.id"
                > </repository-entry>
            </div>
        </loader>
    </div>
</template>

<script>
    import RepositoryEntry from './RepositoriesList/RepositoryEntry.vue';
    import PageHeader from "./common/PageHeader.vue";
    import Loader from "./common/Loader.vue";

    import api from '../api/repositories';

    export default {
        components: {
            'loader': Loader,
            'page-header': PageHeader,
            'repository-entry': RepositoryEntry,
        },
        data() {
            return {
                rawRepositories: []
            };
        },
        computed: {
            repositories: function () {
                return this.$store.state.repositories.map(function (repository) {
                    return {
                        name: repository.name,
                        id: repository.id,
                    };
                });
            }
        },
        mounted () {
            api.getRepositories().then((response) => {
                this.$store.dispatch('setRepositories', response.body);
            })
        }
    };
</script>
