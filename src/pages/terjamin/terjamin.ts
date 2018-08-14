import {Component, Input} from "@angular/core";
import {NavController, PopoverController, NavParams} from "ionic-angular";
// import {Storage} from '@ionic/storage';
// import { HttpClient } from '@angular/common/http';
// import {NotificationsPage} from "../notifications/notifications";
// import {SettingsPage} from "../settings/settings";
// import {TripsPage} from "../trips/trips";
// import {SearchLocationPage} from "../search-location/search-location";
import {TerjaminDetailPage} from "../terjamindetail/terjamindetail";

import { ChartsModule } from 'ng2-charts';
import 'chart.js';

export interface Config {
  penjamin: string;
  technologies: string;
  data: string;
}

@Component({
  selector: 'page-terjamin',
  templateUrl: 'terjamin.html'
})

export class TerjaminPage {
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
    // this.columns = [
    //   { prop: 'mitra' },
    //   { name: 'Terjamin' },
    //   { name: 'Total' }
    // ];

    this.header = this.navParams.get('header');
    // console.log(this.header);
  }

  ionViewWillEnter() {
    
  }

  ionViewDidLoad() : void
  {

    // this.HTTP
    // .get<Config>('../../assets/data/terjamin.json')
    // .subscribe((data) =>
    // { 
    //   this.temp = data.data;
    //   this.rows = data.data;
    // });
    this.rows = [
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
      this.goDetailTerjamin(this.selected);
    }
  }

  onActivate(event) {
    // console.log('Activate Event', event);
  }

  checkSelectable(event) {
    // console.log('Checking if selectable', event);
    return event.name !== 'Ethel Price';
  }

  goDetailTerjamin(event){
    console.log(event);
    this.nav.push(TerjaminDetailPage, event);
  }

}

//
