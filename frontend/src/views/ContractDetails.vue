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
                                        <!-- <p>You can alow display form in column as example below.</p> -->
                                    </div>
                                </div>
                                <div class="nk-block-head-content">
                                    <ul class="nk-ibx-head-tools g-1">
                                        <li>
                                            <button class="btn btn-icon nk-ibx-hide btn-success" @click="acceptedHandler"><em class="icon ni ni-check"></em></button>
                                        </li>
                                        <li>
                                            <button class="btn btn-icon nk-ibx-hide btn-primary" @click="draftHandler"><em class="icon ni ni-save"></em></button>
                                        </li>
                                        <li>
                                            <button class="btn btn-icon nk-ibx-hide btn-danger" @click="deletedHandler"><em class="icon ni ni-cross-circle"></em></button>
                                        </li>
                                        <li>
                                            <router-link title="Назад" :to="{ name: 'Dashboard' }" class="btn btn-icon nk-ibx-hide btn-warning"><em class="icon ni ni-arrow-left-circle"></em></router-link>
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
                                                    <label class="form-label">Номер договора</label>
                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <div class="input-group-text">
                                                                <span class="text">ДС&nbsp;&nbsp;</span>
                                                                <input type="checkbox" v-model="contract.ds">
                                                            </div>
                                                        </div>
                                                        <input type="text" class="form-control" v-model="contract.number" :disabled="!contract.ds">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-group">
                                                    <label class="form-label">Дата договора</label>
                                                    <div class="form-control-wrap">
                                                        <div class="form-icon form-icon-right">
                                                            <em class="icon ni ni-calendar-alt"></em>
                                                        </div>
                                                        <the-mask v-model="contract.contractDate" masked :mask="'##.##.####'" class="form-control date-picker" placeholder="ДД.ММ.ГГГГ"></the-mask>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-group">
                                                    <label class="form-label">Плановая дата завершения</label>
                                                    <div class="form-control-wrap">
                                                        <div class="form-icon form-icon-right">
                                                            <em class="icon ni ni-calendar-alt"></em>
                                                        </div>
                                                        <the-mask v-model="contract.plannedDate" masked :mask="'##.##.####'" class="form-control date-picker" placeholder="ДД.ММ.ГГГГ"></the-mask>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-group">
                                                    <label class="form-label">Фактическая дата завершения</label>
                                                    <div class="form-control-wrap">
                                                        <div class="form-icon form-icon-right">
                                                            <em class="icon ni ni-calendar-alt"></em>
                                                        </div>
                                                        <the-mask v-model="contract.actualDate" masked :mask="'##.##.####'" class="form-control date-picker" placeholder="ДД.ММ.ГГГГ"></the-mask>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="form-group">
                                                    <label class="form-label" for="phone-no-1">Организация</label>
                                                    <div class="form-control-wrap">
                                                        <input type="text" class="form-control" v-model="contract.customer">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="form-group">
                                                    <label class="form-label" for="phone-no-1">Объект</label>
                                                    <div class="form-control-wrap">
                                                        <input type="text" class="form-control" v-model="contract.objecct">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="form-group">
                                                    <label class="form-label">Город</label>
                                                    <div class="form-control-wrap">
                                                        <div class="form-control-select">
                                                            <select v-model="contract.city" class="form-control">
                                                                <option disabled value="">Выберите один из вариантов</option>
                                                                <option v-for="city in cities" :key="city">{{ city }}</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="row gy-4 align-center">
                                                    <div class="col-lg-4">
                                                        <div class="form-group">
                                                            <label class="form-label">Сумма</label>
                                                            <div class="form-control-wrap">
                                                                <money-input v-model="contract.sum"></money-input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="form-group">
                                                            <label class="form-label">Аванс</label>
                                                            <div class="form-control-wrap">
                                                                <money-input v-model="contract.prepayment"></money-input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="form-group">
                                                            <label class="form-label">Остаток</label>
                                                            <div class="form-control-wrap">
                                                                <money-input :value="contract.sum - contract.prepayment" disabled></money-input>
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
                                                                <money-input v-model="contract.profit"></money-input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="form-group">
                                                            <label class="form-label">Себестоимость</label>
                                                            <div class="form-control-wrap">
                                                                <money-input :value="contract.sum - contract.profit" disabled></money-input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="form-group">
                                                            <label class="form-label">% Р.Д.</label>
                                                            <div class="form-control-wrap">
                                                                <money-input :value="(contract.sum > 0 ? contract.profit / contract.sum : 0).toFixed(2)" disabled></money-input>
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
                                                            <label class="form-label">ФОТ</label>
                                                            <div class="form-control-wrap">
                                                                <money-input v-model="contract.wage"></money-input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="form-group">
                                                            <label class="form-label">ФОТ аванс</label>
                                                            <div class="form-control-wrap">
                                                                <money-input v-model="contract.wagePrepayment"></money-input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="form-group">
                                                            <label class="form-label">ФОТ остаток</label>
                                                            <div class="form-control-wrap">
                                                                <money-input :value="contract.wage - contract.wagePrepayment" disabled></money-input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="row gy-4 align-center">
                                                    <div class="col-lg-4">
                                                        <div class="form-group">
                                                            <label class="form-label">Такелажные работы</label>
                                                            <div class="form-control-wrap">
                                                                <money-input v-model="contract.rigging"></money-input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        
                                                    </div>
                                                    <div class="col-lg-4">
                                                        
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

        <scroll-top></scroll-top>
    </div>
</template>

<script>
import { 
    LOAD_CITIES,
    GET_NEW_NUMBER,
    GET_ONE_CONTRACT, 
    INSERT_ONE_CONTRACT, 
    UPDATE_ONE_CONTRACT, 
    DELETE_ONE_CONTRACT 
} from '@/store/contract.module'

import { mapActions } from 'vuex'
import moment from 'moment'
import Contract from '@/models/contract'
import MoneyInput from '@/widgets/MoneyInput.vue'
import ScrollTop from '@/widgets/ScrollTop.vue'

export default {
    name: 'ContractDetails',
    components: {
        MoneyInput,
        ScrollTop
    },
    data() {
        return {
            contract: new Contract(),
            cities: []
        }
    },
    methods: {
        ...mapActions([
            LOAD_CITIES,
            GET_NEW_NUMBER,
            GET_ONE_CONTRACT, 
            INSERT_ONE_CONTRACT, 
            UPDATE_ONE_CONTRACT, 
            DELETE_ONE_CONTRACT
        ]),
        prepareDataToSending() {
            const result = new Contract()
            result._id = this.contract._id
            result.ds = this.contract.ds
            result.number = this.contract.number
            result.contractDate = moment(this.contract.contractDate, 'DD.MM.YYYY').toDate()
            result.plannedDate = moment(this.contract.plannedDate, 'DD.MM.YYYY').toDate()
            result.actualDate = moment(this.contract.actualDate, 'DD.MM.YYYY').toDate()
            result.customer = this.contract.customer
            result.city = this.contract.city
            result.prepayment = this.contract.prepayment
            result.profit = this.contract.profit
            result.wage = this.contract.wage
            result.wagePrepayment = this.contract.wagePrepayment
            result.rigging = this.contract.rigging
            result.state = this.contract.state
            return result
        },
        sendData() {
            const data = this.prepareDataToSending()

            let action = data._id === '' ? INSERT_ONE_CONTRACT : UPDATE_ONE_CONTRACT
            this[action](data).then(message => this.$router.push({ path: 'Dashboard' }))
                .catch(message => console.log(message))
        },
        loadData() {
            if(this.$route.params.id == undefined) {
                this[GET_NEW_NUMBER]().then((number) => {
                    this.contract.number = number
                    this.contract.contractDate = moment().format('DD.MM.YYYY')
                }).catch(message => console.log(message))
            } else {
                this[GET_ONE_CONTRACT](this.$route.params.id).then((data) => {
                    this.contract._id = data._id
                    this.contract.ds = data.ds
                    this.contract.number = data.number = 
                    this.contract.contractDate = moment(data.contractDate).format('DD.MM.YYYY')
                    this.contract.plannedDate = moment(data.plannedDate).format('DD.MM.YYYY')
                    this.contract.actualDate = moment(data.actualDate).format('DD.MM.YYYY')
                    this.contract.customer = data.customer
                    this.contract.city = data.city
                    this.contract.prepayment = data.prepayment
                    this.contract.profit = data.profit
                    this.contract.wage = data.wage
                    this.contract.wagePrepayment = data.wagePrepayment
                    this.contract.rigging = data.rigging
                    this.contract.state = data.state
                }).catch(message => console.log(message))
            }

            this[LOAD_CITIES]().then((data) => {
                this.cities = data
            }).catch(message => console.log(message))
        },
        acceptedHandler() {
            this.contract.state = 'accepted'
            this.sendData()
        },
        draftHandler() {
            this.contract.state = 'draft'
            this.sendData()
        },
        deletedHandler() {
            if(this.contract._id !== '') {
                this[DELETE_ONE_CONTRACT](this.contract._id)
                    .then(message => this.$router.push({ path: 'Dashboard' }))
                    .catch(message => console.log(message))
            } else {
                console.log('Нечего удалять')
                this.$router.push({ path: 'Dashboard' })
            }
        },
    },
    mounted() {
        this.loadData()
    }
}
</script>