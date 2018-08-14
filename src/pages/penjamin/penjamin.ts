import {Component, Input} from "@angular/core";
import {NavController, PopoverController, NavParams} from "ionic-angular";
// import {Storage} from '@ionic/storage';
// import { HttpClient } from '@angular/common/http';
// import {NotificationsPage} from "../notifications/notifications";
// import {SettingsPage} from "../settings/settings";
// import {TripsPage} from "../trips/trips";
// import {SearchLocationPage} from "../search-location/search-location";
import {MitraPage} from "../mitra/mitra";

import { ChartsModule } from 'ng2-charts';
import 'chart.js';

export interface Config {
  penjamin: string;
  technologies: string;
  data: string;
}

@Component({
  selector: 'page-penjamin',
  templateUrl: 'penjamin.html'
})

export class PenjaminPage {
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

  constructor(
    // private storage: Storage, 
    public nav: NavController, 
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    public chart: ChartsModule,
    // private HTTP: HttpClient
  ) {
    this.columns = [
      { prop: 'mitra' },
      { name: 'Terjamin' },
      { name: 'Total' }
    ];

    this.header = this.navParams.get('header');
    console.log(this.header);
  }

  ionViewWillEnter() {
    
  }

  ionViewDidLoad() : void
  {

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

  onSelect({ selected }) {
    // console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);

    if(this.selected){
      this.goToMitra(this.selected);
    }
  }

  onActivate(event) {
    // console.log('Activate Event', event);
  }

  checkSelectable(event) {
    // console.log('Checking if selectable', event);
    return event.name !== 'Ethel Price';
  }

  goToMitra(event){
    console.log(event);
    this.nav.push(MitraPage, event);
  }

}

//
