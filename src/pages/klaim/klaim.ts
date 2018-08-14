import {Component, Input} from "@angular/core";
import {NavController, PopoverController, NavParams} from "ionic-angular";
// import {Storage} from '@ionic/storage';
// import { HttpClient } from '@angular/common/http';
import {MitraPage} from "../mitra/mitra";

import { ChartsModule } from 'ng2-charts';
import 'chart.js';

export interface Config {
  penjamin: string;
  technologies: string;
  data: string;
}

@Component({
  selector: 'page-klaim',
  templateUrl: 'klaim.html'
})

export class KlaimPage {
  // search condition
  public search = {
    name: "",
    date: new Date().toISOString()
  }

  @Input('progress') progress;

  public config : Config;
  public columns : any;
  public rows : any;
  public temp: any = [];
  public header: any = "";
  public selected = [];

  // Doughnut
  public doughnutChartLabels:string[] = ['Klaim Dalam Prosess', 'Keseluruhan Klaim'];
  public doughnutChartData:number[] = [350, 450];
  public doughnutChartType:string = 'doughnut';
  public colors: any[] = [{ backgroundColor: ["#3698DB","#B0DCF6"] }];
  constructor(
    // private storage: Storage, 
    public nav: NavController, 
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    public chart: ChartsModule,
    // private HTTP: HttpClient
  ) {

    this.header = this.navParams.get('header');
    // console.log(this.header);
  }

  ionViewWillEnter() {
    
  }

  ionViewDidLoad() : void
  {
    // this.HTTP
    // .get<Config>('../../assets/data/product.json')
    // .subscribe((data) =>
    // { 
    //   this.temp = data.data;
    //   this.rows = data.data;
    // });
    this.rows = [
         {
          "product" : "Product 1",
          "mitra" : "BRI",
          "terjamin" : "30",
          "total" : "3000000000",
          "pokok" : "120993810",
          "klaim" : "102318028"
         },
         {
          "product" : "Product 1",
            "mitra" : "Mandiri",
            "terjamin" : "29",
            "total" : "2561528769",
            "pokok" : "120394701",
            "klaim" : "100182738"
         },
         {
          "product" : "Product 1",
            "mitra" : "BNI",
            "terjamin" : "28",
            "total" : "2358378208",
            "pokok" : "180192730",
            "klaim" : "171092101"
         },
         {
          "product" : "Product 1",
            "mitra" : "BII Maybank",
            "terjamin" : "27",
            "total" : "2032649732",
            "pokok" : "171027107",
            "klaim" : "128739812"
         },
         {
          "product" : "Product 1",
            "mitra" : "Bank Jatim",
            "terjamin" : "26",
            "total" : "1923084239",
            "pokok" : "102937012",
            "klaim" : "91207310"
         },
         {
          "product" : "Product 1",
            "mitra" : "BPD NTB",
            "terjamin" : "25",
            "total" : "1803297386",
            "pokok" : "129380127",
            "klaim" : "91283071"
         },
         {
          "product" : "Product 1",
            "mitra" : "Bank Sinarmas",
            "terjamin" : "20",
            "total" : "1528637290",
            "pokok" : "189263912",
            "klaim" : "123701827"
         },
         {
          "product" : "Product 1",
            "mitra" : "Bank Jabar",
            "terjamin" : "19",
            "total" : "1476883292",
            "pokok" : "129712083",
            "klaim" : "91273871"
         },
         {
          "product" : "Product 1",
            "mitra" : "Bukopin",
            "terjamin" : "18",
            "total" : "1387129917",
            "pokok" : "108273101",
            "klaim" : "71029109"
         },
         {
          "product" : "Product 1",
            "mitra" : "Mandiri Syariah",
            "terjamin" : "15",
            "total" : "927839263",
            "pokok" : "19238019",
            "klaim" : "18207310"
         },
         {
          "product" : "Product 1",
            "mitra" : "BTPN",
            "terjamin" : "14",
            "total" : "827853285",
            "pokok" : "12710293",
            "klaim" : "7102980"
         },
         {
          "product" : "Product 1",
            "mitra" : "BCA",
            "terjamin" : "10",
            "total" : "712879233",
            "pokok" : "19208301",
            "klaim" : "12098208"
         }
      ];

   this.temp = this.rows;
  }

  goToMitra(event){
    console.log(event);
    this.nav.push(MitraPage, event);
  }

  // events
  chartClicked(e:any):void {
    console.log(e);
  }

  chartHovered(e:any):void {
    console.log(e);
  }
}

//
