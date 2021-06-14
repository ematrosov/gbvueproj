
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        paymentsList: [],
        paymentsOnPage: [],
        paymentsPerPage: 5,
        pagesCount: 0,
        currentPageNumber: 1,
        paymentTypes: [
            { name: 'food' },
            { name: 'housing' },
            { name: 'transport' }
        ]
    },
    mutations: {
        setPaymentsList(state, payload) {
            state.paymentsList = payload
        },
        setCurrentPageNumber(state, payload) {
            state.currentPageNumber = payload
        },
        setNewPayment(state, payload) {
            state.paymentsList.push(payload)
        },
        setNewPaymentTypes(state, payload) {
            state.paymentTypes.push(payload)
        }
    },
    getters: {
        getAllPayments: state => state.paymentsList,
        getPaymentsOnPage: state => {
            return state.paymentsList.slice((state.currentPageNumber - 1) * state.paymentsPerPage, (state.currentPageNumber - 1) * state.paymentsPerPage + state.paymentsPerPage)
        },
        getPagesCount: state => {
            return Math.ceil(state.paymentsList.length / state.paymentsPerPage)
        },
        getCurrentPageNumber: state => {
            return state.currentPageNumber
        },
        getPaymentTypes: state => {
            return state.paymentTypes
        },
        getPaymentsPerPage: state => {
            return state.paymentsPerPage
        }
    },
    actions: {
        fetchData({ commit }) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([
                        { date: '2021-05-07', category: 'food', value: 99 },
                        { date: '2021-05-07', category: 'finance', value: 99 },
                        { date: '2021-05-07', category: 'food', value: 999 },
                        { date: '2021-05-07', category: 'others', value: 99 },
                        { date: '2021-05-07', category: 'food', value: 999 },
                        { date: '2022-05-07', category: 'food', value: 99 },
                        { date: '2022-05-07', category: 'finance', value: 99 },
                        { date: '2022-05-07', category: 'food', value: 999 },
                        { date: '2022-05-07', category: 'others', value: 99 },
                        { date: '2022-05-07', category: 'food', value: 999 },
                        { date: '2023-05-07', category: 'food', value: 99 },
                        { date: '2023-05-07', category: 'finance', value: 99 },
                        { date: '2023-05-07', category: 'food', value: 999 },
                        { date: '2023-05-07', category: 'others', value: 99 },
                        { date: '2022-05-07', category: 'food', value: 999 },
                        { date: '2023-05-07', category: 'food', value: 99 },
                        { date: '2023-05-07', category: 'finance', value: 99 },
                        { date: '2023-05-07', category: 'food', value: 999 },
                        { date: '2023-05-07', category: 'others', value: 99 }
                    ])
                }, 1000)
            })
                .then(res => {
                    commit('setPaymentsList', res)
                })
        }
    }
})