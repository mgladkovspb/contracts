<template>
    <div class="card card-bordered">
        <div class="card-inner">
            <div class="card-title-group align-start mb-2">
                <div class="card-title">
                    <h6 class="title">Avg Subscriptions</h6>
                </div>
                <div class="card-tools">
                    <em class="card-hint icon ni ni-help-fill" data-toggle="tooltip" data-placement="left" title="Daily Avg. subscription"></em>
                </div>
            </div>
            <div class="align-end flex-sm-wrap g-4 flex-md-nowrap">
                <div class="nk-sale-data">
                    <span class="amount">346.2</span>
                    <span class="sub-title"><span class="change up text-success"><em class="icon ni ni-arrow-long-up"></em>2.45%</span>since last week</span>
                </div>
                <bar-chart :chart-data="wage" :options="options" :class="'nk-sales-ck'"></bar-chart>
            </div>
        </div>
    </div>
</template>

<script>
import BarChart from '@/widgets/BarChart.vue'

export default {
    name: 'AmountOfContracts',
    components: {
      BarChart
    },
    data() {
        return {
            wage: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
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
                    color: ['rgba(101,118,255,0.2)', '#6576ff'],
                    data: [8200, 7800, 9500, 5500, 9200, 9690]
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
    }
}

</script>