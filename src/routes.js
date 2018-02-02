import RepositoriesList from './components/RepositoriesList.vue';
import Languages from './components/Languages.vue';

export default [
    {path: '/', component: RepositoriesList, name: 'repositories-list'},
    {path: '/repository/:repository/languages', component: Languages, name: 'repository-languages',},
];
