import Vue from 'vue'
import Vuex from 'vuex'

Vue.ude(Vuex)

export default new Vuex.Store({

    state: {
        paymentsList: []

    },
    mutations: {
        setPaymentsListDta(state, payload) {
            state.paymentsList = payload
        }
    },
    getters: {},
    actions: {}

})