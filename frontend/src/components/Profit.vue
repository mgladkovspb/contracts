<template>
    <div class="card card-bordered h-100">
        <div class="card-inner">
            <div class="card-title-group align-start gx-3 mb-3">
                <div class="card-title">
                    <h6 class="title">Рентабельность</h6>
                    <p>Рентабельность по договорам за последний год. </p>
                </div>
                <div class="card-tools">
                    
                </div>
            </div>
            <div class="nk-sale-data-group align-center justify-between gy-3 gx-5">
                <div class="nk-sale-data">
                    <span class="amount">82,944.60&#8381;</span>
                </div>
                <div class="nk-sale-data">
                    <span class="amount sm">1,937 <small>договоров</small></span>
                </div>
            </div>
            <line-chart :chart-data="profit" :options="options" :class="'nk-sales-ck large pt-4'"></line-chart>
        </div>
    </div>
</template>

<script>
import { LOAD_PROFIT } from '@/store/statistics.module'
import { mapActions } from 'vuex'

import LineChart from '@/widgets/LineChart.vue'

export default {
    name: 'Profit',
    components: {
      LineChart
    },
    data() {
        return {
            profit: {
                labels: [],
                dataUnit: 'USD',
                lineTension: .3,
                datasets: [{
                    label: "Sales Overview",
                    color: "#798bff",
                    tension: 0.3,
                    backgroundColor: "rgba(121,139,255,0.35)",
                    borderWidth: 4,
                    borderColor: "#798bff",
                    pointBorderColor: "transparent",
                    pointBackgroundColor: "transparent",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "#798bff",
                    pointBorderWidth: 2,
                    pointHoverRadius: 3,
                    pointHoverBorderWidth: 2,
                    pointRadius: 3,
                    pointHitRadius: 3,
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
                            return data['labels'][tooltipItem[0]['index']];
                        },
                        label: function label(tooltipItem, data) {
                            return data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem['index']] + ' ' + '_get_data.dataUnit';
                        }
                    },
                    backgroundColor: '#eff6ff',
                    titleFontSize: 13,
                    titleFontColor: '#6783b8',
                    titleMarginBottom: 6,
                    bodyFontColor: '#9eaecf',
                    bodyFontSize: 12,
                    bodySpacing: 4,
                    yPadding: 10,
                    xPadding: 10,
                    footerMarginTop: 0,
                    displayColors: false
                },
                scales: {
                    yAxes: [{
                        display: true,
                        stacked: false,
                        position: 'left',
                        ticks: {
                            beginAtZero: true,
                            fontSize: 11,
                            fontColor: '#9eaecf',
                            padding: 10,
                            callback: function callback(value, index, values) {
                                return '$ ' + value;
                            },
                            min: 100,
                            stepSize: 3000
                        },
                        gridLines: {
                            color: 'rgba(82,100,132,.2)',
                            tickMarkLength: 0,
                            zeroLineColor: 'rgba(82,100,132,.2)'
                        }
                    }],
                    xAxes: [{
                        display: true,
                        stacked: false,
                        ticks: {
                            fontSize: 9,
                            fontColor: '#9eaecf',
                            source: 'auto',
                            padding: 10,
                            reverse: false
                        },
                        gridLines: {
                            color: "transparent",
                            tickMarkLength: 0,
                            zeroLineColor: 'transparent'
                        }
                    }]
                }
            }
        }
    },
    methods: {
        ...mapActions([LOAD_PROFIT])
    },
    mounted() {
        this[LOAD_PROFIT]().then(stat => {
            this.profit.labels = stat.labels
            this.profit.datasets[0].data = stat.data
        }).catch(error => console.log(error))
    }
}
</script>