import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import JwtService from "@/services/jwt.service";

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

    setHeader() {
        Vue.axios.defaults.headers.common[
        'Authorization'
        ] = `Token ${JwtService.getToken()}`;
    },

    get(resource, params, globalHandler = true) {
        return Vue.axios.get(`${resource}`, { params, globalHandler })
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