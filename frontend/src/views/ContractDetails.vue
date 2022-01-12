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
                                                        <input type="text" class="form-control" v-model="contract.number" >
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
                                                    <editable-select v-model="contract.customer" :options="customers"></editable-select>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="form-group">
                                                    <label class="form-label" for="phone-no-1">Объект</label>
                                                    <editable-select v-model="contract.object" :options="objects"></editable-select>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="form-group">
                                                    <label class="form-label">Город</label>
                                                    <editable-select v-model="contract.city" :options="cities"></editable-select>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="form-group">
                                                    <label class="form-label">Вид работ</label>
                                                    <div class="form-control-wrap">
                                                        <input type="text" class="form-control" v-model="contract.typeOfWork" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="form-group">
                                                    <label class="form-label">Сметный расчет №</label>
                                                    <div class="form-control-wrap">
                                                        <input type="text" class="form-control" v-model="contract.estimateAccount" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-4"></div>

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
                                                    <label class="form-label">Такелажные работы</label>
                                                    <div class="form-control-wrap">
                                                        <money-input v-model="contract.rigging"></money-input>
                                                    </div>
                                                </div>
                                            </div>
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
                                                    <label class="form-label">Материалы</label>
                                                    <div class="form-control-wrap">
                                                        <money-input v-model="contract.materials"></money-input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="form-group">
                                                    <label class="form-label">Накладные</label>
                                                    <div class="form-control-wrap">
                                                        <money-input v-model="contract.overheads"></money-input>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-4"></div>

                                            <div class="col-lg-4">
                                                <div class="form-group">
                                                    <label class="form-label">Рентабнльность</label>
                                                    <div class="form-control-wrap">
                                                        <money-input :value="contract.profit = contract.sum - contract.costPrice" disabled></money-input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="form-group">
                                                    <label class="form-label">Себестоимость</label>
                                                    <div class="form-control-wrap">
                                                        <money-input :value="contract.costPrice = contract.wage + contract.rigging + contract.materials + contract.overheads" disabled></money-input>
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
                                            <div class="col-sm-12">
                                                <div class="form-group">
                                                    <label class="form-label" for="default-textarea">Комментарий</label>
                                                    <div class="form-control-wrap">
                                                        <textarea class="form-control no-resize" v-model="contract.comment"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div class="nk-block-head">
                                <div class="nk-block-head-content">
                                    <h4 class="title nk-block-title">Дополнительно</h4>
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
                                                    <div class="col-lg-6">
                                                        <div class="form-group">
                                                            <label class="form-label">Аванс</label>
                                                            <div class="form-control-wrap">
                                                                <money-input v-model="contract.prepayment"></money-input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-lg-6">
                                                        <div class="form-group">
                                                            <label class="form-label">ФОТ аванс</label>
                                                            <div class="form-control-wrap">
                                                                <money-input v-model="contract.wagePrepayment"></money-input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="row gy-4 align-center">
                                                    <div class="col-lg-6">
                                                        <div class="form-group">
                                                            <label class="form-label">Остаток</label>
                                                            <div class="form-control-wrap">
                                                                <money-input :value="contract.sum - contract.prepayment" disabled></money-input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="form-group">
                                                            <label class="form-label">ФОТ остаток</label>
                                                            <div class="form-control-wrap">
                                                                <money-input :value="contract.wage - contract.wagePrepayment" disabled></money-input>
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
                                    <h4 class="title nk-block-title">Файлы</h4>
                                    <div class="nk-block-des">
                                        <!-- <p>You can alow display form in column as example below.</p> -->
                                    </div>
                                </div>
                            </div>
                            <div class="card card-bordered">
                                <div class="card-inner">
                                    <div class="preview-blok">
                                        <dropzone></dropzone>
                                    </div>
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
    LOAD_CUSTOMERS,
    LOAD_OBJECTS,
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
import EditableSelect from '@/widgets/EditableSelect'
import Dropzone from '@/components/Dropzone'

export default {
    name: 'ContractDetails',
    components: {
        MoneyInput,
        ScrollTop,
        EditableSelect,
        Dropzone
    },
    data() {
        return {
            contract: new Contract(),
            cities: [],
            customers: [],
            objects: []
        }
    },
    methods: {
        ...mapActions([
            LOAD_CITIES,
            LOAD_CUSTOMERS,
            LOAD_OBJECTS,
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
            result.object = this.contract.object
            result.city = this.contract.city
            result.sum = this.contract.sum
            result.prepayment = this.contract.prepayment
            result.profit = this.contract.profit
            result.wage = this.contract.wage
            result.wagePrepayment = this.contract.wagePrepayment
            result.rigging = this.contract.rigging
            result.state = this.contract.state
            result.comment = this.contract.comment
            result.typeOfWork = this.contract.typeOfWork
            result.estimateAccount = this.contract.estimateAccount
            result.overheads = this.contract.overheads
            result.materials = this.contract.materials
            return result
        },
        sendData() {
            const data = this.prepareDataToSending()

            let action = data._id === '' ? INSERT_ONE_CONTRACT : UPDATE_ONE_CONTRACT
            this[action](data).then(message => this.$router.push({ name: 'Dashboard' }))
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
                    this.contract.number = data.number
                    this.contract.contractDate = moment(data.contractDate).format('DD.MM.YYYY')
                    this.contract.plannedDate = moment(data.plannedDate).format('DD.MM.YYYY')
                    this.contract.actualDate = moment(data.actualDate).format('DD.MM.YYYY')
                    this.contract.customer = data.customer
                    this.contract.object = data.object
                    this.contract.city = data.city
                    this.contract.sum = data.sum
                    this.contract.prepayment = data.prepayment
                    this.contract.profit = data.profit
                    this.contract.wage = data.wage
                    this.contract.wagePrepayment = data.wagePrepayment
                    this.contract.rigging = data.rigging
                    this.contract.state = data.state
                    this.contract.comment = data.comment
                    this.contract.typeOfWork = data.typeOfWork
                    this.contract.estimateAccount = data.estimateAccount
                    this.contract.overheads = data.overheads
                    this.contract.materials = data.materials
                }).catch(message => console.log(message))
            }

            this[LOAD_CITIES]().then((data) => {
                this.cities = data
            }).catch(message => console.log(message))

            this[LOAD_CUSTOMERS]().then((data) => {
                this.customers = data
            }).catch(message => console.log(message))

            this[LOAD_OBJECTS]().then((data) => {
                this.objects = data
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
                    .then(message => this.$router.push({ name: 'Dashboard' }))
                    .catch(message => console.log(message))
            } else {
                console.log('Нечего удалять')
                this.$router.push({ name: 'Dashboard' })
            }
        },
    },
    mounted() {
        this.loadData()
    }
}
</script>

<style scoped>
.my-select .vs__dropdown-toggle {
    display: block;
    width: 100%;
    height: calc(2.125rem + 2px);
    padding: 0.4375rem 1rem;
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.25rem;
    color: #3c4d62;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #dbdfea;
    border-radius: 4px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
