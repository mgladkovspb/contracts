import ApiService from "@/services/api.service"

export const LOAD_CONTRACTS = "loadContracts"
export const LOAD_CITIES = "loadCities"
export const GET_NEW_NUMBER = "getNewNumber"
export const GET_ONE_CONTRACT = "getOneContract"
export const INSERT_ONE_CONTRACT = "insertOneContract"
export const UPDATE_ONE_CONTRACT = "updateOneContract"
export const DELETE_ONE_CONTRACT = "deleteOneContract"

const state = {}
const getters = {}

const actions = {
    [LOAD_CONTRACTS](context, params) {
        return new Promise((resolve, reject) => {
        ApiService.setHeader()
        ApiService.get('api/contracts', params)
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
    },
    [GET_ONE_CONTRACT](context, id) {
        return new Promise((resolve, reject) => {
            ApiService.setHeader()
            ApiService.get('api/contracts/' + id)
                .then(({ data }) => resolve(data))
                .catch(error => reject(error))
        })
    },
    [LOAD_CITIES](context) {
        return new Promise((resolve, reject) => {
            ApiService.setHeader()
            ApiService.get('api/contracts/fn/cities')
                .then(({ data }) => resolve(data))
                .catch(error => reject(error))
        })
    },
    [GET_NEW_NUMBER](context) {
        return new Promise((resolve, reject) => {
            ApiService.setHeader()
            ApiService.get('api/contracts/fn/number')
                .then(({ data }) => resolve(data))
                .catch(error => reject(error))
        })
    },
    [INSERT_ONE_CONTRACT](context, params) {
        return new Promise((resolve, reject) => {
            ApiService.setHeader()
            ApiService.post('api/contracts/', params)
                .then(({ data }) => resolve(data))
                .catch(error => reject(error))
        })
    },
    [UPDATE_ONE_CONTRACT](context, params) {
        return new Promise((resolve, reject) => {
            ApiService.setHeader()
            ApiService.put('api/contracts/', params)
                .then(({ data }) => resolve(data))
                .catch(error => reject(error))
        })
    },
    [DELETE_ONE_CONTRACT](context, id) {
        return new Promise((resolve, reject) => {
            ApiService.setHeader()
            ApiService.delete('api/contracts/' + id)
                .then(({ data }) => resolve(data))
                .catch(error => reject(error))
        })
    },
}
const mutations = {}

export default {
    state,
    actions,
    mutations,
    getters,
}