<template>
    <div class="card card-bordered h-100">
        <div class="card-inner">
            <div class="card-title-group align-start gx-3 mb-3">
                <div class="card-title">
                    <h6 class="title">Sales Overview</h6>
                    <p>In 30 days sales of product subscription. <a href="#">See Details</a></p>
                </div>
                <div class="card-tools">
                    
                </div>
            </div>
            <div class="nk-sale-data-group align-center justify-between gy-3 gx-5">
                <div class="nk-sale-data">
                    <span class="amount">$82,944.60</span>
                </div>
                <div class="nk-sale-data">
                    <span class="amount sm">1,937 <small>Subscribers</small></span>
                </div>
            </div>
            <line-chart :chart-data="profit" :options="options" :class="'nk-sales-ck large pt-4'"></line-chart>
        </div>
    </div>
</template>

<script>
import LineChart from '@/widgets/LineChart.vue'

export default {
    name: 'Profit',
    components: {
      LineChart
    },
    data() {
        return {
            profit: {
                labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
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
                    data: [6200, 7850, 8500, 6500, 5790, 9690, 8200, 6860, 9500, 8590, 8230, 8950, 8200, 7680, 8500, 5500, 9200, 9690, 8200, 7800, 9500, 7500, 9200, 9690, 8200, 7800, 8500, 9100, 9360, 9690]
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
    }
}
</script>