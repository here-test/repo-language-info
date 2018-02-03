import * as types from './mutation-types';

export const finishAjax = ({ commit }) => {
    commit(types.FINISH_AJAX);
};

export const startAjax = ({ commit }) => {
    commit(types.START_AJAX);
};

export const setRepositories = ({ commit }, repositories) => {
    commit(types.SET_REPOSITORIES, repositories);
};


