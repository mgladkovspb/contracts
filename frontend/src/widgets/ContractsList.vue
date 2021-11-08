<template>
    <div class="card table-card">
        <div class="card-header">
            <h5>Projects</h5>
            <div class="card-header-right">
                <div class="btn-group card-option">
                    <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="feather icon-more-horizontal"></i>
                    </button>
                    <ul class="list-unstyled card-option dropdown-menu dropdown-menu-right">
                        <li class="dropdown-item full-card"><a href="#!"><span><i class="feather icon-maximize"></i> maximize</span><span style="display:none"><i class="feather icon-minimize"></i> Restore</span></a></li>
                        <li class="dropdown-item minimize-card"><a href="#!"><span><i class="feather icon-minus"></i> collapse</span><span style="display:none"><i class="feather icon-plus"></i> expand</span></a></li>
                        <li class="dropdown-item reload-card"><a href="#!"><i class="feather icon-refresh-cw"></i> reload</a></li>
                        <li class="dropdown-item close-card"><a href="#!"><i class="feather icon-trash"></i> remove</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="card-body p-0">
            <div class="table-responsive">
                <table class="table table-hover mb-0 w-100" style="height: 400px;">
                    <thead>
                        <tr>
                            <th>
                                <div class="chk-option">
                                    <label class="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                        <input type="checkbox" class="custom-control-input">
                                        <span class="custom-control-label"></span>
                                    </label>
                                </div>
                                Assigned
                            </th>
                            <th>Name</th>
                            <th>Due Date</th>
                            <th class="text-right">Priority</th>
                        </tr>
                    </thead>
                    <transition name="fade">
                        <div class="loading" v-show="loading">
                            <span class="fa fa-spinner fa-spin"></span> Loading
                        </div>
                    </transition>
                    <perfect-scrollbar 
                        :tag="'tbody'"
                        @ps-y-reach-end="loadNextPage">
                        <tr v-for="contract in contracts" :key="contract">
                            <td>
                                <div class="chk-option">
                                    <label class="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                        <input type="checkbox" class="custom-control-input">
                                        <span class="custom-control-label"></span>
                                    </label>
                                </div>
                                <div class="d-inline-block align-middle">
                                    <img src="assets/images/user/avatar-4.jpg" alt="user image" class="img-radius wid-40 align-top m-r-15">
                                    <div class="d-inline-block">
                                        <h6>{{ contract }}</h6>
                                        <p class="text-muted m-b-0">Graphics Designer</p>
                                    </div>
                                </div>
                            </td>
                            <td>Able Pro</td>
                            <td>Jun, 26</td>
                            <td class="text-right"><label class="badge badge-light-danger">Low</label></td>
                        </tr>
                    </perfect-scrollbar>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { LOAD_CONTRACTS } from '@/store/contract.module'

import { PerfectScrollbar } from 'vue2-perfect-scrollbar'

export default {
    name: 'ContractsList',
    components: {
        PerfectScrollbar
    },
    data() {
        return {
            page: 0,
            loading: false,
        }
    },
    computed: {
        ...mapState({
            contracts: state => state.contract.list
        })
    },
    methods: {
        ...mapActions([LOAD_CONTRACTS]),
        loadNextPage() {
            this.loading = true
            this[LOAD_CONTRACTS]({ page: this.page })
                .then(() => this.loading = false)
            this.page++
        }
    },
    mounted() {
        this.loadNextPage()
    }
}
</script>

<style scoped>
.ps {
    height: 400px;
}

table {
    display: flex;
    flex-flow: column;
    width: 100%;
}

thead {
    flex: 0 0 auto;
}

tbody {
    flex: 1 1 auto;
    display: block;
    /* overflow-y: auto;
    overflow-x: hidden; */
}

tr {
    width: 100%;
    display: table;
    table-layout: fixed;
}

.loading {
    text-align: center;
    position: absolute;
    color: #fff;
    z-index: 9;
    background: #4680ff;
    padding: 8px 18px;
    border-radius: 5px;
    left: calc(50% - 45px);
    top: calc(50% - 18px);
}
</style>