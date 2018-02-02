import Vue from 'vue'
import RepositoriesList from '../../src/components/RepositoriesList.vue'

describe('RepositoriesList', () => {
    // Inspect the raw component options
    it('has a created hook', () => {
        expect(typeof RepositoriesList.created).toBe('function')
    })
    //
    // // Evaluate the results of functions in
    // // the raw component options
    it('sets the correct default data', () => {
        expect(typeof RepositoriesList.data).toBe('function');
        const defaultData = RepositoriesList.data();
        expect(defaultData.rawRepositories).toBe([])
    })

    // Inspect the component instance on mount
    // it('correctly sets the message when created', () => {
    //     const vm = new Vue(RepositoriesList).$mount();
    //     expect(vm.message).toBe('bye!')
    // })
    //
    // Mount an instance and inspect the render output
    it('renders the correct message', () => {
        const Constructor = Vue.extend(RepositoriesList);
        const vm = new Constructor().$mount();
        expect(vm.$el.textContent).toBe('Repositories')
    })
});
