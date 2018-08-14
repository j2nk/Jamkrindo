import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import {ActivityService} from "../services/activity-service";
import {TripService} from "../services/trip-service";
import {WeatherProvider} from "../services/weather";

import {MyApp} from "./app.component";

import {SettingsPage} from "../pages/settings/settings";
import {CheckoutTripPage} from "../pages/checkout-trip/checkout-trip";
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import {KlaimPage} from "../pages/klaim/klaim";
import {PenjaminPage} from "../pages/penjamin/penjamin";
import {TerjaminPage} from "../pages/terjamin/terjamin";
import {TerjaminDetailPage} from "../pages/terjamindetail/terjamindetail";
import {MitraPage} from "../pages/mitra/mitra";

import { ChartsModule } from 'ng2-charts';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    RegisterPage,
    ProgressBarComponent,
    KlaimPage,
    PenjaminPage,
    TerjaminPage,
    TerjaminDetailPage,
    MitraPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxDatatableModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: 'jamkrindo',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    RegisterPage,
    KlaimPage,
    PenjaminPage,
    TerjaminPage,
    TerjaminDetailPage,
    MitraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    ActivityService,
    TripService,
    WeatherProvider
  ]
})

export class AppModule {
}
