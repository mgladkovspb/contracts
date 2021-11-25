<template>
    <div class="nk-wrap">
        <div class="nk-content nk-content-fluid">
            <div class="container-xl wide-xl">
                <div class="nk-content-inner">
                    <div class="nk-content-body">
                        <div class="nk-block">
                            <div class="row g-gs">
                                <div class="col-xxl-6">
                                    <div class="row g-gs">
                                        <div class="col-lg-6 col-xxl-12">
                                            <amount-of-contracts></amount-of-contracts>
                                        </div>
                                        <div class="col-lg-6 col-xxl-12">
                                            <div class="row g-gs">
                                                <div class="col-sm-6 col-lg-12 col-xxl-6">
                                                    <rigging></rigging>
                                                </div>
                                                <div class="col-sm-6 col-lg-12 col-xxl-6">
                                                    <wage></wage>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><!-- .col -->
                                <div class="col-xxl-6">
                                    <profit></profit>
                                </div><!-- .col -->
                                <div class="col-xxl-12">
                                    <contracts-list></contracts-list>
                                </div>

                                <scroll-top></scroll-top>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import ContractsList from '@/components/ContractsList.vue'
import AmountOfContracts from '@/components/AmountOfContracts.vue'
import Rigging from '@/components/Rigging.vue'
import Wage from '@/components/Wage.vue'
import Profit from '@/components/Profit.vue'
import ScrollTop from '@/widgets/ScrollTop.vue'

export default {
    name: 'Dashboard',
    components: {
        ContractsList,
        AmountOfContracts,
        Rigging,
        Wage,
        Profit,
        ScrollTop
    }
}
</script>
