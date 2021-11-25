import ApiService from "@/services/api.service"

export const LOAD_AMOUNT = "loadAmount"
export const LOAD_WAGE = "loadWage"
export const LOAD_PROFIT = "loadProfit"
export const LOAD_RIGGING = "loadRigging"

const state = {}
const actions = {
    [LOAD_AMOUNT](context) {
        return new Promise((resolve, reject) => {
            ApiService.setHeader()
            ApiService.get('api/statistics/amount')
                .then(({ data }) => resolve(data))
                .catch(error => reject(error))
        })
    },
    [LOAD_WAGE](context) {
        return new Promise((resolve, reject) => {
            ApiService.setHeader()
            ApiService.get('api/statistics/wage')
                .then(({ data }) => resolve(data))
                .catch(error => reject(error))
        })
    },
    [LOAD_PROFIT](context) {
        return new Promise((resolve, reject) => {
            ApiService.setHeader()
            ApiService.get('api/statistics/profit')
                .then(({ data }) => resolve(data))
                .catch(error => reject(error))
        })
    },
    [LOAD_RIGGING](context) {
        return new Promise((resolve, reject) => {
            ApiService.setHeader()
            ApiService.get('api/statistics/rigging')
                .then(({ data }) => resolve(data))
                .catch(error => reject(error))
        })
    },
}
const mutations = {}
const getters = {}

export default {
    state,
    actions,
    mutations,
    getters,
}