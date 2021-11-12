<template>
    <div class="nk-wrap">
        <div class="nk-content nk-content-fluid">
            <div class="container-xl wide-xl">
                <div class="nk-content-inner">
                    <div class="nk-content-body">
                        <div class="nk-block nk-block-lg">
                            
                            <div class="nk-block-head nk-block-between">
                                <div class="nk-block-head-content">
                                    <h4 class="title nk-block-title">Договор</h4>
                                    <div class="nk-block-des">
                                        <p>You can alow display form in column as example below.</p>
                                    </div>
                                </div>
                                <div class="nk-block-head-content">
                                    <ul class="nk-ibx-head-tools g-1">
                                        <li>
                                            <router-link :to="{ name: 'Dashboard' }" class="btn btn-icon nk-ibx-hide btn-success"><em class="icon ni ni-check"></em></router-link>
                                        </li>
                                        <li>
                                            <router-link :to="{ name: 'Dashboard' }" class="btn btn-icon nk-ibx-hide btn-primary"><em class="icon ni ni-save"></em></router-link>
                                        </li>
                                        <li>
                                            <router-link :to="{ name: 'Dashboard' }" class="btn btn-icon nk-ibx-hide btn-danger"><em class="icon ni ni-cross-circle"></em></router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card card-bordered">
                                <div class="card-inner">
                                    <form action="#">
                                        <div class="row g-4">
                                            <div class="col-lg-6">
                                                <div class="form-control-wrap">
                                                    <label class="form-label" for="email-address-1">Номер договора</label>
                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <div class="input-group-text">
                                                                <span class="text">ДС&nbsp;&nbsp;</span>
                                                                <input type="checkbox" v-model="ds">
                                                            </div>
                                                        </div>
                                                        <input type="text" class="form-control" :disabled="!ds">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-group">
                                                    <label class="form-label" for="email-address-1">Дата договора</label>
                                                    <div class="form-control-wrap">
                                                        <div class="form-icon form-icon-right">
                                                            <em class="icon ni ni-calendar-alt"></em>
                                                        </div>
                                                        <the-mask :mask="'##.##.####'" class="form-control date-picker" placeholder="ДД.ММ.ГГГГ"></the-mask>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-group">
                                                    <label class="form-label" for="phone-no-1">Организация</label>
                                                    <div class="form-control-wrap">
                                                        <input type="text" class="form-control" v-model="customer">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-group">
                                                    <label class="form-label" for="pay-amount-1">Город</label>
                                                    <div class="form-control-wrap">
                                                        <input type="text" class="form-control" v-model="city">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="row gy-4 align-center">
                                                    <div class="col-lg-4">
                                                        <div class="form-group">
                                                            <label class="form-label">Сумма</label>
                                                            <div class="form-control-wrap">
                                                                <money-input v-model="sum"></money-input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="form-group">
                                                            <label class="form-label">Аванс</label>
                                                            <div class="form-control-wrap">
                                                                <money-input v-model="prepayment"></money-input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="form-group">
                                                            <label class="form-label">Остаток</label>
                                                            <div class="form-control-wrap">
                                                                <money-input :value="sum - prepayment" disabled></money-input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="row gy-4 align-center">
                                                    <div class="col-lg-4">
                                                        <div class="form-group">
                                                            <label class="form-label">Рентабнльность</label>
                                                            <div class="form-control-wrap">
                                                                <money-input v-model="profit"></money-input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="form-group">
                                                            <label class="form-label">Себестоимость</label>
                                                            <div class="form-control-wrap">
                                                                <money-input :value="sum - profit" disabled></money-input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="form-group">
                                                            <label class="form-label">% Р.Д.</label>
                                                            <div class="form-control-wrap">
                                                                <money-input :value="(sum > 0 ? profit / sum : 0).toFixed(2)" disabled></money-input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div class="nk-block-head">
                                <div class="nk-block-head-content">
                                    <h4 class="title nk-block-title">Расходная часть</h4>
                                    <div class="nk-block-des">
                                        <!-- <p>You can alow display form in column as example below.</p> -->
                                    </div>
                                </div>
                            </div>
                            <div class="card card-bordered">
                                <div class="card-inner">
                                    <!-- <div class="card-head">
                                        <h5 class="card-title">Customer Info S2</h5>
                                    </div> -->
                                    <form action="#">
                                        <div class="row g-4">
                                            <div class="col-12">
                                                <div class="row gy-4 align-center">
                                                    <div class="col-lg-4">
                                                        <div class="form-group">
                                                            <label class="form-label">Сумма</label>
                                                            <div class="form-control-wrap">
                                                                <money-input v-model="sum"></money-input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="form-group">
                                                            <label class="form-label">Аванс</label>
                                                            <div class="form-control-wrap">
                                                                <money-input v-model="prepayment"></money-input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="form-group">
                                                            <label class="form-label">Остаток</label>
                                                            <div class="form-control-wrap">
                                                                <money-input :value="sum - prepayment" disabled></money-input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="row gy-4 align-center">
                                                    <div class="col-lg-4">
                                                        <div class="form-group">
                                                            <label class="form-label">Рентабнльность</label>
                                                            <div class="form-control-wrap">
                                                                <money-input v-model="profit"></money-input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="form-group">
                                                            <label class="form-label">Себестоимость</label>
                                                            <div class="form-control-wrap">
                                                                <money-input :value="sum - profit" disabled></money-input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="form-group">
                                                            <label class="form-label">% Р.Д.</label>
                                                            <div class="form-control-wrap">
                                                                <money-input :value="(sum > 0 ? profit / sum : 0).toFixed(2)" disabled></money-input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MoneyInput from '@/widgets/MoneyInput.vue'

export default {
    name: 'ContractDetails',
    components: {
        MoneyInput
    },
    data() {
        return {
            ds: false,
            contractDate: new Date(),
            customer: '',
            city: '',
            sum: 0,
            prepayment: 0,
            profit: 0,
        }
    },
    computed: {
        
    }
}
</script>