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
                    <span class="amount">9.69K</span>
                    <span class="sub-title"><span class="change down text-danger"><em class="icon ni ni-arrow-long-down"></em>1.93%</span>с пр. месяца&nbsp;&nbsp;</span>
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

export default {
    name: 'Rigging',
    components: {
      BarChart
    },
    data() {
        return {
            rigging: {
                labels: [],
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
        ...mapActions([LOAD_RIGGING])
    },
    mounted() {
        this[LOAD_RIGGING]().then(stat => {
            this.rigging.labels = stat.labels
            this.rigging.datasets[0].data = stat.data
        }).catch(error => console.log(error))
    }
}

</script>