import {Component, Input} from "@angular/core";
import {NavController, PopoverController} from "ionic-angular";
import {Storage} from '@ionic/storage';
// import { HttpClient } from '@angular/common/http';
import {SettingsPage} from "../settings/settings";
import {KlaimPage} from "../klaim/klaim";
import {PenjaminPage} from "../penjamin/penjamin";
import {TerjaminPage} from "../terjamin/terjamin";

import { ChartsModule } from 'ng2-charts';
import 'chart.js';

export interface Config {
  penjamin: string;
  technologies: string;
  data: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  // search condition
  public search = {
    name: "",
    date: new Date().toISOString()
  }

  public Segment = 'Progress';

  // chart
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Pengajuan'},
    {data: [28, 48, 40, 19, 40, 27, 30], label: 'Pengajuan Di Setujui'}
  ];

  public colors: any[] = [
                          { backgroundColor: ["#53C396", "#53C396", "#53C396","#53C396","#53C396","#53C396","#53C396"] },
                          { backgroundColor: ["#58A5E0", "#58A5E0", "#58A5E0","#58A5E0","#58A5E0","#58A5E0","#58A5E0"] }
                          ];

  public date = Date.now();
  @Input('progress') progress;

  public config : Config;
  public columns : any;
  public rows : any;
  public temp: any = [];

  public config2 : Config;
  public columns2 : any;
  public rows2 : any;
  public temp2: any = [];

  public params: any = [];

  constructor(
    private storage: Storage, 
    public nav: NavController, 
    public popoverCtrl: PopoverController,
    public chart: ChartsModule,
    // private HTTP: HttpClient
  ) {
    this.columns = [
      { prop: 'mitra' },
      { name: 'Terjamin' },
      { name: 'Total' }
    ];

    this.columns2 = [
      { prop: 'nama terjamin' },
      { name: 'Mitra' },
      { name: 'Total pengajuan' }
    ];
  }

  ionViewWillEnter() {
    // this.search.pickup = "Rio de Janeiro, Brazil";
    // this.search.dropOff = "Same as pickup";
    this.storage.get('pickup').then((val) => {
      if (val === null) {
        this.search.name = ""
      } else {
        this.search.name = val;
      }
    }).catch((err) => {
      console.log(err)
    });
  }

  ionViewDidLoad() : void
   {
      this.Segment = 'Progress';

      // this.HTTP
      // .get<Config>('../../assets/data/penjamin.json')
      // .subscribe((data) =>
      // { 
      //   this.temp = data.data;
      //   this.rows = data.data;
      // });

      this.rows = [
           {
             "no" : "1",
              "mitra" : "BRI",
              "terjamin" : "30",
              "total" : "3000000000"
           },
           {
            "no" : "2",
              "mitra" : "Mandiri",
              "terjamin" : "29",
              "total" : "2561528769"
           },
           {
            "no" : "3",
              "mitra" : "BNI",
              "terjamin" : "28",
              "total" : "2358378208"
           },
           {
            "no" : "4",
              "mitra" : "BII Maybank",
              "terjamin" : "27",
              "total" : "2032649732"
           },
           {
            "no" : "5",
              "mitra" : "Bank Jatim",
              "terjamin" : "26",
              "total" : "1923084239"
           },
           {
            "no" : "6",
              "mitra" : "BPD NTB",
              "terjamin" : "25",
              "total" : "1803297386"
           },
           {
            "no" : "7",
              "mitra" : "Bank Sinarmas",
              "terjamin" : "20",
              "total" : "1528637290"
           },
           {
            "no" : "8",
              "mitra" : "Bank Jabar",
              "terjamin" : "19",
              "total" : "1476883292"
           },
           {
            "no" : "9",
              "mitra" : "Bukopin",
              "terjamin" : "18",
              "total" : "1387129917"
           },
           {
            "no" : "10",
              "mitra" : "Mandiri Syariah",
              "terjamin" : "15",
              "total" : "927839263"
           },
           {
            "no" : "11",
              "mitra" : "BTPN",
              "terjamin" : "14",
              "total" : "827853285"
           },
           {
            "no" : "12",
              "mitra" : "BCA",
              "terjamin" : "10",
              "total" : "712879233"
           }
        ];

     this.temp = this.rows;

      // this.HTTP
      // .get<Config>('../../assets/data/terjamin.json')
      // .subscribe((data2) =>
      // { 
      //   this.temp2 = data2.data;
      //   this.rows2 = data2.data;
      // });

      this.rows2 = [
        {
          "no" : "1",
            "nama_terjamin" : "Panji Nurfirman",
            "mitra" : "BRI",
            "total_pengajuan" : "10082730"
         },
         {
          "no" : "2",
            "nama_terjamin" : "Fitri Fardia",
            "mitra" : "Mandiri",
            "total_pengajuan" : "9801298"
         },
         {
          "no" : "3",
            "nama_terjamin" : "Mario Stefano",
            "mitra" : "BNI",
            "total_pengajuan" : "9027308"
         },
         {
          "no" : "4",
            "nama_terjamin" : "Teopilus Sutjiana",
            "mitra" : "BII Maybank",
            "total_pengajuan" : "8781203"
         },
         {
          "no" : "5",
            "nama_terjamin" : "Bambang Karyadi",
            "mitra" : "Bank Jatim",
            "total_pengajuan" : "7182073"
         },
         {
          "no" : "6",
            "nama_terjamin" : "Sylvina Kwandou",
            "mitra" : "BPD NTB",
            "total_pengajuan" : "6782103"
         },
         {
          "no" : "7",
            "nama_terjamin" : "Rogers Hadikusuma",
            "mitra" : "Bank Sinarmas",
            "total_pengajuan" : "6219381"
         },
         {
          "no" : "8",
            "nama_terjamin" : "Daniel Yuwono",
            "mitra" : "Bank Jabar",
            "total_pengajuan" : "5871289"
         },
         {
          "no" : "9",
            "nama_terjamin" : "David Margahung",
            "mitra" : "Bukopin",
            "total_pengajuan" : "5619287"
         },
         {
          "no" : "10",
            "nama_terjamin" : "Kurniyati",
            "mitra" : "Mandiri Syariah",
            "total_pengajuan" : "5100921"
         },
         {
          "no" : "11",
            "nama_terjamin" : "Suwito Yaputera",
            "mitra" : "BTPN",
            "total_pengajuan" : "4102809"
         },
         {
          "no" : "12",
            "nama_terjamin" : "Herrik Sidarta",
            "mitra" : "BCA",
            "total_pengajuan" : "2093403"
         }
      ];

     this.temp2 = this.rows2;
   }

  // to go account page
  goToAccount() {
    this.nav.push(SettingsPage);
  }

  // events
  chartClicked(e:any):void {
    console.log(e);
  }
  
  chartHovered(e:any):void {
    console.log(e);
  }
  
  randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.mitra.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    // this.table.offset = 0;
  }

  updateFilter2(event) {
    const val2 = event.target.value.toLowerCase();

    // filter our data
    const temp2 = this.temp2.filter(function(d) {
      return d.nama_terjamin.toLowerCase().indexOf(val2) !== -1 || !val2;
    });

    // update the rows
    this.rows2 = temp2;
    // Whenever the filter changes, always go back to the first page
    // this.table.offset = 0;
  }

  Klaim(event){
    console.log("click");
    this.params.header = event;
    this.nav.push(KlaimPage, this.params);
  }

  penjamin(event){
    this.params.header = event;
    this.nav.push(PenjaminPage, this.params);
  }

  terjamin(event){
    this.params.header = event;
    this.nav.push(TerjaminPage, this.params);
  }
}

//
