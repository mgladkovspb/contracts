import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import fileDownload from 'js-file-download'
import JwtService from "@/services/jwt.service"

function successResponseHandler(response) {
    return response
}

function errorResponseHandler(error) {
    const hasGlobalHandlerProperty = Object.prototype.hasOwnProperty.call(error.config, 'globalHandler')
    if(hasGlobalHandlerProperty && error.config.globalHandler === false ) {
        return Promise.reject(error)
    }

    if (error.response) {
        return Promise.reject({
            status: error.response.status,
            username: Boolean(error.response.data.username),
            password: Boolean(error.response.data.password),
            message: error.response.data.message
        })
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
        ] = `Token ${JwtService.getToken()}`
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

    upload(resource, params, globalHandler = true) {
        return Vue.axios.post(`${resource}`, params, { globalHandler })
    },

    download(resorce, filename) {
        return Vue.axios.get(resorce, { responseType: 'blob', }).then(res => {
            fileDownload(res.data, filename)
        })
    }
}

export default ApiService