<template>
    <div class="card card-bordered">
        <div class="card-inner">
            <div class="card-title-group align-start mb-2">
                <div class="card-title">
                    <h6 class="title">Такелажные работы</h6>
                </div>
                <div class="card-tools">
                    <em class="card-hint icon ni ni-help-fill" data-toggle="tooltip" data-placement="left" title="Total active subscription"></em>
                </div>
            </div>
            <div class="align-end flex-sm-wrap g-4 flex-md-nowrap">
                <div class="nk-sale-data">
                    <span class="amount">{{ currency(riggingSummary.current) }}</span>
                    <span class="sub-title">текущий месяц</span>
                </div>
                <bar-chart :chart-data="rigging" :options="options" :class="'nk-sales-ck'"></bar-chart>
            </div>
        </div>
    </div>
</template>

<script>
import { LOAD_RIGGING } from '@/store/statistics.module'
import { mapActions } from 'vuex'

import BarChart from '@/widgets/BarChart.vue'

import format from '@/mixins/format'

export default {
    name: 'Rigging',
    mixins: [format],
    components: {
      BarChart
    },
    data() {
        return {
            rigging: null,
            dataset: [],
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
    computed: {
        riggingSummary() {
            let temp = [...this.dataset]
            return {
                current: temp.pop()
            }
        }
    },
    methods: {
        ...mapActions([LOAD_RIGGING]),
        updateChart() {
            this[LOAD_RIGGING]().then(stat => {
                this.dataset = stat.data
                this.rigging = {
                    labels: stat.labels,
                    dataUnit: 'USD',
                    stacked: true,
                    datasets: [{
                        label: "Active User",
                        backgroundColor: [
                            'rgba(101,118,255,0.2)',
                            'rgba(101,118,255,0.2)',
                            'rgba(101,118,255,0.2)',
                            'rgba(101,118,255,0.2)',
                            'rgba(101,118,255,0.2)',
                            '#6576ff'
                        ],
                        color: '#6576ff',
                        data: this.dataset
                    }] 
                }
            }).catch(error => console.log(error))
        }
    },
    mounted() {
        this.updateChart()
    }
}

</script>