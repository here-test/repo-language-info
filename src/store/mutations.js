import * as types from './mutation-types';

export default {
    [types.FINISH_AJAX] (state) {
        state.ajaxInProgress = false;
    },
    [types.START_AJAX] (state) {
        state.ajaxInProgress = true;
    },
    [types.CHOOSE_REPOSITORIES] (state, payload) {
        state.chosenRepository = payload;
    },
    [types.SET_REPOSITORIES] (state, payload) {
        state.repositories = payload;
    },
};
