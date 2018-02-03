import Vue from 'vue';
import RepositoriesList from '../../src/components/RepositoriesList.vue';

describe('RepositoriesList', () => {
    it('has a created hook', () => {
        expect(typeof RepositoriesList.created).toBe('function')
    });

    it('sets the correct default data', () => {
        expect(typeof RepositoriesList.data).toBe('function');
        const defaultData = RepositoriesList.data();
        expect(defaultData.rawRepositories).toBe([])
    });

    it('renders the correct message', () => {
        const Constructor = Vue.extend(RepositoriesList);
        const vm = new Constructor().$mount();
        expect(vm.$el.textContent).toBe('Repositories')
    });
});
