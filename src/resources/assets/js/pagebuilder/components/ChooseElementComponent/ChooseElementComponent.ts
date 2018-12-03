import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
//@ts-ignore
import Plus from '../../svgs/PlusIcon.vue'
//@ts-ignore
import Chart, {ChartData, ChartOptions} from "chart.js";


@Component
export default class ChooseElementComponent extends Vue {
    @Prop()
    elements: Array<any>;
    @Prop()
    id: string;

    chart: any = {};

    mounted() {
        let data: any = {
            datasets: [{
                data: [],
                labels: [],
                backgroundColor: [],
                backgroundImage: [],
                borderColor: '#f8f9fa',
                title: '',
                borderWidth: 4,
                elements: []
            }]
        };

        let labels: Array<string> = [];
        this.elements.forEach((e: any) => {
            data.datasets[0].data.push(1);
            data.datasets[0].backgroundColor.push('rgba(255, 65, 108, 0.8)');
            data.datasets[0].elements.push(e);
            data.datasets[0].elements.push(e);
            labels.push(e.name);
        });
            this.renderChart(data, labels);
    }

    renderChart(data: any, labels:Array<string>) {

        var ctx = document.getElementById(this.id);

        let chartOptions: object = {
            type: 'doughnut',
            labels: labels,
            data: data,
            options: {
            }
        };

        this.chart = new Chart(ctx, chartOptions);
    }

    selectElement(evt:any){
        let activePoints = this.chart.getElementsAtEvent(evt);
        if (activePoints[0]) {
            let chartData = activePoints[0]['_chart'].config.data;
            let index = activePoints[0]['_index'];

            let elementName = chartData.datasets[0].elements[index].name;

            alert(elementName)
        }
    }

}