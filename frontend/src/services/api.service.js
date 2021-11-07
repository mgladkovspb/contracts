import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

function successResponseHandler(response) {
    return response
}

function errorResponseHandler(error) {
    const hasGlobalHandlerProperty = Object.prototype.hasOwnProperty.call(error.config, 'globalHandler')
    if(hasGlobalHandlerProperty && error.config.globalHandler === false ) {
        return Promise.reject(error)
    }

    if (error.response) {
        console.log(error.response.data.message)
    }
}

const ApiService = {
    init() {
        Vue.use(VueAxios, axios)
        Vue.axios.defaults.baseURL = ''
        Vue.axios.interceptors.response.use(
            successResponseHandler, 
            errorResponseHandler
        )
    },

    get(resource, slug = "", globalHandler = true) {
        return Vue.axios.get(`${resource}/${slug}`, { globalHandler })
    },

    post(resource, params, globalHandler = true) {
        return Vue.axios.post(`${resource}`, params, { globalHandler })
    },

    update(resource, slug, params, globalHandler = true) {
        return Vue.axios.put(`${resource}/${slug}`, params, { globalHandler })
    },

    put(resource, params, globalHandler = true) {
        return Vue.axios.put(`${resource}`, params, { globalHandler })
    },

    delete(resource, globalHandler = true) {
        return Vue.axios.delete(resource, { globalHandler })
    },
}

export default ApiService