import Vue from 'vue';
import {Component} from 'vue-property-decorator';



import VueCharts from 'vue-chartjs'
//@ts-ignore
import Chart, { ChartData, ChartOptions } from "chart.js";


@Component
export default class ChooseElementComponent extends Vue {

    _chart: Chart | null = null;


    mounted(){
        this.renderChart([40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11], [])
    }

    renderChart(data: any, options: any) {
        let canvas: any = this.$refs.canvas;
        this._chart = new Chart(
            canvas.getContext("2d"), {
                type: 'Doughnut',
                data: data,
                options: options,
            }
        );
    }

}