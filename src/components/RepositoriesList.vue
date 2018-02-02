<template>
    <div>
        <page-header>Repositories</page-header>
        <div class="repos-list">
            <repository-entry
                v-for="repository in repositories"
                :repository="repository"
                :key="repository.id"
            > </repository-entry>
        </div>
    </div>
</template>

<script>
    import RepositoryEntry from './RepositoriesList/RepositoryEntry.vue';
    import PageHeader from "./common/PageHeader.vue";

    export default {
        components: {
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
                return this.rawRepositories.map(function (repository) {
                    return {
                        name: repository.name,
                        id: repository.id,
                        route: '/something',
                    };
                });
            }
        },
        mounted() {
            this.$http.get('https://api.github.com/users/heremaps/repos').then(response => {
                this.rawRepositories = response.body;
            }, response => {
                console.log('Repositories list loading error');
            });
        }
    };
</script>
