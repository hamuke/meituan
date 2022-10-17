import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        position: {},
        userName: '',
    },
    mutations: {
        setPosition(state, value) {
            state.position = value;
        },
        setUserName(state, value) {
            state.userName = value;
        }
    },
    actions: {
        setPosition({
            commit
        }, value) {
            commit('setPosition', value);
        }
    }
})

export default store;