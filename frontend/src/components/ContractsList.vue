<template>
    <div class="card card-bordered card-full">
        <div class="card-inner">
            <div class="card-title-group">
                <div class="card-title">
                    <h6 class="title"><span class="mr-2">Журнал договоров</span> </h6>
                </div>
                <div class="card-tools">
                    <!-- <ul class="card-tools-nav">
                        <li><a href="#"><span>Paid</span></a></li>
                        <li><a href="#"><span>Pending</span></a></li>
                        <li class="active"><a href="#"><span>All</span></a></li>
                    </ul> -->
                </div>
            </div>
        </div>
        <div class="card-inner p-0 border-top">
            <div class="nk-tb-list nk-tb-orders">
                <div class="nk-tb-item nk-tb-head">
                    <div class="nk-tb-col"><span>№</span></div>
                    <div class="nk-tb-col tb-col-sm"><span>Контрагент</span></div>
                    <div class="nk-tb-col"><span>Дата</span></div>
                    <div class="nk-tb-col tb-col-lg"><span>Город</span></div>
                    <div class="nk-tb-col tb-col-lg"><span>Объект</span></div>
                    <div class="nk-tb-col"><span>Сумма</span></div>
                    <div class="nk-tb-col"><span>&nbsp;</span></div>
                </div>
                <div class="nk-tb-item" v-for="contract in contracts" :key="contract">
                    <div class="nk-tb-col">
                        <span class="tb-lead"><a href="#">#{{ contract }}</a></span>
                    </div>
                    <div class="nk-tb-col tb-col-sm">
                        <div class="user-card">
                            <div class="user-avatar user-avatar-sm bg-purple">
                                <span>AB</span>
                            </div>
                            <div class="user-name">
                                <span class="tb-lead">Abu Bin Ishtiyak</span>
                            </div>
                        </div>
                    </div>
                    <div class="nk-tb-col">
                        <span class="tb-sub">02/11/2020</span>
                    </div>
                    <div class="nk-tb-col tb-col-lg">
                        <span class="tb-sub text-primary">SUB-2309232</span>
                    </div>
                    <div class="nk-tb-col tb-col-lg">
                        <span class="tb-sub">Paid</span>
                    </div>
                    <div class="nk-tb-col">
                        <span class="tb-sub tb-amount">4,596.75 <span>USD</span></span>
                    </div>
                    <div class="nk-tb-col nk-tb-col-action">
                        <div class="dropdown">
                            <!-- <b-button variant="link" class="text-soft dropdown-toggle btn btn-icon btn-trigger no-decoration"><em class="icon ni ni-edit"></em></b-button> -->
                            <router-link :to="{ name: 'ContractDetails', params: { id: contract }}" class="text-soft dropdown-toggle btn btn-icon btn-trigger no-decoration"><em class="icon ni ni-edit"></em></router-link>
                        </div>
                    </div>
                </div>
            </div>
            <infinite-loading @infinite="loadNextPage">
            </infinite-loading>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { LOAD_CONTRACTS } from '@/store/contract.module'

import InfiniteLoading from 'vue-infinite-loading'

export default {
    name: 'ContractsList',
    components: {
        InfiniteLoading
    },
    data() {
        return {
            page: 0,
        }
    },
    computed: {
        ...mapState({
            contracts: state => state.contract.list
        })
    },
    methods: {
        ...mapActions([LOAD_CONTRACTS]),
        loadNextPage($state) {
            this.loading = true
            this[LOAD_CONTRACTS]({ page: this.page }).then((length) => {
                if(length) {
                    this.page++
                    $state.loaded()
                } else {
                    $state.complete()
                }
            })
        }
    }
}
</script>

<style scoped>
.no-decoration {
    text-decoration: none !important;
}
</style>