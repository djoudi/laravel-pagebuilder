import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
//@ts-ignore
const Raphael = require('raphael/raphael');
//@ts-ignore
window.Raphael = Raphael;

//@ts-ignore
require('../../plugins/wheelnav.min.js');
declare var wheelnav: any;

@Component
export default class ChooseElementComponent extends Vue {
    @Prop()
    elements: Array<any>;
    @Prop()
    id: string;


    mounted(){
        //@ts-ignore
        let wheel = new wheelnav("divWheel");
    }

    blub(){
        console.log('hiho')
    }

}