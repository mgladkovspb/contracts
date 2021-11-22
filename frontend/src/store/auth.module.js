import ApiService from '@/services/api.service'
import JwtService from '@/services/jwt.service'

export const AUTH_SIGNIN = "authSignin"
export const AUTH_SIGNOUT = "authSignout"

export const UPDATE_STATE = "updateState"

const state = {
    user: null
}

const getters = {}

const actions = {
    [AUTH_SIGNIN](context, params) {
        return new Promise((resolve) => {
        ApiService.post('api/auth/signin', params)
            .then(({ data }) => {
                context.commit(UPDATE_STATE, data)
                resolve()
            })
            .catch((error) => {
                console.log(error)
            })
        })
    },
    [AUTH_SIGNOUT](context, params) {
        context.commit(UPDATE_STATE, null)
    }
}

const mutations = {
    [UPDATE_STATE](state, user) {
        state.user = user
        if(user) {
            JwtService.saveToken(state.user.token)
        } else {
            JwtService.destroyToken()
        }
    },
}

export default {
    state,
    actions,
    mutations,
    getters,
}