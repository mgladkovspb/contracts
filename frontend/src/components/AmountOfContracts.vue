<template>
    <div class="card card-bordered">
        <div class="card-inner">
            <div class="card-title-group align-start mb-2">
                <div class="card-title">
                    <h6 class="title">Сумма по договорам</h6>
                    <p>Сумма по договорам за последний год.</p>
                </div>
                <div class="card-tools">
                    <em class="card-hint icon ni ni-help-fill" data-toggle="tooltip" data-placement="left" title="Revenue from subscription"></em>
                </div>
            </div>
            <div class="align-end gy-3 gx-5 flex-wrap flex-md-nowrap flex-lg-wrap flex-xxl-nowrap">
                <div class="nk-sale-data-group flex-md-nowrap g-4">
                    <div class="nk-sale-data">
                        <span class="amount">14,299.59 <span class="change down text-danger"><em class="icon ni ni-arrow-long-down"></em>16.93%</span></span>
                        <span class="sub-title">Предыдущий месяц</span>
                    </div>
                    <div class="nk-sale-data">
                        <span class="amount">7,299.59 <span class="change up text-success"><em class="icon ni ni-arrow-long-up"></em>4.26%</span></span>
                        <span class="sub-title">Этот месяц</span>
                    </div>
                </div>
                <bar-chart :chart-data="amount" :options="options" :class="'nk-sales-ck sales-revenue'"></bar-chart>
            </div>
        </div>
    </div>
</template>

<script>
import { LOAD_AMOUNT } from '@/store/statistics.module'
import { mapActions } from 'vuex'

import BarChart from '@/widgets/BarChart.vue'

export default {
    name: 'AmountOfContracts',
    components: {
      BarChart
    },
    data() {
        return {
            amount: {
                labels: [],
                dataUnit: 'RUB',
                stacked: true,
                datasets: [{
                    label: "Сумма по договорам",
                    color: ['rgba(101,118,255,0.2)', '#6576ff'],
                    backgroundColor: [
                        'rgba(101,118,255,0.2)',
                        'rgba(101,118,255,0.2)',
                        'rgba(101,118,255,0.2)',
                        'rgba(101,118,255,0.2)',
                        'rgba(101,118,255,0.2)',
                        'rgba(101,118,255,0.2)',
                        'rgba(101,118,255,0.2)',
                        'rgba(101,118,255,0.2)',
                        'rgba(101,118,255,0.2)',
                        'rgba(101,118,255,0.2)',
                        'rgba(101,118,255,0.2)',
                        '#6576ff'
                    ],
                    data: []
                }]
            },
            options: {
                legend: {
                    display: false,
                    rtl: false,
                    labels: {
                        boxWidth: 30,
                        padding: 20,
                        fontColor: '#6783b8'
                    }
                },
                maintainAspectRatio: false,
                tooltips: {
                    enabled: true,
                    rtl: false,
                    callbacks: {
                        title: function title(tooltipItem, data) {
                            return false;
                        },
                        label: function label(tooltipItem, data) {
                            return data['labels'][tooltipItem['index']] + ' ' + data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem['index']];
                        }
                    },
                    backgroundColor: '#eff6ff',
                    titleFontSize: 11,
                    titleFontColor: '#6783b8',
                    titleMarginBottom: 4,
                    bodyFontColor: '#9eaecf',
                    bodyFontSize: 10,
                    bodySpacing: 3,
                    yPadding: 8,
                    xPadding: 8,
                    footerMarginTop: 0,
                    displayColors: false
                },
                scales: {
                    yAxes: [{
                        display: false,
                        stacked: false,
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        display: false,
                        stacked: false,
                        ticks: {
                            reverse: false
                        }
                    }]
                }
            }
        }
    },
    methods: {
        ...mapActions([LOAD_AMOUNT])
    },
    mounted() {
        this[LOAD_AMOUNT]().then(stat => {
            this.amount.labels = stat.labels
            this.amount.datasets[0].data = stat.data
        }).catch(error => console.log(error))
    }
}
</script>