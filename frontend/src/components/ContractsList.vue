<template>
    <div class="card card-bordered card-full">
        <div class="card-inner">
            <div class="card-title-group">
                <div class="card-title">
                    <h6 class="title"><span class="mr-2">Журнал договоров</span> </h6>
                </div>
                <div class="card-tools">
                    <router-link :to="{ name: 'ContractDetails' }" class="btn btn-dim btn-icon nk-ibx-hide btn-primary"><em class="icon ni ni-plus-sm"></em></router-link>
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
                <div class="nk-tb-item" v-for="contract in contracts" :key="contract._id">
                    <div class="nk-tb-col">
                        <span class="tb-lead"><a href="#">#{{ contract.number }}</a></span>
                    </div>
                    <div class="nk-tb-col tb-col-sm">
                        <div class="user-card">
                            <div class="user-name">
                                <span class="tb-lead">{{ contract.customer }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="nk-tb-col">
                        <span class="tb-sub">{{ contract.contractDate | moment('DD.MM.YYYY') }}</span>
                    </div>
                    <div class="nk-tb-col tb-col-lg">
                        <span class="tb-sub text-primary">{{ contract.city }}</span>
                    </div>
                    <div class="nk-tb-col tb-col-lg">
                        <span class="tb-sub">{{ contract.object }}</span>
                    </div>
                    <div class="nk-tb-col">
                        <span class="tb-sub tb-amount">{{ currency(contract.sum) }}</span>
                    </div>
                    <div class="nk-tb-col nk-tb-col-action">
                        <div class="dropdown">
                            <!-- <b-button variant="link" class="text-soft dropdown-toggle btn btn-icon btn-trigger no-decoration"><em class="icon ni ni-edit"></em></b-button> -->
                            <router-link :to="{ name: 'ContractDetails', params: { id: contract._id }}" class="text-soft dropdown-toggle btn btn-icon btn-trigger no-decoration"><em class="icon ni ni-edit"></em></router-link>
                        </div>
                    </div>
                </div>
            </div>
            <infinite-loading @infinite="loadNextPage">
                <div class="infinite-message-slot" slot="no-more">Все договора загружены</div>
                <div class="infinite-message-slot" slot="no-results">Список договоров пуст</div>
            </infinite-loading>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { LOAD_CONTRACTS } from '@/store/contract.module'

import InfiniteLoading from 'vue-infinite-loading'

import format from '@/mixins/format'

export default {
    name: 'ContractsList',
    mixins: [format],
    components: {
        InfiniteLoading
    },
    data() {
        return {
            page: 0,
            contracts: [],
        }
    },
    methods: {
        ...mapActions([LOAD_CONTRACTS]),
        loadNextPage($state) {
            this.loading = true
            this[LOAD_CONTRACTS]({ page: this.page }).then(({ data }) => {
                if(data.length) {
                    this.contracts.push(...data)
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
.infinite-message-slot {
    margin: 15px;
}
</style>