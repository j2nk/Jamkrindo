import {Component, Input} from "@angular/core";
import {NavController, PopoverController, NavParams} from "ionic-angular";
// import {Storage} from '@ionic/storage';
// import { HttpClient } from '@angular/common/http';
// import {NotificationsPage} from "../notifications/notifications";
// import {SettingsPage} from "../settings/settings";
// import {TripsPage} from "../trips/trips";
// import {SearchLocationPage} from "../search-location/search-location";

import { ChartsModule } from 'ng2-charts';
import 'chart.js';

export interface Config {
  penjamin: string;
  technologies: string;
  data: string;
}

@Component({
  selector: 'page-terjamindetail',
  templateUrl: 'terjamindetail.html'
})

export class TerjaminDetailPage {
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
  public params: any = [];
  public shownGroup6: any = null;
  public mitra = "";
  public date = Date.now();
  
  constructor(
    // private storage: Storage, 
    public nav: NavController, 
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    public chart: ChartsModule,
    // private HTTP: HttpClient
  ) {

    this.params = this.navParams.get('0');
    this.header =  this.params.nama_terjamin;
    this.mitra =  this.params.mitra;
    console.log(this.header);
  }

  ionViewWillEnter() {
    
  }

  ionViewDidLoad() : void
  {

  }

  toggleList6() {
    if(this.isGroupShown6()) {
      this.shownGroup6 = null;
    } else {
      this.shownGroup6 = 1;
    }
  }

  isGroupShown6 () {
      return this.shownGroup6 === 1;
  };

}

//
