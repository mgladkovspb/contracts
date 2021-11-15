import ApiService from "@/services/api.service";

export const LOAD_CONTRACTS = "loadContracts"
export const UPDATE_CONTRACTS = "updateContracts"

const state = {
    list: []
}
const getters = {}

const actions = {
    [LOAD_CONTRACTS](context, params) {
        return new Promise((resolve) => {
        ApiService.setHeader()
        ApiService.get('api/contracts', params)
            .then(({ data }) => {
                context.commit(UPDATE_CONTRACTS, data)
                resolve(data.length)
            })
            .catch((error) => {
                console.log(error)
            })
        })
    },
}
const mutations = {
    [UPDATE_CONTRACTS](state, contracts) {
        contracts.forEach(element => {
            let index = state.list.findIndex(item => item === element)
            if(index == -1) {
                state.list.push(element)
            } else {
                state.list[index] = element
            }
        })
        //state.list.push(...contracts)
    },
}

export default {
    state,
    actions,
    mutations,
    getters,
}