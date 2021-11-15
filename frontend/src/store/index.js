import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth.module'
import contract from './contract.module'
import statistics from './statistics.module'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        contract,
        statistics,
    },
})
