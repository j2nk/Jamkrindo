webpackJsonp([0],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlaimPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mitra_mitra__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {Storage} from '@ionic/storage';
// import { HttpClient } from '@angular/common/http';



var KlaimPage = /** @class */ (function () {
    function KlaimPage(
    // private storage: Storage, 
    nav, navParams, popoverCtrl, chart) {
        this.nav = nav;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.chart = chart;
        // search condition
        this.search = {
            name: "",
            date: new Date().toISOString()
        };
        this.temp = [];
        this.header = "";
        this.selected = [];
        // Doughnut
        this.doughnutChartLabels = ['Klaim Dalam Prosess', 'Keseluruhan Klaim'];
        this.doughnutChartData = [350, 450];
        this.doughnutChartType = 'doughnut';
        this.colors = [{ backgroundColor: ["#3698DB", "#B0DCF6"] }];
        this.header = this.navParams.get('header');
        // console.log(this.header);
    }
    KlaimPage.prototype.ionViewWillEnter = function () {
    };
    KlaimPage.prototype.ionViewDidLoad = function () {
        // this.HTTP
        // .get<Config>('../../assets/data/product.json')
        // .subscribe((data) =>
        // { 
        //   this.temp = data.data;
        //   this.rows = data.data;
        // });
        this.rows = [
            {
                "product": "Product 1",
                "mitra": "BRI",
                "terjamin": "30",
                "total": "3000000000",
                "pokok": "120993810",
                "klaim": "102318028"
            },
            {
                "product": "Product 1",
                "mitra": "Mandiri",
                "terjamin": "29",
                "total": "2561528769",
                "pokok": "120394701",
                "klaim": "100182738"
            },
            {
                "product": "Product 1",
                "mitra": "BNI",
                "terjamin": "28",
                "total": "2358378208",
                "pokok": "180192730",
                "klaim": "171092101"
            },
            {
                "product": "Product 1",
                "mitra": "BII Maybank",
                "terjamin": "27",
                "total": "2032649732",
                "pokok": "171027107",
                "klaim": "128739812"
            },
            {
                "product": "Product 1",
                "mitra": "Bank Jatim",
                "terjamin": "26",
                "total": "1923084239",
                "pokok": "102937012",
                "klaim": "91207310"
            },
            {
                "product": "Product 1",
                "mitra": "BPD NTB",
                "terjamin": "25",
                "total": "1803297386",
                "pokok": "129380127",
                "klaim": "91283071"
            },
            {
                "product": "Product 1",
                "mitra": "Bank Sinarmas",
                "terjamin": "20",
                "total": "1528637290",
                "pokok": "189263912",
                "klaim": "123701827"
            },
            {
                "product": "Product 1",
                "mitra": "Bank Jabar",
                "terjamin": "19",
                "total": "1476883292",
                "pokok": "129712083",
                "klaim": "91273871"
            },
            {
                "product": "Product 1",
                "mitra": "Bukopin",
                "terjamin": "18",
                "total": "1387129917",
                "pokok": "108273101",
                "klaim": "71029109"
            },
            {
                "product": "Product 1",
                "mitra": "Mandiri Syariah",
                "terjamin": "15",
                "total": "927839263",
                "pokok": "19238019",
                "klaim": "18207310"
            },
            {
                "product": "Product 1",
                "mitra": "BTPN",
                "terjamin": "14",
                "total": "827853285",
                "pokok": "12710293",
                "klaim": "7102980"
            },
            {
                "product": "Product 1",
                "mitra": "BCA",
                "terjamin": "10",
                "total": "712879233",
                "pokok": "19208301",
                "klaim": "12098208"
            }
        ];
        this.temp = this.rows;
    };
    KlaimPage.prototype.goToMitra = function (event) {
        console.log(event);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__mitra_mitra__["a" /* MitraPage */], event);
    };
    // events
    KlaimPage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    KlaimPage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('progress'),
        __metadata("design:type", Object)
    ], KlaimPage.prototype, "progress", void 0);
    KlaimPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-klaim',template:/*ion-inline-start:"D:\source\jamkrindo\src\pages\klaim\klaim.html"*/'<!-- -->\n<ion-header>\n  <ion-navbar color="primary" style="color: white">\n    <!-- <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button> -->\n    <!-- <ion-title> -->\n      {{header}}\n    <!-- </ion-title> -->\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="animated fadeIn common-bg">\n  <ion-row style="background-color: white">\n    <ion-col col-6>\n    <div style="display: block;width: 200px;">\n      <canvas baseChart\n              [data]="doughnutChartData"\n              [chartType]="doughnutChartType"\n              [colors]="colors"\n              (chartHover)="chartHovered($event)"\n              (chartClick)="chartClicked($event)">\n      </canvas>\n    </div>\n    <div style="margin-top: -50px; margin-left: 80px; font-size: 12px; color:black;">\n      <strong>37.01%</strong>\n    </div>\n    </ion-col>\n    <ion-col col-6>\n      PERSENTASE\n      <ion-row>\n        <ion-col col-3>\n          <ion-card no-margin margin-bottom style="background-color: #3698DB;height: 10px;width: 15px;"></ion-card>\n        </ion-col>\n        <ion-col >\n            Klaim Dalam Prosess\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-3>\n          <ion-card no-margin margin-bottom style="background-color: #B0DCF6;height: 10px;width: 15px;"></ion-card>\n        </ion-col>\n        <ion-col >\n            Keseluruhan Klaim\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-slides style="height: 20%;">\n      <ion-slide>\n        <ion-row>\n        <ion-col col-6>\n          <ion-card no-margin class="full-width" style="background-color:#42A6FA;height: 90px; ">\n            <!-- <ion-icon name="alarm" style="font-size: 10ch" item-left></ion-icon> -->\n            <img src="assets/icon/ic_rata-rata-pengajuan.png" style="width: 40px;margin-top: 22px">\n            <div style="color: white; margin-top: -45px; margin-left: 55px;text-align: center;font-size: 12px;">Rata-rata Process Bulan Ini</div>\n            <!-- <div style="color: white; margin-top: 15px; margin-left: 5px;text-align: center">Rata-rata Process Bulan Ini</div> -->\n            <div style="color: white; margin-left: 55px;text-align: center"><strong>14 Hari 16 Jam</strong></div>\n          </ion-card>\n        </ion-col>\n        <ion-col col-6>\n          <ion-card no-margin class="full-width" style="background-color:#1A9788;height: 90px; ">\n            <!-- <ion-icon name="contacts" style="font-size: 10ch" item-left></ion-icon> -->\n            <img src="assets/icon/ic_nasabah.png" style="width: 40px;margin-top: 22px">\n            <div style="color: white; margin-top: -35px; margin-left: 35px;text-align: center;font-size: 12px;">Jumlah Customer Aktif Bulan Ini</div>\n            <!-- <div style="color: white; margin-top: 15px; margin-left: 5px;text-align: center">Jumlah Customer Aktif Bulan Ini</div> -->\n            <div style="color: white; margin-left: 35px;text-align: center"><strong>330 Orang</strong></div>\n          </ion-card>\n        </ion-col>\n        </ion-row>\n      </ion-slide>\n      <ion-slide>\n        <ion-row>\n        <ion-col col-6>\n          <ion-card no-margin class="full-width" style="background-color:#D78E1E;height: 90px; ">\n            <!-- <ion-icon name="cash" style="font-size: 10ch" item-left></ion-icon> -->\n            <img src="assets/icon/ic_total-pengajuan-klaim.png" style="width: 40px;margin-top: 22px">\n            <div style="color: white; margin-top: -35px; margin-left: 35px;text-align: center;font-size: 12px;">Total Pengajuan Tahun Ini</div>\n            <!-- <div style="color: white; margin-top: 15px; margin-left: 5px;text-align: center">Total Pengajuan Tahun Ini</div> -->\n            <div style="color: white; margin-left: 35px;text-align: center"><strong>{{3442730483 | number}}</strong></div>\n          </ion-card>\n        </ion-col>\n        </ion-row>\n      </ion-slide>\n    </ion-slides>\n\n  <ion-row>\n    <ion-item>\n      <ion-label>Urutkan Berdasarkan</ion-label>\n      <ion-select >\n        <ion-option>Mitra</ion-option>\n        <ion-option>Product</ion-option>\n        <ion-option>Debitur</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item-sliding #item *ngFor="let r of rows" >\n        \n      <ion-item>\n        <!-- <img item-left [src]="" style="width: 25%"> -->\n        <ion-note item-left style="width: 25%">{{r.mitra}}</ion-note>\n        <div><strong>{{r.product}}</strong></div>\n        <div style="color: black;font-size: 12px;"><ion-note>Pokok</ion-note> {{r.pokok | number}}</div>\n        <div style="color: black;font-size: 12px;"><ion-note>Klaim</ion-note> {{r.klaim | number}}</div>\n      \n        <div item-end style="text-align: center">\n          <h1 style="color: black">{{r.terjamin}}</h1>\n          <ion-note>Debitur</ion-note> \n        </div>\n      </ion-item>\n      \n    </ion-item-sliding>\n    \n    <!-- <ion-item-sliding #item>\n      <ion-item>\n        Item\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button (click)="favorite(item)">Favorite</button>\n        <button ion-button color="danger" (click)="share(item)">Share</button>\n      </ion-item-options>\n  \n      <ion-item-options side="right">\n        <button ion-button (click)="unread(item)">Unread</button>\n      </ion-item-options>\n    </ion-item-sliding> -->\n  </ion-row>\n  \n</ion-content>\n\n'/*ion-inline-end:"D:\source\jamkrindo\src\pages\klaim\klaim.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_charts__["ChartsModule"]])
    ], KlaimPage);
    return KlaimPage;
}());

//
//# sourceMappingURL=klaim.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MitraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__klaim_klaim__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__penjamin_penjamin__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terjamin_terjamin__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_chart_js__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {Storage} from '@ionic/storage';
// import { HttpClient } from '@angular/common/http';





var MitraPage = /** @class */ (function () {
    function MitraPage(
    // private storage: Storage, 
    nav, navParams, popoverCtrl, chart) {
        this.nav = nav;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.chart = chart;
        // search condition
        this.search = {
            name: "",
            date: new Date().toISOString()
        };
        this.Segment = 'Progress';
        this.header = '';
        this.temp = [];
        this.temp2 = [];
        this.params = [];
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
        this.params = this.navParams.get('0');
        this.header = this.params.mitra;
        console.log(this.header);
    }
    MitraPage.prototype.ionViewWillEnter = function () {
    };
    MitraPage.prototype.ionViewDidLoad = function () {
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
                "no": "1",
                "mitra": "BRI",
                "terjamin": "30",
                "total": "3000000000"
            },
            {
                "no": "2",
                "mitra": "Mandiri",
                "terjamin": "29",
                "total": "2561528769"
            },
            {
                "no": "3",
                "mitra": "BNI",
                "terjamin": "28",
                "total": "2358378208"
            },
            {
                "no": "4",
                "mitra": "BII Maybank",
                "terjamin": "27",
                "total": "2032649732"
            },
            {
                "no": "5",
                "mitra": "Bank Jatim",
                "terjamin": "26",
                "total": "1923084239"
            },
            {
                "no": "6",
                "mitra": "BPD NTB",
                "terjamin": "25",
                "total": "1803297386"
            },
            {
                "no": "7",
                "mitra": "Bank Sinarmas",
                "terjamin": "20",
                "total": "1528637290"
            },
            {
                "no": "8",
                "mitra": "Bank Jabar",
                "terjamin": "19",
                "total": "1476883292"
            },
            {
                "no": "9",
                "mitra": "Bukopin",
                "terjamin": "18",
                "total": "1387129917"
            },
            {
                "no": "10",
                "mitra": "Mandiri Syariah",
                "terjamin": "15",
                "total": "927839263"
            },
            {
                "no": "11",
                "mitra": "BTPN",
                "terjamin": "14",
                "total": "827853285"
            },
            {
                "no": "12",
                "mitra": "BCA",
                "terjamin": "10",
                "total": "712879233"
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
                "no": "1",
                "nama_terjamin": "Panji Nurfirman",
                "mitra": "BRI",
                "total_pengajuan": "10082730"
            },
            {
                "no": "2",
                "nama_terjamin": "Fitri Fardia",
                "mitra": "Mandiri",
                "total_pengajuan": "9801298"
            },
            {
                "no": "3",
                "nama_terjamin": "Mario Stefano",
                "mitra": "BNI",
                "total_pengajuan": "9027308"
            },
            {
                "no": "4",
                "nama_terjamin": "Teopilus Sutjiana",
                "mitra": "BII Maybank",
                "total_pengajuan": "8781203"
            },
            {
                "no": "5",
                "nama_terjamin": "Bambang Karyadi",
                "mitra": "Bank Jatim",
                "total_pengajuan": "7182073"
            },
            {
                "no": "6",
                "nama_terjamin": "Sylvina Kwandou",
                "mitra": "BPD NTB",
                "total_pengajuan": "6782103"
            },
            {
                "no": "7",
                "nama_terjamin": "Rogers Hadikusuma",
                "mitra": "Bank Sinarmas",
                "total_pengajuan": "6219381"
            },
            {
                "no": "8",
                "nama_terjamin": "Daniel Yuwono",
                "mitra": "Bank Jabar",
                "total_pengajuan": "5871289"
            },
            {
                "no": "9",
                "nama_terjamin": "David Margahung",
                "mitra": "Bukopin",
                "total_pengajuan": "5619287"
            },
            {
                "no": "10",
                "nama_terjamin": "Kurniyati",
                "mitra": "Mandiri Syariah",
                "total_pengajuan": "5100921"
            },
            {
                "no": "11",
                "nama_terjamin": "Suwito Yaputera",
                "mitra": "BTPN",
                "total_pengajuan": "4102809"
            },
            {
                "no": "12",
                "nama_terjamin": "Herrik Sidarta",
                "mitra": "BCA",
                "total_pengajuan": "2093403"
            }
        ];
        this.temp2 = this.rows2;
    };
    MitraPage.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.mitra.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        // this.table.offset = 0;
    };
    MitraPage.prototype.updateFilter2 = function (event) {
        var val2 = event.target.value.toLowerCase();
        // filter our data
        var temp2 = this.temp2.filter(function (d) {
            return d.nama_terjamin.toLowerCase().indexOf(val2) !== -1 || !val2;
        });
        // update the rows
        this.rows2 = temp2;
        // Whenever the filter changes, always go back to the first page
        // this.table.offset = 0;
    };
    MitraPage.prototype.Klaim = function (event) {
        console.log("click");
        this.params.header = this.header + ' ' + event;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__klaim_klaim__["a" /* KlaimPage */], this.params);
    };
    MitraPage.prototype.penjamin = function (event) {
        this.params.header = event;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__penjamin_penjamin__["a" /* PenjaminPage */], this.params);
    };
    MitraPage.prototype.terjamin = function (event) {
        this.params.header = event;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__terjamin_terjamin__["a" /* TerjaminPage */], this.params);
    };
    MitraPage.prototype.onSelect = function (_a) {
        var selected = _a.selected;
    };
    MitraPage.prototype.onActivate = function (event) {
    };
    MitraPage.prototype.checkSelectable = function (event) {
        console.log('Checking if selectable', event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('progress'),
        __metadata("design:type", Object)
    ], MitraPage.prototype, "progress", void 0);
    MitraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mitra',template:/*ion-inline-start:"D:\source\jamkrindo\src\pages\mitra\mitra.html"*/'<!-- -->\n<ion-header>\n  <ion-navbar color="primary" style="color: white">\n    <!-- <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button> -->\n    <!-- <ion-title> -->\n      {{header}}\n    <!-- </ion-title> -->\n    <ion-buttons end>\n      <!-- <button ion-button tappable (click)="presentNotifications($event)">\n        <ion-icon name="notifications"></ion-icon>\n      </button> -->\n      <button ion-button tappable (click)="goToAccount()">\n        <ion-icon name="cog"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="animated fadeIn common-bg">\n\n    <ion-slides style="height: 20%;">\n        <ion-slide>\n          <ion-row>\n          <ion-col col-6>\n            <ion-card no-margin class="full-width" style="background-color:#42A6FA;height: 90px; ">\n              <!-- <ion-icon name="alarm" style="font-size: 10ch" item-left></ion-icon> -->\n              <img src="assets/icon/ic_rata-rata-pengajuan.png" style="width: 40px;margin-top: 22px">\n              <div style="color: white; margin-top: -45px; margin-left: 55px;text-align: center;font-size: 12px;">Rata-rata Process Bulan Ini</div>\n              <!-- <div style="color: white; margin-top: 15px; margin-left: 5px;text-align: center">Rata-rata Process Bulan Ini</div> -->\n              <div style="color: white; margin-left: 55px;text-align: center"><strong>14 Hari 16 Jam</strong></div>\n            </ion-card>\n          </ion-col>\n          <ion-col col-6>\n            <ion-card no-margin class="full-width" style="background-color:#1A9788;height: 90px; ">\n              <!-- <ion-icon name="contacts" style="font-size: 10ch" item-left></ion-icon> -->\n              <img src="assets/icon/ic_nasabah.png" style="width: 40px;margin-top: 30px">\n              <div style="color: white; margin-top: -35px; margin-left: 35px;text-align: center;font-size: 12px;">Jumlah Customer Aktif Bulan Ini</div>\n              <!-- <div style="color: white; margin-top: 15px; margin-left: 5px;text-align: center">Jumlah Customer Aktif Bulan Ini</div> -->\n              <div style="color: white; margin-left: 35px;text-align: center"><strong>330 Orang</strong></div>\n            </ion-card>\n          </ion-col>\n          </ion-row>\n        </ion-slide>\n        <ion-slide>\n          <ion-row>\n          <ion-col col-6>\n            <ion-card no-margin class="full-width" style="background-color:#D78E1E;height: 90px; ">\n              <!-- <ion-icon name="cash" style="font-size: 10ch" item-left></ion-icon> -->\n              <img src="assets/icon/ic_total-pengajuan-klaim.png" style="width: 40px;margin-top: 25px">\n              <div style="color: white; margin-top: -35px; margin-left: 35px;text-align: center;font-size: 12px;">Total Pengajuan Tahun Ini</div>\n              <!-- <div style="color: white; margin-top: 15px; margin-left: 5px;text-align: center">Total Pengajuan Tahun Ini</div> -->\n              <div style="color: white; margin-left: 35px;text-align: center"><strong>{{3442730483 | number}}</strong></div>\n            </ion-card>\n          </ion-col>\n          </ion-row>\n        </ion-slide>\n      </ion-slides>\n\n  <ion-segment [(ngModel)]="Segment">\n    <ion-segment-button value="Progress">Progress Status</ion-segment-button>\n    <ion-segment-button value="Terjamin">Nama Terjamin</ion-segment-button>\n  </ion-segment>\n\n  <div class="segment-tab-menu" [ngSwitch]="Segment" style="margin-top: 10px;">  \n    <div [style.display]="Segment == \'Progress\' ? \'block\' : \'none\'">\n        <ion-row>\n            <ion-col col-4>\n              <ion-card no-margin margin-bottom class="full-width full-height" (click)="Klaim(\'Klaim Dalam Proses\')">\n                <!-- <div class="num-header"> 1</div> -->\n                <!-- <ion-icon name="desktop" class="icon-at-home"></ion-icon> -->\n                <img src="assets/icon/ic_klaim dalam proses.png" style="width: 80%;margin-left: 10px">\n                <div style="text-align: center; font-size: 12px;">Klaim Dalam Proses</div>\n              </ion-card>\n            </ion-col>\n            <ion-col col-4>\n              <ion-card no-margin margin-bottom class="full-width full-height" (click)="Klaim(\'Pending Proses Klaim\')">\n                <!-- <div class="num-header"> 1</div> -->\n                <!-- <ion-icon name="timer" class="icon-at-home"></ion-icon> -->\n                <img src="assets/icon/ic_pending proses klaim.png" style="width: 80%;margin-left: 10px">\n                <div style="text-align: center; font-size: 12px;">Pending Proses Klaim</div>\n              </ion-card>\n            </ion-col>\n            <ion-col col-4>\n              <ion-card no-margin margin-bottom class="full-width full-height" (click)="Klaim(\'Klaim Register\')">\n                <!-- <div class="num-header"> 1</div> -->\n                <!-- <ion-icon name="briefcase" class="icon-at-home"></ion-icon> -->\n                <img src="assets/icon/ic_klaim register.png" style="width: 80%;margin-left: 10px">\n                <div style="text-align: center; font-size: 12px;">Klaim Register</div>\n              </ion-card>\n            </ion-col>\n          </ion-row>  \n    \n          <ion-row>\n            <ion-col col-4>\n              <ion-card no-margin margin-bottom class="full-width full-height" (click)="Klaim(\'Hutang Klaim\')">\n                <!-- <div class="num-header"> 1</div> -->\n                <!-- <ion-icon name="analytics" class="icon-at-home"></ion-icon> -->\n                <img src="assets/icon/ic_hutang klaim.png" style="width: 80%;margin-left: 10px">\n                <div style="text-align: center; font-size: 12px;">Hutang Klaim</div>\n              </ion-card>\n            </ion-col>\n            <ion-col col-4>\n              <ion-card no-margin margin-bottom class="full-width full-height" (click)="Klaim(\'Klaim Dibayar\')">\n                <!-- <div class="num-header"> 1</div> -->\n                <!-- <ion-icon name="archive" class="icon-at-home"></ion-icon> -->\n                <img src="assets/icon/ic_klaim dibayar.png" style="width: 80%;margin-left: 10px">\n                <div style="text-align: center; font-size: 12px;">Klaim Dibayar</div>\n              </ion-card>\n            </ion-col>\n            <ion-col col-4>\n              <ion-card no-margin margin-bottom class="full-width full-height" (click)="Klaim(\'Selisih Dibayar Dan Banding Klaim\')">\n                <!-- <div class="num-header"> 1</div> -->\n                <!-- <ion-icon name="bookmarks" class="icon-at-home"></ion-icon> -->\n                <img src="assets/icon/ic_selisih bayar.png" style="width: 80%;margin-left: 10px">\n                <div style="text-align: center; font-size: 12px;">Selisih Dibayar Dan Banding Klaim</div>\n              </ion-card>\n            </ion-col>\n          </ion-row>  \n    \n          <ion-row>\n            <ion-col col-4>\n              <ion-card no-margin margin-bottom class="full-width full-height" (click)="Klaim(\'Pending Bayar Klaim\')">\n                <!-- <div class="num-header"> 1</div> -->\n                <!-- <ion-icon name="calendar" class="icon-at-home"></ion-icon> -->\n                <img src="assets/icon/ic_pending bayar klaim.png" style="width: 80%;margin-left: 10px">\n                <div style="text-align: center; font-size: 12px;">Pending Bayar Klaim</div>\n              </ion-card>\n            </ion-col>\n            <ion-col col-4>\n              <ion-card no-margin margin-bottom class="full-width full-height" (click)="Klaim(\'Klaim Ditolak\')">\n                <!-- <div class="num-header"> 1</div> -->\n                <!-- <ion-icon name="close-circle" class="icon-at-home"></ion-icon> -->\n                <img src="assets/icon/ic_klaim ditolak.png" style="width: 80%;margin-left: 10px">\n                <div style="text-align: center; font-size: 12px;">Klaim Ditolak</div>\n              </ion-card>\n            </ion-col>\n            <ion-col col-4>\n              <ion-card no-margin margin-bottom class="full-width full-height" (click)="Klaim(\'Lain-lain\')">\n                <!-- <div class="num-header"> 1</div> -->\n                <!-- <ion-icon name="code-working" class="icon-at-home"></ion-icon> -->\n                <img src="assets/icon/ic_lain lain.png" style="width: 80%;margin-left: 10px">\n                <div style="text-align: center; font-size: 12px;">Lain-lain</div>\n              </ion-card>\n            </ion-col>\n          </ion-row>  \n\n    </div>\n    \n    <div [style.display]="Segment == \'Terjamin\' ? \'block\' : \'none\'">\n    <ion-item tappable class="border-bottom">\n        <ion-icon name="search" color="primary" item-right></ion-icon>\n        <input type=\'text\' style=\'border: none;width: 100%;height: 50px;\' placeholder=\'Type to filter...\' (keyup)=\'updateFilter2($event)\' />\n      </ion-item>\n      <div style="padding: 10px">\n        <!-- <strong>Top 10 {{Segment}}</strong> -->\n      </div>\n      <ngx-datatable\n        [sortType]="\'multi\'"\n        [headerHeight]="50"\n        [rowHeight]="50"\n        [rows]="rows2"\n        [columnMode]="\'force\'"\n        [scrollbarH]="true"\n        [selectCheck]="checkSelectable"\n        [selected]="selected"\n        [selectionType]="\'multi\'"\n        (activate)="onActivate($event)"\n        (select)=\'onSelect($event)\'\n        style="color: black"\n        >\n        <ngx-datatable-column prop="no" name="No" [draggable]="false" width="30">\n          <ng-template let-value="value" ngx-datatable-cell-template>\n            {{value}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column prop="nama_terjamin" name="Nama Terjamin" [draggable]="false">\n          <ng-template let-value="value" ngx-datatable-cell-template>\n            {{value}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column prop="mitra" name="Mitra / Penerima Jaminan" [draggable]="false">\n          <ng-template let-value="value" ngx-datatable-cell-template>\n            {{value}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column prop="total_pengajuan" name="Total Pengajuan" [draggable]="false">\n          <ng-template let-value="value" ngx-datatable-cell-template>\n            {{value | number}}\n          </ng-template>\n        </ngx-datatable-column>\n      </ngx-datatable>\n\n      <!-- <button ion-button block color="secondary" (click)="terjamin(\'Daftar Terjamin\')">Lihat Lainnya</button> -->\n    </div>    \n  </div>\n</ion-content>\n\n'/*ion-inline-end:"D:\source\jamkrindo\src\pages\mitra\mitra.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_charts__["ChartsModule"]])
    ], MitraPage);
    return MitraPage;
}());

//
//# sourceMappingURL=mitra.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PenjaminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mitra_mitra__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {Storage} from '@ionic/storage';
// import { HttpClient } from '@angular/common/http';
// import {NotificationsPage} from "../notifications/notifications";
// import {SettingsPage} from "../settings/settings";
// import {TripsPage} from "../trips/trips";
// import {SearchLocationPage} from "../search-location/search-location";



var PenjaminPage = /** @class */ (function () {
    function PenjaminPage(
    // private storage: Storage, 
    nav, navParams, popoverCtrl, chart) {
        this.nav = nav;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.chart = chart;
        // search condition
        this.search = {
            name: "",
            date: new Date().toISOString()
        };
        this.temp = [];
        this.header = "";
        this.selected = [];
        this.columns = [
            { prop: 'mitra' },
            { name: 'Terjamin' },
            { name: 'Total' }
        ];
        this.header = this.navParams.get('header');
        console.log(this.header);
    }
    PenjaminPage.prototype.ionViewWillEnter = function () {
    };
    PenjaminPage.prototype.ionViewDidLoad = function () {
        // this.HTTP
        // .get<Config>('../../assets/data/penjamin.json')
        // .subscribe((data) =>
        // { 
        //   this.temp = data.data;
        //   this.rows = data.data;
        // });
        this.rows = [
            {
                "no": "1",
                "mitra": "BRI",
                "terjamin": "30",
                "total": "3000000000"
            },
            {
                "no": "2",
                "mitra": "Mandiri",
                "terjamin": "29",
                "total": "2561528769"
            },
            {
                "no": "3",
                "mitra": "BNI",
                "terjamin": "28",
                "total": "2358378208"
            },
            {
                "no": "4",
                "mitra": "BII Maybank",
                "terjamin": "27",
                "total": "2032649732"
            },
            {
                "no": "5",
                "mitra": "Bank Jatim",
                "terjamin": "26",
                "total": "1923084239"
            },
            {
                "no": "6",
                "mitra": "BPD NTB",
                "terjamin": "25",
                "total": "1803297386"
            },
            {
                "no": "7",
                "mitra": "Bank Sinarmas",
                "terjamin": "20",
                "total": "1528637290"
            },
            {
                "no": "8",
                "mitra": "Bank Jabar",
                "terjamin": "19",
                "total": "1476883292"
            },
            {
                "no": "9",
                "mitra": "Bukopin",
                "terjamin": "18",
                "total": "1387129917"
            },
            {
                "no": "10",
                "mitra": "Mandiri Syariah",
                "terjamin": "15",
                "total": "927839263"
            },
            {
                "no": "11",
                "mitra": "BTPN",
                "terjamin": "14",
                "total": "827853285"
            },
            {
                "no": "12",
                "mitra": "BCA",
                "terjamin": "10",
                "total": "712879233"
            }
        ];
        this.temp = this.rows;
    };
    PenjaminPage.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.mitra.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        // this.table.offset = 0;
    };
    PenjaminPage.prototype.onSelect = function (_a) {
        // console.log('Select Event', selected, this.selected);
        var selected = _a.selected;
        var _b;
        this.selected.splice(0, this.selected.length);
        (_b = this.selected).push.apply(_b, selected);
        if (this.selected) {
            this.goToMitra(this.selected);
        }
    };
    PenjaminPage.prototype.onActivate = function (event) {
        // console.log('Activate Event', event);
    };
    PenjaminPage.prototype.checkSelectable = function (event) {
        // console.log('Checking if selectable', event);
        return event.name !== 'Ethel Price';
    };
    PenjaminPage.prototype.goToMitra = function (event) {
        console.log(event);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__mitra_mitra__["a" /* MitraPage */], event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('progress'),
        __metadata("design:type", Object)
    ], PenjaminPage.prototype, "progress", void 0);
    PenjaminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-penjamin',template:/*ion-inline-start:"D:\source\jamkrindo\src\pages\penjamin\penjamin.html"*/'<!-- -->\n<ion-header>\n    <ion-navbar color="primary" style="color: white">\n      <!-- <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button> -->\n      <!-- <ion-title> -->\n        {{header}}\n      <!-- </ion-title> -->\n      \n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="animated fadeIn common-bg">\n  <ion-item tappable class="border-bottom">\n    <ion-icon name="search" color="primary" item-right></ion-icon>\n    <input type=\'text\' style=\'border: solid; border-radius: 5px;width: 100%;height: 50px;\' placeholder=\'Type to filter...\' (keyup)=\'updateFilter($event)\' />\n  </ion-item>\n\n  <ion-slides style="height: 20%;">\n      <ion-slide>\n        <ion-row>\n        <ion-col col-6>\n          <ion-card no-margin class="full-width" style="background-color:#42A6FA;height: 90px; ">\n            <!-- <ion-icon name="alarm" style="font-size: 10ch" item-left></ion-icon> -->\n            <img src="assets/icon/ic_rata-rata-pengajuan.png" style="width: 40px;margin-top: 22px">\n            <div style="color: white; margin-top: -45px; margin-left: 55px;text-align: center;font-size: 12px;">Rata-rata Process Bulan Ini</div>\n            <!-- <div style="color: white; margin-top: 15px; margin-left: 5px;text-align: center">Rata-rata Process Bulan Ini</div> -->\n            <div style="color: white; margin-left: 55px;text-align: center"><strong>14 Hari 16 Jam</strong></div>\n          </ion-card>\n        </ion-col>\n        <ion-col col-6>\n          <ion-card no-margin class="full-width" style="background-color:#1A9788;height: 90px; ">\n            <!-- <ion-icon name="contacts" style="font-size: 10ch" item-left></ion-icon> -->\n            <img src="assets/icon/ic_nasabah.png" style="width: 40px;margin-top: 30px">\n            <div style="color: white; margin-top: -35px; margin-left: 35px;text-align: center;font-size: 12px;">Jumlah Customer Aktif Bulan Ini</div>\n            <!-- <div style="color: white; margin-top: 15px; margin-left: 5px;text-align: center">Jumlah Customer Aktif Bulan Ini</div> -->\n            <div style="color: white; margin-left: 35px;text-align: center"><strong>330 Orang</strong></div>\n          </ion-card>\n        </ion-col>\n        </ion-row>\n      </ion-slide>\n      <ion-slide>\n        <ion-row>\n        <ion-col col-6>\n          <ion-card no-margin class="full-width" style="background-color:#D78E1E;height: 90px; ">\n            <!-- <ion-icon name="cash" style="font-size: 10ch" item-left></ion-icon> -->\n            <img src="assets/icon/ic_total-pengajuan-klaim.png" style="width: 40px;margin-top: 25px">\n            <div style="color: white; margin-top: -35px; margin-left: 35px;text-align: center;font-size: 12px;">Total Pengajuan Tahun Ini</div>\n            <!-- <div style="color: white; margin-top: 15px; margin-left: 5px;text-align: center">Total Pengajuan Tahun Ini</div> -->\n            <div style="color: white; margin-left: 35px;text-align: center"><strong>{{3442730483 | number}}</strong></div>\n          </ion-card>\n        </ion-col>\n        </ion-row>\n      </ion-slide>\n    </ion-slides>\n  \n  <ngx-datatable\n    [sortType]="\'multi\'"\n    [headerHeight]="50"\n    [rowHeight]="50"\n    [rows]="rows"\n    [columnMode]="\'force\'"\n    [scrollbarH]="true"\n    [selectCheck]="checkSelectable"\n    [selected]="selected"\n    [selectionType]="\'multi\'"\n    (activate)="onActivate($event)"\n    (select)=\'onSelect($event)\'\n    style="color: black"\n    >\n    <ngx-datatable-column prop="no" name="No" [draggable]="false" width="30">\n      <ng-template let-value="value" ngx-datatable-cell-template>\n        {{value}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column prop="mitra" name="Mitra / Penerima Jaminan" [draggable]="false">\n      <ng-template let-value="value" ngx-datatable-cell-template>\n        {{value}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column prop="terjamin" name="Terjamin" [draggable]="false" width="55">\n      <ng-template let-value="value" ngx-datatable-cell-template>\n        {{value}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column prop="total" name="Total Pengajuan" [draggable]="false">\n      <ng-template let-value="value" ngx-datatable-cell-template>\n        {{value | number}}\n      </ng-template>\n    </ngx-datatable-column>\n  </ngx-datatable>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\source\jamkrindo\src\pages\penjamin\penjamin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_charts__["ChartsModule"]])
    ], PenjaminPage);
    return PenjaminPage;
}());

//
//# sourceMappingURL=penjamin.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerjaminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terjamindetail_terjamindetail__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {Storage} from '@ionic/storage';
// import { HttpClient } from '@angular/common/http';
// import {NotificationsPage} from "../notifications/notifications";
// import {SettingsPage} from "../settings/settings";
// import {TripsPage} from "../trips/trips";
// import {SearchLocationPage} from "../search-location/search-location";



var TerjaminPage = /** @class */ (function () {
    function TerjaminPage(
    // private storage: Storage, 
    nav, navParams, popoverCtrl, chart) {
        // this.columns = [
        //   { prop: 'mitra' },
        //   { name: 'Terjamin' },
        //   { name: 'Total' }
        // ];
        this.nav = nav;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.chart = chart;
        // search condition
        this.search = {
            name: "",
            date: new Date().toISOString()
        };
        this.temp = [];
        this.header = "";
        this.selected = [];
        this.header = this.navParams.get('header');
        // console.log(this.header);
    }
    TerjaminPage.prototype.ionViewWillEnter = function () {
    };
    TerjaminPage.prototype.ionViewDidLoad = function () {
        // this.HTTP
        // .get<Config>('../../assets/data/terjamin.json')
        // .subscribe((data) =>
        // { 
        //   this.temp = data.data;
        //   this.rows = data.data;
        // });
        this.rows = [
            {
                "no": "1",
                "nama_terjamin": "Panji Nurfirman",
                "mitra": "BRI",
                "total_pengajuan": "10082730"
            },
            {
                "no": "2",
                "nama_terjamin": "Fitri Fardia",
                "mitra": "Mandiri",
                "total_pengajuan": "9801298"
            },
            {
                "no": "3",
                "nama_terjamin": "Mario Stefano",
                "mitra": "BNI",
                "total_pengajuan": "9027308"
            },
            {
                "no": "4",
                "nama_terjamin": "Teopilus Sutjiana",
                "mitra": "BII Maybank",
                "total_pengajuan": "8781203"
            },
            {
                "no": "5",
                "nama_terjamin": "Bambang Karyadi",
                "mitra": "Bank Jatim",
                "total_pengajuan": "7182073"
            },
            {
                "no": "6",
                "nama_terjamin": "Sylvina Kwandou",
                "mitra": "BPD NTB",
                "total_pengajuan": "6782103"
            },
            {
                "no": "7",
                "nama_terjamin": "Rogers Hadikusuma",
                "mitra": "Bank Sinarmas",
                "total_pengajuan": "6219381"
            },
            {
                "no": "8",
                "nama_terjamin": "Daniel Yuwono",
                "mitra": "Bank Jabar",
                "total_pengajuan": "5871289"
            },
            {
                "no": "9",
                "nama_terjamin": "David Margahung",
                "mitra": "Bukopin",
                "total_pengajuan": "5619287"
            },
            {
                "no": "10",
                "nama_terjamin": "Kurniyati",
                "mitra": "Mandiri Syariah",
                "total_pengajuan": "5100921"
            },
            {
                "no": "11",
                "nama_terjamin": "Suwito Yaputera",
                "mitra": "BTPN",
                "total_pengajuan": "4102809"
            },
            {
                "no": "12",
                "nama_terjamin": "Herrik Sidarta",
                "mitra": "BCA",
                "total_pengajuan": "2093403"
            }
        ];
        this.temp = this.rows;
    };
    TerjaminPage.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.mitra.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        // this.table.offset = 0;
    };
    TerjaminPage.prototype.onSelect = function (_a) {
        // console.log('Select Event', selected, this.selected);
        var selected = _a.selected;
        var _b;
        this.selected.splice(0, this.selected.length);
        (_b = this.selected).push.apply(_b, selected);
        if (this.selected) {
            this.goDetailTerjamin(this.selected);
        }
    };
    TerjaminPage.prototype.onActivate = function (event) {
        // console.log('Activate Event', event);
    };
    TerjaminPage.prototype.checkSelectable = function (event) {
        // console.log('Checking if selectable', event);
        return event.name !== 'Ethel Price';
    };
    TerjaminPage.prototype.goDetailTerjamin = function (event) {
        console.log(event);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__terjamindetail_terjamindetail__["a" /* TerjaminDetailPage */], event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('progress'),
        __metadata("design:type", Object)
    ], TerjaminPage.prototype, "progress", void 0);
    TerjaminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-terjamin',template:/*ion-inline-start:"D:\source\jamkrindo\src\pages\terjamin\terjamin.html"*/'<!-- -->\n<ion-header>\n    <ion-navbar color="primary" style="color: white">\n      <!-- <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button> -->\n      <!-- <ion-title> -->\n        {{header}}\n      <!-- </ion-title> -->\n      \n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="animated fadeIn common-bg">\n  <ion-item tappable class="border-bottom">\n    <ion-icon name="search" color="primary" item-right></ion-icon>\n    <input type=\'text\' style=\'border: solid; border-radius: 5px;width: 100%;height: 50px;\' placeholder=\'Type to filter...\' (keyup)=\'updateFilter($event)\' />\n  </ion-item>\n\n  <ion-slides style="height: 20%;">\n      <ion-slide>\n        <ion-row>\n        <ion-col col-6>\n          <ion-card no-margin class="full-width" style="background-color:#42A6FA;height: 90px; ">\n            <!-- <ion-icon name="alarm" style="font-size: 10ch" item-left></ion-icon> -->\n            <img src="assets/icon/ic_rata-rata-pengajuan.png" style="width: 40px;margin-top: 22px">\n            <div style="color: white; margin-top: -45px; margin-left: 55px;text-align: center;font-size: 12px;">Rata-rata Process Bulan Ini</div>\n            <!-- <div style="color: white; margin-top: 15px; margin-left: 5px;text-align: center">Rata-rata Process Bulan Ini</div> -->\n            <div style="color: white; margin-left: 55px;text-align: center"><strong>14 Hari 16 Jam</strong></div>\n          </ion-card>\n        </ion-col>\n        <ion-col col-6>\n          <ion-card no-margin class="full-width" style="background-color:#1A9788;height: 90px; ">\n            <!-- <ion-icon name="contacts" style="font-size: 10ch" item-left></ion-icon> -->\n            <img src="assets/icon/ic_nasabah.png" style="width: 40px;margin-top: 30px">\n            <div style="color: white; margin-top: -35px; margin-left: 35px;text-align: center;font-size: 12px;">Jumlah Customer Aktif Bulan Ini</div>\n            <!-- <div style="color: white; margin-top: 15px; margin-left: 5px;text-align: center">Jumlah Customer Aktif Bulan Ini</div> -->\n            <div style="color: white; margin-left: 35px;text-align: center"><strong>330 Orang</strong></div>\n          </ion-card>\n        </ion-col>\n        </ion-row>\n      </ion-slide>\n      <ion-slide>\n        <ion-row>\n        <ion-col col-6>\n          <ion-card no-margin class="full-width" style="background-color:#D78E1E;height: 90px; ">\n            <!-- <ion-icon name="cash" style="font-size: 10ch" item-left></ion-icon> -->\n            <img src="assets/icon/ic_total-pengajuan-klaim.png" style="width: 40px;margin-top: 25px">\n            <div style="color: white; margin-top: -35px; margin-left: 35px;text-align: center;font-size: 12px;">Total Pengajuan Tahun Ini</div>\n            <!-- <div style="color: white; margin-top: 15px; margin-left: 5px;text-align: center">Total Pengajuan Tahun Ini</div> -->\n            <div style="color: white; margin-left: 35px;text-align: center"><strong>{{3442730483 | number}}</strong></div>\n          </ion-card>\n        </ion-col>\n        </ion-row>\n      </ion-slide>\n    </ion-slides>\n  \n  <ngx-datatable\n    [sortType]="\'multi\'"\n    [headerHeight]="50"\n    [rowHeight]="50"\n    [rows]="rows"\n    [columnMode]="\'force\'"\n    [scrollbarH]="true"\n    [selectCheck]="checkSelectable"\n    [selected]="selected"\n    [selectionType]="\'multi\'"\n    (activate)="onActivate($event)"\n    (select)=\'onSelect($event)\'\n    style="color: black"\n    >\n    <ngx-datatable-column prop="no" name="No" [draggable]="false" width="30">\n      <ng-template let-value="value" ngx-datatable-cell-template>\n        {{value}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column prop="nama_terjamin" name="Nama Terjamin" [draggable]="false">\n      <ng-template let-value="value" ngx-datatable-cell-template>\n        {{value}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column prop="mitra" name="Penerima Jaminan" [draggable]="false">\n      <ng-template let-value="value" ngx-datatable-cell-template>\n        {{value}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column prop="total_pengajuan" name="Total Pengajuan" [draggable]="false">\n      <ng-template let-value="value" ngx-datatable-cell-template>\n        {{value | number}}\n      </ng-template>\n    </ngx-datatable-column>\n  </ngx-datatable>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\source\jamkrindo\src\pages\terjamin\terjamin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_charts__["ChartsModule"]])
    ], TerjaminPage);
    return TerjaminPage;
}());

//
//# sourceMappingURL=terjamin.js.map

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 177;

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 221;

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_trips__ = __webpack_require__(549);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TripService = /** @class */ (function () {
    function TripService() {
        this.trips = __WEBPACK_IMPORTED_MODULE_1__mock_trips__["a" /* TRIPS */];
    }
    TripService.prototype.getAll = function () {
        return this.trips;
    };
    TripService.prototype.getItem = function (id) {
        for (var i = 0; i < this.trips.length; i++) {
            if (this.trips[i].id === parseInt(id)) {
                return this.trips[i];
            }
        }
        return null;
    };
    TripService.prototype.remove = function (item) {
        this.trips.splice(this.trips.indexOf(item), 1);
    };
    TripService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TripService);
    return TripService;
}());

//# sourceMappingURL=trip-service.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeatherProvider = /** @class */ (function () {
    function WeatherProvider(http) {
        this.http = http;
        this.apiKey = '1e4a0bdb251c64e4';
        console.log('Hello WeatherProvider Provider');
        this.url = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q/';
    }
    WeatherProvider.prototype.getWeather = function (state, city) {
        return this.http.get(this.url + state + '/' + city + '.json').map(function (res) { return res; });
    };
    WeatherProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], WeatherProvider);
    return WeatherProvider;
}());

//# sourceMappingURL=weather.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = /** @class */ (function () {
    function SettingsPage(nav) {
        this.nav = nav;
    }
    // logout
    SettingsPage.prototype.logout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"D:\source\jamkrindo\src\pages\settings\settings.html"*/'<!-- -->\n<ion-header class="no-shadow">\n\n  <ion-navbar class="no-border">\n    <ion-title>\n      <ion-icon name="options" class="text-primary"></ion-icon>\n      <span class="text-primary">Settings</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="common-bg">\n  <!-- User settings-->\n  <!-- <ion-item-group>\n    <ion-item-divider color="secondary" class="bold">User Settings</ion-item-divider>\n    <ion-item>\n      <ion-label>Language</ion-label>\n      <ion-select [(ngModel)]="language" cancelText="Cancel" okText="OK">\n        <ion-option value="en-US" selected="true">English (US)</ion-option>\n        <ion-option value="en-GB">English (UK)</ion-option>\n        <ion-option value="en-CA">English (CA)</ion-option>\n        <ion-option value="en-AU">English (AU)</ion-option>\n        <ion-option value="en-IN">English (IN)</ion-option>\n        <ion-option value="pt-BR">Portuguese (BR)</ion-option>\n        <ion-option value="pt-PT">Portuguese (PT)</ion-option>\n        <ion-option value="es-ES">Spanish (ES)</ion-option>\n        <ion-option value="es-AR">Spanish (AR)</ion-option>\n        <ion-option value="es-CO">Spanish (CO)</ion-option>\n        <ion-option value="es-CL">Spanish (CL)</ion-option>\n        <ion-option value="es-MX">Spanish (MX)</ion-option>\n        <ion-option value="zh-CN">Chinese (CN)</ion-option>\n        <ion-option value="zh-TW">Chinese (TW)</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Currency</ion-label>\n      <ion-select [(ngModel)]="currency" cancelText="Cancel" okText="OK">\n        <ion-option value="USD" selected="true">U.S Dollar (US$)</ion-option>\n        <ion-option value="EUR">Euro (€)</ion-option>\n        <ion-option value="GBP">Pound (£)</ion-option>\n        <ion-option value="BRL">Brazilian Real (R$)</ion-option>\n        <ion-option value="CNY">Chinese Yuan</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Units</ion-label>\n      <ion-select [(ngModel)]="munits" cancelText="Cancel" okText="OK">\n        <ion-option value="M" selected="true">Miles (ft²)</ion-option>\n        <ion-option value="K">Kilometers (m²)</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Notifications?</ion-label>\n      <ion-toggle checked="true"></ion-toggle>\n    </ion-item>\n  </ion-item-group> -->\n  <!-- App settings-->\n  <!-- <ion-item-group>\n    <ion-item-divider color="secondary" class="bold">App Settings</ion-item-divider>\n    <ion-item>\n      <span>Clear Private Data</span>\n    </ion-item>\n    <ion-item>\n      <ion-label>Push Notifications?</ion-label>\n      <ion-toggle checked="false"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <span>Privacy Policy</span>\n    </ion-item>\n  </ion-item-group>   -->\n\n  <!--sign out button-->\n  <button ion-button color="primary" full tappable (click)="logout()">LOG OUT</button>\n\n</ion-content>\n'/*ion-inline-end:"D:\source\jamkrindo\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = /** @class */ (function () {
    function RegisterPage(nav) {
        this.nav = nav;
    }
    // register and go to home page
    RegisterPage.prototype.register = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    // go to login page
    RegisterPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"D:\source\jamkrindo\src\pages\register\register.html"*/'<!-- -->\n<ion-content class="auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding text-center>\n      <div class="logo"></div>\n      <!-- <h2 ion-text class="text-primary">\n        <strong>Ionic 3</strong> Start Theme\n      </h2> -->\n    </div>\n\n    <!-- Login form -->\n    <form class="list-form">\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n          Full Name\n        </ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n          Email\n        </ion-label>\n        <ion-input type="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          Password\n        </ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n    </form>\n\n    <div margin-top>\n      <button ion-button block color="dark" tappable (click)="register()">\n        SIGN UP\n      </button>\n\n      <!-- <p text-center ion-text color="secondary">Or Sign Up with:</p> -->\n\n      <!-- <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-facebook">\n              <ion-icon name="logo-facebook"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-twitter">\n              <ion-icon name="logo-twitter"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-gplus">\n              <ion-icon name="logo-googleplus"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid> -->\n    </div>\n\n    <!-- Other links -->\n    <div text-center margin-top>\n      <span ion-text color="primary" tappable (click)="login()">I have an account</span>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\source\jamkrindo\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerjaminDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {Storage} from '@ionic/storage';
// import { HttpClient } from '@angular/common/http';
// import {NotificationsPage} from "../notifications/notifications";
// import {SettingsPage} from "../settings/settings";
// import {TripsPage} from "../trips/trips";
// import {SearchLocationPage} from "../search-location/search-location";


var TerjaminDetailPage = /** @class */ (function () {
    function TerjaminDetailPage(
    // private storage: Storage, 
    nav, navParams, popoverCtrl, chart) {
        this.nav = nav;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.chart = chart;
        // search condition
        this.search = {
            name: "",
            date: new Date().toISOString()
        };
        this.temp = [];
        this.header = "";
        this.selected = [];
        this.params = [];
        this.shownGroup6 = null;
        this.mitra = "";
        this.date = Date.now();
        this.params = this.navParams.get('0');
        this.header = this.params.nama_terjamin;
        this.mitra = this.params.mitra;
        console.log(this.header);
    }
    TerjaminDetailPage.prototype.ionViewWillEnter = function () {
    };
    TerjaminDetailPage.prototype.ionViewDidLoad = function () {
    };
    TerjaminDetailPage.prototype.toggleList6 = function () {
        if (this.isGroupShown6()) {
            this.shownGroup6 = null;
        }
        else {
            this.shownGroup6 = 1;
        }
    };
    TerjaminDetailPage.prototype.isGroupShown6 = function () {
        return this.shownGroup6 === 1;
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('progress'),
        __metadata("design:type", Object)
    ], TerjaminDetailPage.prototype, "progress", void 0);
    TerjaminDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-terjamindetail',template:/*ion-inline-start:"D:\source\jamkrindo\src\pages\terjamindetail\terjamindetail.html"*/'<!-- -->\n<ion-header>\n    <ion-navbar color="primary" style="color: white">\n      <!-- <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button> -->\n      <!-- <ion-title> -->\n        {{header}}\n      <!-- </ion-title> -->\n      \n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="animated fadeIn common-bg">\n  <ion-card no-margin margin-bottom class="full-width">\n    <ion-item class="border-bottom" style="text-align: center;">\n      <strong>Detail</strong>\n    </ion-item>\n    <ion-item>Total Pengajuan Klaim \n      <ion-note item-end>{{1029380 | number}}</ion-note> \n    </ion-item>\n    \n    <ion-item>Pokok Kredit\n        <ion-note item-end>{{1029380 | number}}</ion-note>\n    </ion-item>\n\n    <ion-item>Penerima Jaminan\n        <ion-note item-end>{{mitra}}</ion-note>\n    </ion-item>\n\n    <ion-item>Unit Kerja Mitra\n        <ion-note item-end>Karyawan</ion-note>\n    </ion-item>\n\n    <ion-item>Cabang Jamkrindo\n        <ion-note item-end>Jakarta</ion-note>\n    </ion-item>\n  </ion-card>\n\n  <ion-card no-margin margin-bottom class="full-width">\n      <ion-item class="border-bottom" style="text-align: center;">\n        <strong>Status Terakhir</strong>\n      </ion-item>\n      <!-- <ion-icon name="cash" style="font-size: 10ch;margin-left: 50px;" item-left></ion-icon> -->\n      <img src="assets/icon/ic_klaim dibayar.png" style="width: 30%; margin-left: 30px">\n      <div style="margin-top: -60px; margin-left: 5px;text-align: center;text-align: center">Klaim Dibayar</div>\n      <div style="margin-top: 30px;margin-left: 5px;text-align: center"><strong>update {{date | date:\'dd MMMM yyyy\'}}</strong></div>\n      \n      <ion-list class="list-accordion" >\n        <button ion-item detail-none [ngClass]="{active: isGroupShown6()}" (click)="toggleList6()">          \n            <img item-right class="collapse-icon" [src]="isGroupShown6() ? \'assets/icon/ic-next-black.png\':\'assets/icon/ic-collapsed-black.png\'">\n            Show Detail\n          </button>\n            \n        <ion-item ion-item detail-none [ngClass]="isGroupShown6() ? \'\' : \'hide\'">\n            <div>\n              <ion-row>\n                <ion-col>\n                  Klaim Dalam Proses\n                  <ion-note>19/07/2018</ion-note>\n                </ion-col>\n                <ion-col>\n                  <ion-icon name="checkmark" style="float: right;"></ion-icon>\n                </ion-col>\n              </ion-row>\n            </div>\n    \n            <div>\n                <ion-row>\n                    <ion-col>\n              Pending Proses Klaim\n              <ion-note>19/07/2018</ion-note> </ion-col>\n              <ion-col>\n                <ion-icon name="checkmark" style="float: right;"></ion-icon>\n              </ion-col>\n            </ion-row>\n            </div>\n        \n            <div>\n                <ion-row>\n                    <ion-col>\n              Klaim Register\n              <ion-note>19/07/2018</ion-note> </ion-col>\n              <ion-col>\n                <ion-icon name="checkmark" style="float: right;"></ion-icon>\n              </ion-col>\n            </ion-row>\n            </div>\n        \n            <div>\n                <ion-row>\n                    <ion-col>\n              Hutang Klaim\n              <ion-note>19/07/2018</ion-note> </ion-col>\n              <ion-col>\n                <ion-icon name="checkmark" style="float: right;"></ion-icon>\n              </ion-col>\n            </ion-row>\n            </div>\n        \n            <div>\n                <ion-row>\n                    <ion-col>\n              Klaim Dibayar\n              <ion-note>19/07/2018</ion-note> </ion-col>\n              <ion-col>\n                <ion-icon name="checkmark" style="float: right;"></ion-icon>\n              </ion-col>\n            </ion-row>\n            </div>\n        </ion-item>\n      </ion-list>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\source\jamkrindo\src\pages\terjamindetail\terjamindetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_charts__["ChartsModule"]])
    ], TerjaminDetailPage);
    return TerjaminDetailPage;
}());

//
//# sourceMappingURL=terjamindetail.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(501);



// this is the magic wand
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_activity_service__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_trip_service__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_weather__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_checkout_trip_checkout_trip__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_register_register__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_klaim_klaim__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_penjamin_penjamin__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_terjamin_terjamin__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_terjamindetail_terjamindetail__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_mitra_mitra__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_charts__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_progress_bar_progress_bar__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__swimlane_ngx_datatable__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24__swimlane_ngx_datatable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























// import services
// end import services
// end import services
// import pages
// end import pages
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_checkout_trip_checkout_trip__["a" /* CheckoutTripPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_23__components_progress_bar_progress_bar__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_klaim_klaim__["a" /* KlaimPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_penjamin_penjamin__["a" /* PenjaminPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_terjamin_terjamin__["a" /* TerjaminPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_terjamindetail_terjamindetail__["a" /* TerjaminDetailPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_mitra_mitra__["a" /* MitraPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_24__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {
                    scrollPadding: false,
                    scrollAssist: true,
                    autoFocusAssist: false
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: 'jamkrindo',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
                __WEBPACK_IMPORTED_MODULE_22_ng2_charts__["ChartsModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_checkout_trip_checkout_trip__["a" /* CheckoutTripPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_klaim_klaim__["a" /* KlaimPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_penjamin_penjamin__["a" /* PenjaminPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_terjamin_terjamin__["a" /* TerjaminPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_terjamindetail_terjamindetail__["a" /* TerjaminDetailPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_mitra_mitra__["a" /* MitraPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_8__services_activity_service__["a" /* ActivityService */],
                __WEBPACK_IMPORTED_MODULE_9__services_trip_service__["a" /* TripService */],
                __WEBPACK_IMPORTED_MODULE_10__services_weather__["a" /* WeatherProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_activities__ = __webpack_require__(548);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivityService = /** @class */ (function () {
    function ActivityService() {
        this.activities = __WEBPACK_IMPORTED_MODULE_1__mock_activities__["a" /* ACTIVITIES */];
    }
    ActivityService.prototype.getAll = function () {
        return this.activities;
    };
    ActivityService.prototype.getItem = function (id) {
        for (var i = 0; i < this.activities.length; i++) {
            if (this.activities[i].id === parseInt(id)) {
                return this.activities[i];
            }
        }
        return null;
    };
    ActivityService.prototype.remove = function (item) {
        this.activities.splice(this.activities.indexOf(item), 1);
    };
    ActivityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ActivityService);
    return ActivityService;
}());

//# sourceMappingURL=activity-service.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTIVITIES; });
var ACTIVITIES = [];
//# sourceMappingURL=mock-activities.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TRIPS; });
var TRIPS = [
    {
        id: 1,
        name: "Copacabana Beach",
        price_adult: 60,
        price_child: 30,
        time: "12h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_1.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Rio de Janeiro, Brazil",
        images: [
            "assets/img/trip/thumb/trip_5.jpg",
            "assets/img/trip/thumb/trip_6.jpg",
            "assets/img/trip/thumb/trip_7.jpg",
            "assets/img/trip/thumb/trip_8.jpg",
        ],
        highlights: [
            "Numerous kiosks",
            "First in a string of Atlantic Ocean-facing beaches",
            "Sand is flanked by mountains in the background",
            "Swing in the turquoise waters",
            "Water Sports",
        ]
    },
    {
        id: 2,
        name: "Christ the Redeemer",
        price_adult: 90,
        price_child: 45,
        time: "4h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_2.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Rio de Janeiro, Brazil",
        images: [],
        highlights: []
    },
    {
        id: 3,
        name: "Ipiranga Museum",
        price_adult: 30,
        price_child: 15,
        time: "6h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_3.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "São Paulo, Brazil",
        images: [],
        highlights: []
    },
    {
        id: 4,
        name: "Fernando de Noronha",
        price_adult: 500,
        price_child: 250,
        time: "24h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_4.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Fernando de Noronha, Brazil",
        images: [],
        highlights: []
    }
];
//# sourceMappingURL=mock-trips.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_local_weather_local_weather__ = __webpack_require__(598);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, keyboard) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.keyboard = keyboard;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        this.appMenuItems = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'Local Weather', component: __WEBPACK_IMPORTED_MODULE_7__pages_local_weather_local_weather__["a" /* LocalWeatherPage */], icon: 'partly-sunny' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            //*** Control Splash Screen
            // this.splashScreen.show();
            // this.splashScreen.hide();
            //*** Control Status Bar
            _this.statusBar.styleDefault();
            _this.statusBar.overlaysWebView(false);
            //*** Control Keyboard
            _this.keyboard.disableScroll(true);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\source\jamkrindo\src\app\app.html"*/'<ion-menu side="left" id="authenticated" [content]="content">\n  <ion-header>\n    <ion-toolbar class="user-profile">\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n              <div class="user-avatar">\n                <img src="../assets/img/avatar.jpeg">\n              </div>\n          </ion-col>\n          <ion-col padding-top col-8>\n            <h2 ion-text class="no-margin bold text-white">\n              João Firmino\n            </h2>\n            <span ion-text color="light">Customer</span>\n          </ion-col>\n        </ion-row>\n\n        <ion-row no-padding class="other-data">\n          <ion-col no-padding class="column">\n            <button ion-button icon-left small full color="light" menuClose disabled>\n              <ion-icon name="contact"></ion-icon>\n              Edit Profile\n            </button>\n          </ion-col>\n          <ion-col no-padding class="column">\n            <button ion-button icon-left small full color="light" menuClose (click)="logout()">\n              <ion-icon name="log-out"></ion-icon>\n              Log Out\n            </button>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content color="primary">\n\n    <ion-list class="user-list">\n      <button ion-item menuClose class="text-1x" *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n        <ion-icon item-left [name]="menuItem.icon" color="primary"></ion-icon>\n        <span ion-text color="primary">{{menuItem.title}}</span>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"D:\source\jamkrindo\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 281,
	"./af.js": 281,
	"./ar": 282,
	"./ar-dz": 283,
	"./ar-dz.js": 283,
	"./ar-kw": 284,
	"./ar-kw.js": 284,
	"./ar-ly": 285,
	"./ar-ly.js": 285,
	"./ar-ma": 286,
	"./ar-ma.js": 286,
	"./ar-sa": 287,
	"./ar-sa.js": 287,
	"./ar-tn": 288,
	"./ar-tn.js": 288,
	"./ar.js": 282,
	"./az": 289,
	"./az.js": 289,
	"./be": 290,
	"./be.js": 290,
	"./bg": 291,
	"./bg.js": 291,
	"./bm": 292,
	"./bm.js": 292,
	"./bn": 293,
	"./bn.js": 293,
	"./bo": 294,
	"./bo.js": 294,
	"./br": 295,
	"./br.js": 295,
	"./bs": 296,
	"./bs.js": 296,
	"./ca": 297,
	"./ca.js": 297,
	"./cs": 298,
	"./cs.js": 298,
	"./cv": 299,
	"./cv.js": 299,
	"./cy": 300,
	"./cy.js": 300,
	"./da": 301,
	"./da.js": 301,
	"./de": 302,
	"./de-at": 303,
	"./de-at.js": 303,
	"./de-ch": 304,
	"./de-ch.js": 304,
	"./de.js": 302,
	"./dv": 305,
	"./dv.js": 305,
	"./el": 306,
	"./el.js": 306,
	"./en-au": 307,
	"./en-au.js": 307,
	"./en-ca": 308,
	"./en-ca.js": 308,
	"./en-gb": 309,
	"./en-gb.js": 309,
	"./en-ie": 310,
	"./en-ie.js": 310,
	"./en-il": 311,
	"./en-il.js": 311,
	"./en-nz": 312,
	"./en-nz.js": 312,
	"./eo": 313,
	"./eo.js": 313,
	"./es": 314,
	"./es-do": 315,
	"./es-do.js": 315,
	"./es-us": 316,
	"./es-us.js": 316,
	"./es.js": 314,
	"./et": 317,
	"./et.js": 317,
	"./eu": 318,
	"./eu.js": 318,
	"./fa": 319,
	"./fa.js": 319,
	"./fi": 320,
	"./fi.js": 320,
	"./fo": 321,
	"./fo.js": 321,
	"./fr": 322,
	"./fr-ca": 323,
	"./fr-ca.js": 323,
	"./fr-ch": 324,
	"./fr-ch.js": 324,
	"./fr.js": 322,
	"./fy": 325,
	"./fy.js": 325,
	"./gd": 326,
	"./gd.js": 326,
	"./gl": 327,
	"./gl.js": 327,
	"./gom-latn": 328,
	"./gom-latn.js": 328,
	"./gu": 329,
	"./gu.js": 329,
	"./he": 330,
	"./he.js": 330,
	"./hi": 331,
	"./hi.js": 331,
	"./hr": 332,
	"./hr.js": 332,
	"./hu": 333,
	"./hu.js": 333,
	"./hy-am": 334,
	"./hy-am.js": 334,
	"./id": 335,
	"./id.js": 335,
	"./is": 336,
	"./is.js": 336,
	"./it": 337,
	"./it.js": 337,
	"./ja": 338,
	"./ja.js": 338,
	"./jv": 339,
	"./jv.js": 339,
	"./ka": 340,
	"./ka.js": 340,
	"./kk": 341,
	"./kk.js": 341,
	"./km": 342,
	"./km.js": 342,
	"./kn": 343,
	"./kn.js": 343,
	"./ko": 344,
	"./ko.js": 344,
	"./ky": 345,
	"./ky.js": 345,
	"./lb": 346,
	"./lb.js": 346,
	"./lo": 347,
	"./lo.js": 347,
	"./lt": 348,
	"./lt.js": 348,
	"./lv": 349,
	"./lv.js": 349,
	"./me": 350,
	"./me.js": 350,
	"./mi": 351,
	"./mi.js": 351,
	"./mk": 352,
	"./mk.js": 352,
	"./ml": 353,
	"./ml.js": 353,
	"./mn": 354,
	"./mn.js": 354,
	"./mr": 355,
	"./mr.js": 355,
	"./ms": 356,
	"./ms-my": 357,
	"./ms-my.js": 357,
	"./ms.js": 356,
	"./mt": 358,
	"./mt.js": 358,
	"./my": 359,
	"./my.js": 359,
	"./nb": 360,
	"./nb.js": 360,
	"./ne": 361,
	"./ne.js": 361,
	"./nl": 362,
	"./nl-be": 363,
	"./nl-be.js": 363,
	"./nl.js": 362,
	"./nn": 364,
	"./nn.js": 364,
	"./pa-in": 365,
	"./pa-in.js": 365,
	"./pl": 366,
	"./pl.js": 366,
	"./pt": 367,
	"./pt-br": 368,
	"./pt-br.js": 368,
	"./pt.js": 367,
	"./ro": 369,
	"./ro.js": 369,
	"./ru": 370,
	"./ru.js": 370,
	"./sd": 371,
	"./sd.js": 371,
	"./se": 372,
	"./se.js": 372,
	"./si": 373,
	"./si.js": 373,
	"./sk": 374,
	"./sk.js": 374,
	"./sl": 375,
	"./sl.js": 375,
	"./sq": 376,
	"./sq.js": 376,
	"./sr": 377,
	"./sr-cyrl": 378,
	"./sr-cyrl.js": 378,
	"./sr.js": 377,
	"./ss": 379,
	"./ss.js": 379,
	"./sv": 380,
	"./sv.js": 380,
	"./sw": 381,
	"./sw.js": 381,
	"./ta": 382,
	"./ta.js": 382,
	"./te": 383,
	"./te.js": 383,
	"./tet": 384,
	"./tet.js": 384,
	"./tg": 385,
	"./tg.js": 385,
	"./th": 386,
	"./th.js": 386,
	"./tl-ph": 387,
	"./tl-ph.js": 387,
	"./tlh": 388,
	"./tlh.js": 388,
	"./tr": 389,
	"./tr.js": 389,
	"./tzl": 390,
	"./tzl.js": 390,
	"./tzm": 391,
	"./tzm-latn": 392,
	"./tzm-latn.js": 392,
	"./tzm.js": 391,
	"./ug-cn": 393,
	"./ug-cn.js": 393,
	"./uk": 394,
	"./uk.js": 394,
	"./ur": 395,
	"./ur.js": 395,
	"./uz": 396,
	"./uz-latn": 397,
	"./uz-latn.js": 397,
	"./uz.js": 396,
	"./vi": 398,
	"./vi.js": 398,
	"./x-pseudo": 399,
	"./x-pseudo.js": 399,
	"./yo": 400,
	"./yo.js": 400,
	"./zh-cn": 401,
	"./zh-cn.js": 401,
	"./zh-hk": 402,
	"./zh-hk.js": 402,
	"./zh-tw": 403,
	"./zh-tw.js": 403
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 579;

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalWeatherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_weather__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HttpErrorResponse } from '@angular/common/http';
var LocalWeatherPage = /** @class */ (function () {
    function LocalWeatherPage(navCtrl, weatherProvider, storage) {
        this.navCtrl = navCtrl;
        this.weatherProvider = weatherProvider;
        this.storage = storage;
        this.locationList = [
            { city: 'Los Angeles', state: 'CA' },
            { city: 'Miami', state: 'FL' },
            { city: 'New York', state: 'NY' },
            { city: 'Seattle', state: 'WA' }
        ];
    }
    LocalWeatherPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('location').then(function (val) {
            if (val != null) {
                _this.location = JSON.parse(val);
            }
            else {
                _this.location = {
                    state: 'NY',
                    city: 'New York'
                };
            }
            _this.getWeather(_this.location);
        });
    };
    LocalWeatherPage.prototype.getWeather = function (location) {
        var _this = this;
        if (typeof location === 'string') {
            this.location = JSON.parse(location);
            console.log(this.location);
        }
        else {
            this.location = location;
        }
        this.weatherProvider.getWeather(this.location.state, this.location.city).subscribe(function (weather) {
            _this.weather = weather.current_observation;
        });
    };
    LocalWeatherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-local-weather',template:/*ion-inline-start:"D:\source\jamkrindo\src\pages\local-weather\local-weather.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Local Weather</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="common-bg">\n  <ion-card class="full-width" no-margin margin-bottom>\n    <ion-card-content no-padding>\n\n      <ion-item>\n        <ion-label class="text-1x bold">Select Local</ion-label>\n        <ion-select [(ngModel)]="location" (ionChange)="getWeather(location)">\n          <ion-option *ngFor="let location of locationList" [value]="location">{{ location.city }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-grid class="card" padding *ngIf="weather">\n    <ion-row>\n        <ion-col width-50 offset-25>\n            <h2 class="location text-dark">{{weather.display_location.full}}</h2>\n            <div class="icon"><img src="{{weather.icon_url}}" alt="weather"></div>\n            <h3 class="desc">{{weather.weather}}</h3>\n            <h1 class="temp">{{weather.temp_c}}&deg;</h1>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col width-100>\n            <ion-list>\n\n                <ion-item>\n                <strong>Temp:</strong> {{weather.temperature_string}}\n                </ion-item>\n                 <ion-item>\n                    <strong>Relative Humidity:</strong> {{weather.relative_humidity}}\n                </ion-item>\n                 <ion-item>\n                    <strong>Dewpoint:</strong> {{weather.dewpoint_string}}\n                </ion-item>\n                 <ion-item>\n                    <strong>Visibility:</strong> {{weather.visibility_km}}\n                </ion-item>\n                <ion-item>\n                    <strong>Heat Index:</strong> {{weather.heat_index_string}}\n                </ion-item>\n\n            </ion-list>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\source\jamkrindo\src\pages\local-weather\local-weather.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_weather__["a" /* WeatherProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], LocalWeatherPage);
    return LocalWeatherPage;
}());

//# sourceMappingURL=local-weather.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutTripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckoutTripPage = /** @class */ (function () {
    function CheckoutTripPage(nav, tripService, loadingCtrl, toastCtrl) {
        this.nav = nav;
        this.tripService = tripService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        // number of adults
        this.adults = 2;
        // date
        this.date = new Date();
        this.paymethods = 'creditcard';
        // set sample data
        this.trip = tripService.getItem(1);
    }
    // process send button
    CheckoutTripPage.prototype.send = function () {
        var _this = this;
        // send booking info
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        // show message
        var toast = this.toastCtrl.create({
            showCloseButton: true,
            cssClass: 'profile-bg',
            message: 'Book Activity Success!',
            duration: 3000,
            position: 'bottom'
        });
        loader.present();
        setTimeout(function () {
            loader.dismiss();
            toast.present();
            // back to home page
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, 3000);
    };
    CheckoutTripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-checkout-trip',template:/*ion-inline-start:"D:\source\jamkrindo\src\pages\checkout-trip\checkout-trip.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Activity Checkout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="checkout-trip common-bg">\n  <!--trip information-->\n  <div class="trip-info card round">\n    <div class="trip-image border-bottom" [ngStyle]="{\'background-image\': \'url(\' + trip.thumb + \')\'}"></div>\n    <ion-grid padding>\n      <ion-row>\n        <ion-col width-66>\n          <h5 ion-text color="primary">{{ trip.name }}</h5>\n          <div>\n            <span class="bold">{{ trip.sub_name }}</span>\n            <br/>\n            <span ion-text color="dark">{{ adults }} Adults</span>\n          </div>\n          <div margin-top>\n            <span ion-text color="dark">{{ date | date: \'EEE, MMM dd\' }}</span>\n            <br/>\n            <span ion-text>{{ trip.location }}</span>\n          </div>\n          <div margin-top>\n            <ion-icon name="checkmark" class="text-green" *ngIf="trip.free_cancellation"></ion-icon>\n            <span ion-text *ngIf="trip.free_cancellation">Free cancellation</span>\n          </div>\n        </ion-col>\n        <ion-col col-4>\n          <span ion-text>Total with Tax</span>\n          <h5 ion-text color="primary" class="bold" no-margin>{{ trip.price_adult * adults | currency:\'USD\':true }}</h5>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n    <!--more info-->\n  <h5>Guest Details</h5>\n  <div class="card round" margin-top>\n\n    <ion-list no-margin>\n      <ion-item class="primary-bg">\n        <ion-avatar item-start>\n          <img src="assets/img/avatar.jpeg">\n        </ion-avatar>\n        <h2 ion-text class="text-white bold">João Firmino</h2>\n        <p ion-text class="text-secondary bold">User</p>\n      </ion-item>\n    </ion-list>\n\n    <div padding>\n      <h5 ion-text color="secondary">Other Guests</h5>\n\n      <ion-item no-padding>\n        <ion-label color="dark" stacked>Adult 1 Name:</ion-label>\n        <ion-input type="text" placeholder="Ex. Joe Doe" value=""></ion-input>\n      </ion-item>\n      <ion-item no-padding>\n        <ion-label color="dark" stacked>Child 1 Name:</ion-label>\n        <ion-input type="text" placeholder="Ex. Joe Doe" value=""></ion-input>\n      </ion-item>\n    </div>\n  </div>\n\n  <!--payment info-->\n  <h5>Payment Methods</h5>\n  <ion-segment color="secondary" [(ngModel)]="paymethods">\n    <ion-segment-button value="creditcard" >\n      Credit card\n    </ion-segment-button>\n    <ion-segment-button value="paypal">\n      PayPal\n    </ion-segment-button>\n  </ion-segment>\n\n  <div class="card round" margin-top margin-bottom>\n\n    <div [ngSwitch]="paymethods">\n      <ion-grid *ngSwitchCase="\'creditcard\'" padding>\n        <ion-row>\n          <ion-col no-padding text-center>\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojMTU2NUMwOyIgZD0iTSA0NSAzNSBDIDQ1IDM3LjIxMDkzOCA0My4yMTA5MzggMzkgNDEgMzkgTCA3IDM5IEMgNC43ODkwNjMgMzkgMyAzNy4yMTA5MzggMyAzNSBMIDMgMTMgQyAzIDEwLjc4OTA2MyA0Ljc4OTA2MyA5IDcgOSBMIDQxIDkgQyA0My4yMTA5MzggOSA0NSAxMC43ODkwNjMgNDUgMTMgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGRkZGRjsiIGQ9Ik0gMTUuMTg3NSAxOSBMIDEyLjU1ODU5NCAyNi44MzIwMzEgQyAxMi41NTg1OTQgMjYuODMyMDMxIDExLjg5NDUzMSAyMy41MTk1MzEgMTEuODI4MTI1IDIzLjEwMTU2MyBDIDEwLjMzMjAzMSAxOS42OTE0MDYgOC4xMjUgMTkuODgyODEzIDguMTI1IDE5Ljg4MjgxMyBMIDEwLjcyNjU2MyAzMCBMIDEwLjcyNjU2MyAyOS45OTYwOTQgTCAxMy44ODY3MTkgMjkuOTk2MDk0IEwgMTguMjU3ODEzIDE5IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiNGRkZGRkY7IiBkPSJNIDE3LjY4NzUgMzAgTCAyMC41NTg1OTQgMzAgTCAyMi4yOTY4NzUgMTkgTCAxOS4zOTA2MjUgMTkgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGRkZGRjsiIGQ9Ik0gMzguMDA3ODEzIDE5IEwgMzQuOTg4MjgxIDE5IEwgMzAuMjc3MzQ0IDMwIEwgMzMuMTI4OTA2IDMwIEwgMzMuNzE4NzUgMjguNDI5Njg4IEwgMzcuMzEyNSAyOC40Mjk2ODggTCAzNy42MTcxODggMzAgTCA0MC4yMzA0NjkgMzAgWiBNIDM0LjUxMTcxOSAyNi4zMjgxMjUgTCAzNi4wNzQyMTkgMjIuMTcxODc1IEwgMzYuODk0NTMxIDI2LjMyODEyNSBaICIvPjxwYXRoIHN0eWxlPSIgZmlsbDojRkZGRkZGOyIgZD0iTSAyNi4zNjcxODggMjIuMjA3MDMxIEMgMjYuMzY3MTg4IDIxLjYwMTU2MyAyNi44NjcxODggMjEuMTQ4NDM4IDI4LjI5Njg3NSAyMS4xNDg0MzggQyAyOS4yMjI2NTYgMjEuMTQ4NDM4IDMwLjI4NTE1NiAyMS44MjQyMTkgMzAuMjg1MTU2IDIxLjgyNDIxOSBMIDMwLjc1MzkwNiAxOS41MTU2MjUgQyAzMC43NTM5MDYgMTkuNTE1NjI1IDI5LjM5NDUzMSAxOSAyOC4wNjI1IDE5IEMgMjUuMDQyOTY5IDE5IDIzLjQ4NDM3NSAyMC40NDE0MDYgMjMuNDg0Mzc1IDIyLjI2OTUzMSBDIDIzLjQ4NDM3NSAyNS41NzgxMjUgMjcuNDY0ODQ0IDI1LjEyNSAyNy40NjQ4NDQgMjYuODIwMzEzIEMgMjcuNDY0ODQ0IDI3LjExMzI4MSAyNy4yMzQzNzUgMjcuNzg1MTU2IDI1LjU3NDIxOSAyNy43ODUxNTYgQyAyMy45MTQwNjMgMjcuNzg1MTU2IDIyLjgxNjQwNiAyNy4xNzU3ODEgMjIuODE2NDA2IDI3LjE3NTc4MSBMIDIyLjMyMDMxMyAyOS4zOTQ1MzEgQyAyMi4zMjAzMTMgMjkuMzk0NTMxIDIzLjM4NjcxOSAzMCAyNS40Mzc1IDMwIEMgMjcuNDk2MDk0IDMwIDMwLjM1NTQ2OSAyOC40NjA5MzggMzAuMzU1NDY5IDI2LjI0NjA5NCBDIDMwLjM1NTQ2OSAyMy41ODU5MzggMjYuMzY3MTg4IDIzLjM5NDUzMSAyNi4zNjcxODggMjIuMjA3MDMxIFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiNGRkMxMDc7IiBkPSJNIDEyLjIxMDkzOCAyNC45NDUzMTMgTCAxMS4yNDYwOTQgMjAuMTk1MzEzIEMgMTEuMjQ2MDk0IDIwLjE5NTMxMyAxMC44MDg1OTQgMTkuMTY3OTY5IDkuNjcxODc1IDE5LjE2Nzk2OSBDIDguNTM1MTU2IDE5LjE2Nzk2OSA1LjIzNDM3NSAxOS4xNjc5NjkgNS4yMzQzNzUgMTkuMTY3OTY5IEMgNS4yMzQzNzUgMTkuMTY3OTY5IDEwLjg5NDUzMSAyMC44Mzk4NDQgMTIuMjEwOTM4IDI0Ljk0NTMxMyBaICIvPjwvZz48L3N2Zz4=" alt="Visa" />\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojM0Y1MUI1OyIgZD0iTSA0NSAzNSBDIDQ1IDM3LjIxMDkzOCA0My4yMTA5MzggMzkgNDEgMzkgTCA3IDM5IEMgNC43ODkwNjMgMzkgMyAzNy4yMTA5MzggMyAzNSBMIDMgMTMgQyAzIDEwLjc4OTA2MyA0Ljc4OTA2MyA5IDcgOSBMIDQxIDkgQyA0My4yMTA5MzggOSA0NSAxMC43ODkwNjMgNDUgMTMgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGQzEwNzsiIGQ9Ik0gNDAgMjQgQyA0MCAyOS41MjM0MzggMzUuNTIzNDM4IDM0IDMwIDM0IEMgMjQuNDc2NTYzIDM0IDIwIDI5LjUyMzQzOCAyMCAyNCBDIDIwIDE4LjQ3NjU2MyAyNC40NzY1NjMgMTQgMzAgMTQgQyAzNS41MjM0MzggMTQgNDAgMTguNDc2NTYzIDQwIDI0IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiNGRjNEMDA7IiBkPSJNIDIyLjAxNTYyNSAzMCBDIDIxLjU1MDc4MSAyOS4zODI4MTMgMjEuMTUyMzQ0IDI4LjcxNDg0NCAyMC44Mzk4NDQgMjggTCAyNi4xNjQwNjMgMjggQyAyNi40NDE0MDYgMjcuMzYzMjgxIDI2LjY2MDE1NiAyNi42OTUzMTMgMjYuODAwNzgxIDI2IEwgMjAuMjAzMTI1IDI2IEMgMjAuMDcwMzEzIDI1LjM1NTQ2OSAyMCAyNC42ODc1IDIwIDI0IEwgMjcgMjQgQyAyNyAyMy4zMTI1IDI2LjkyOTY4OCAyMi42NDQ1MzEgMjYuODAwNzgxIDIyIEwgMjAuMTk5MjE5IDIyIEMgMjAuMzQzNzUgMjEuMzA0Njg4IDIwLjU1ODU5NCAyMC42MzY3MTkgMjAuODM5ODQ0IDIwIEwgMjYuMTY0MDYzIDIwIEMgMjUuODUxNTYzIDE5LjI4NTE1NiAyNS40NTMxMjUgMTguNjE3MTg4IDI0Ljk4ODI4MSAxOCBMIDIyLjAxNTYyNSAxOCBDIDIyLjQ0OTIxOSAxNy40MjE4NzUgMjIuOTQ1MzEzIDE2Ljg3ODkwNiAyMy40OTYwOTQgMTYuNDA2MjUgQyAyMS43NDYwOTQgMTQuOTEwMTU2IDE5LjQ4MDQ2OSAxNCAxNyAxNCBDIDExLjQ3NjU2MyAxNCA3IDE4LjQ3NjU2MyA3IDI0IEMgNyAyOS41MjM0MzggMTEuNDc2NTYzIDM0IDE3IDM0IEMgMjAuMjY5NTMxIDM0IDIzLjE2MDE1NiAzMi40MjU3ODEgMjQuOTg0Mzc1IDMwIFogIi8+PC9nPjwvc3ZnPg==" alt="mastercard">\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojRTFFN0VBOyIgZD0iTSA0NSAzNSBDIDQ1IDM3LjE5OTIxOSA0My4xOTkyMTkgMzkgNDEgMzkgTCA3IDM5IEMgNC44MDA3ODEgMzkgMyAzNy4xOTkyMTkgMyAzNSBMIDMgMTMgQyAzIDEwLjgwMDc4MSA0LjgwMDc4MSA5IDcgOSBMIDQxIDkgQyA0My4xOTkyMTkgOSA0NSAxMC44MDA3ODEgNDUgMTMgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGNkQwMDsiIGQ9Ik0gNDUgMzUgQyA0NSAzNy4xOTkyMTkgNDMuMTk5MjE5IDM5IDQxIDM5IEwgMTYgMzkgQyAxNiAzOSAzOS42MDE1NjMgMzUuMTk5MjE5IDQ1IDI0IFogTSAyMiAyNCBDIDIyIDI1LjY5OTIxOSAyMy4zMDA3ODEgMjcgMjUgMjcgQyAyNi42OTkyMTkgMjcgMjggMjUuNjk5MjE5IDI4IDI0IEMgMjggMjIuMzAwNzgxIDI2LjY5OTIxOSAyMSAyNSAyMSBDIDIzLjMwMDc4MSAyMSAyMiAyMi4zMDA3ODEgMjIgMjQgWiAiLz48cGF0aCBzdHlsZT0iICIgZD0iTSAxMS4xOTkyMTkgMjEgTCAxMi4zMDA3ODEgMjEgTCAxMi4zMDA3ODEgMjcgTCAxMS4xOTkyMTkgMjcgWiBNIDE3LjE5OTIxOSAyNCBDIDE3LjE5OTIxOSAyNS42OTkyMTkgMTguNSAyNyAyMC4xOTkyMTkgMjcgQyAyMC42OTkyMTkgMjcgMjEuMTAxNTYzIDI2Ljg5ODQzOCAyMS42MDE1NjMgMjYuNjk5MjE5IEwgMjEuNjAxNTYzIDI1LjM5ODQzOCBDIDIxLjE5OTIxOSAyNS44MDA3ODEgMjAuODAwNzgxIDI2IDIwLjE5OTIxOSAyNiBDIDE5LjEwMTU2MyAyNiAxOC4zMDA3ODEgMjUuMTk5MjE5IDE4LjMwMDc4MSAyNCBDIDE4LjMwMDc4MSAyMi44OTg0MzggMTkuMTAxNTYzIDIyIDIwLjE5OTIxOSAyMiBDIDIwLjY5OTIxOSAyMiAyMS4xMDE1NjMgMjIuMTk5MjE5IDIxLjYwMTU2MyAyMi42MDE1NjMgTCAyMS42MDE1NjMgMjEuMzAwNzgxIEMgMjEuMTAxNTYzIDIxLjEwMTU2MyAyMC42OTkyMTkgMjAuODk4NDM4IDIwLjE5OTIxOSAyMC44OTg0MzggQyAxOC41IDIxIDE3LjE5OTIxOSAyMi4zOTg0MzggMTcuMTk5MjE5IDI0IFogTSAzMC42MDE1NjMgMjQuODk4NDM4IEwgMjkgMjEgTCAyNy44MDA3ODEgMjEgTCAzMC4zMDA3ODEgMjcgTCAzMC44OTg0MzggMjcgTCAzMy4zOTg0MzggMjEgTCAzMi4xOTkyMTkgMjEgWiBNIDMzLjg5ODQzOCAyNyBMIDM3LjEwMTU2MyAyNyBMIDM3LjEwMTU2MyAyNiBMIDM1IDI2IEwgMzUgMjQuMzk4NDM4IEwgMzcgMjQuMzk4NDM4IEwgMzcgMjMuMzk4NDM4IEwgMzUgMjMuMzk4NDM4IEwgMzUgMjIgTCAzNy4xMDE1NjMgMjIgTCAzNy4xMDE1NjMgMjEgTCAzMy44OTg0MzggMjEgWiBNIDQxLjUgMjIuODAwNzgxIEMgNDEuNSAyMS42OTkyMTkgNDAuODAwNzgxIDIxIDM5LjUgMjEgTCAzNy44MDA3ODEgMjEgTCAzNy44MDA3ODEgMjcgTCAzOC44OTg0MzggMjcgTCAzOC44OTg0MzggMjQuNjAxNTYzIEwgMzkgMjQuNjAxNTYzIEwgNDAuNjAxNTYzIDI3IEwgNDIgMjcgTCA0MC4xOTkyMTkgMjQuNSBDIDQxIDI0LjMwMDc4MSA0MS41IDIzLjY5OTIxOSA0MS41IDIyLjgwMDc4MSBaIE0gMzkuMTk5MjE5IDIzLjgwMDc4MSBMIDM4Ljg5ODQzOCAyMy44MDA3ODEgTCAzOC44OTg0MzggMjIgTCAzOS4xOTkyMTkgMjIgQyAzOS44OTg0MzggMjIgNDAuMzAwNzgxIDIyLjMwMDc4MSA0MC4zMDA3ODEgMjIuODk4NDM4IEMgNDAuMzAwNzgxIDIzLjM5ODQzOCA0MCAyMy44MDA3ODEgMzkuMTk5MjE5IDIzLjgwMDc4MSBaIE0gNy42OTkyMTkgMjEgTCA2IDIxIEwgNiAyNyBMIDcuNjAxNTYzIDI3IEMgMTAuMTAxNTYzIDI3IDEwLjY5OTIxOSAyNC44OTg0MzggMTAuNjk5MjE5IDI0IEMgMTAuODAwNzgxIDIyLjE5OTIxOSA5LjUgMjEgNy42OTkyMTkgMjEgWiBNIDcuMzk4NDM4IDI2IEwgNy4xMDE1NjMgMjYgTCA3LjEwMTU2MyAyMiBMIDcuNSAyMiBDIDkgMjIgOS42MDE1NjMgMjMgOS42MDE1NjMgMjQgQyA5LjYwMTU2MyAyNC4zOTg0MzggOS41IDI2IDcuMzk4NDM4IDI2IFogTSAxNS4zMDA3ODEgMjMuMzAwNzgxIEMgMTQuNjAxNTYzIDIzIDE0LjM5ODQzOCAyMi44OTg0MzggMTQuMzk4NDM4IDIyLjYwMTU2MyBDIDE0LjM5ODQzOCAyMi4xOTkyMTkgMTQuODAwNzgxIDIyIDE1LjE5OTIxOSAyMiBDIDE1LjUgMjIgMTUuODAwNzgxIDIyLjEwMTU2MyAxNi4xMDE1NjMgMjIuNSBMIDE2LjY5OTIxOSAyMS42OTkyMTkgQyAxNi4xOTkyMTkgMjEuMTk5MjE5IDE1LjY5OTIxOSAyMSAxNSAyMSBDIDE0IDIxIDEzLjE5OTIxOSAyMS42OTkyMTkgMTMuMTk5MjE5IDIyLjY5OTIxOSBDIDEzLjE5OTIxOSAyMy41IDEzLjYwMTU2MyAyMy44OTg0MzggMTQuNjAxNTYzIDI0LjMwMDc4MSBDIDE1LjE5OTIxOSAyNC41IDE1LjY5OTIxOSAyNC42OTkyMTkgMTUuNjk5MjE5IDI1LjE5OTIxOSBDIDE1LjY5OTIxOSAyNS42OTkyMTkgMTUuMzAwNzgxIDI2IDE0LjgwMDc4MSAyNiBDIDE0LjMwMDc4MSAyNiAxMy44MDA3ODEgMjUuNjk5MjE5IDEzLjYwMTU2MyAyNS4xOTkyMTkgTCAxMi44OTg0MzggMjUuODk4NDM4IEMgMTMuMzk4NDM4IDI2LjY5OTIxOSAxNCAyNyAxNC44OTg0MzggMjcgQyAxNi4xMDE1NjMgMjcgMTYuODk4NDM4IDI2LjE5OTIxOSAxNi44OTg0MzggMjUuMTAxNTYzIEMgMTYuODk4NDM4IDI0LjE5OTIxOSAxNi41IDIzLjgwMDc4MSAxNS4zMDA3ODEgMjMuMzAwNzgxIFogIi8+PC9nPjwvc3ZnPg==" alt="discover">\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNTIgMjUyIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwyNTJ2LTI1MmgyNTJ2MjUyeiIgZmlsbD0ibm9uZSIvPjxnPjxnIGlkPSJzdXJmYWNlMSI+PHBhdGggZD0iTTIzNi4yNSwxODMuNzVjMCwxMS42MDc0MiAtOS4zOTI1OCwyMSAtMjEsMjFoLTE3OC41Yy0xMS42MDc0MiwwIC0yMSwtOS4zOTI1OCAtMjEsLTIxdi0xMTUuNWMwLC0xMS42MDc0MiA5LjM5MjU4LC0yMSAyMSwtMjFoMTc4LjVjMTEuNjA3NDIsMCAyMSw5LjM5MjU4IDIxLDIxeiIgZmlsbD0iIzE2YTA4NSIvPjxwYXRoIGQ9Ik0xMTYuODMzMDEsMTA1bC0xMS4wOTQ3MywyNC41ODg4N2wtMTEuMDMzMiwtMjQuNTg4ODdoLTE0LjE1MDM5djM1LjMxNDQ2bC0xNS43NzA1MSwtMzUuMzE0NDZoLTExLjkzNTU1bC0xNi4wOTg2MywzNi42NDc0Nmg5LjUzNjEzbDMuNTA2ODQsLTguMTgyNjJoMTguMDI2MzdsMy41ODg4Nyw4LjE4MjYyaDE4LjE5MDQzdi0yNy4yMTM4N2wxMi4wNTg1OSwyNy4yMTM4N2g4LjIwMzEzbDEyLjM0NTcxLC0yNi43NDIxOXYyNi43NDIxOWg5LjA0Mzk0di0zNi42NDc0NnpNNTMuMjE3NzcsMTI1LjU0ODgzbDUuMzczMDQsLTEyLjc5Njg3bDUuNTk4NjQsMTIuNzk2ODh6IiBmaWxsPSIjZmZmZmZmIi8+PHBhdGggZD0iTTE5OC44ODQ3NywxMjIuOTIzODNsMTYuMzY1MjMsLTE3LjgyMTI5aC0xMS42NDg0NGwtMTAuNDU4OTgsMTEuMzYxMzNsLTEwLjEzMDg2LC0xMS40NjM4N2gtMzYuMDExNzJ2MzYuNjQ3NDZoMzQuODQyNzdsMTAuOTcxNjgsLTEyLjEyMDEybDEwLjcwNTA4LDEyLjIyMjY2aDExLjYwNzQyek0xNzcuMDY0NDYsMTMzLjk1NzAzaC0yMS4wNDEwMnYtNy4yMzkyNmgyMC4xMzg2N3YtNi45NTIxNWgtMjAuMTM4Njd2LTYuODcwMTJsMjIuMjA5OTYsMC4wNjE1Mmw4LjkwMDM5LDkuOTY2OHoiIGZpbGw9IiNmZmZmZmYiLz48L2c+PC9nPjwvZz48L3N2Zz4=" alt="Amex">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item no-padding>\n              <ion-input type="text" placeholder="Card Holder"></ion-input>\n<!--               <ion-icon name="person" item-end no-margin></ion-icon> -->\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item no-padding>\n              <ion-input placeholder="Card Number" type="number"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4>\n            <ion-item no-padding>\n              <ion-select placeholder="MM" class="max-width full-width">\n                <ion-option value="01">01</ion-option>\n                <ion-option value="02">02</ion-option>\n                <ion-option value="03">03</ion-option>\n                <ion-option value="04">04</ion-option>\n                <ion-option value="05">05</ion-option>\n                <ion-option value="06">06</ion-option>\n                <ion-option value="07">07</ion-option>\n                <ion-option value="08">08</ion-option>\n                <ion-option value="09">09</ion-option>\n                <ion-option value="10">10</ion-option>\n                <ion-option value="11">11</ion-option>\n                <ion-option value="12">12</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col col-4>\n            <ion-item no-padding>\n              <ion-select placeholder="YY" class="max-width full-width">\n                <ion-option value="19">19</ion-option>\n                <ion-option value="20">20</ion-option>\n                <ion-option value="21">21</ion-option>\n                <ion-option value="22">22</ion-option>\n                <ion-option value="23">23</ion-option>\n                <ion-option value="24">24</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col col-4>\n            <ion-item no-padding>\n              <ion-input placeholder="CVV" type="number"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid *ngSwitchCase="\'paypal\'" padding>\n        <ion-row>\n          <ion-col no-padding text-center>\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojMTU2NUMwOyIgZD0iTSAxOC42OTkyMTkgMTMuNzY1NjI1IEwgMTguNzAzMTI1IDEzLjc2OTUzMSBDIDE4LjgwODU5NCAxMy4zMjQyMTkgMTkuMTg3NSAxMyAxOS42NjAxNTYgMTMgTCAzMy4xMzI4MTMgMTMgQyAzMy4xNDg0MzggMTMgMzMuMTY0MDYzIDEyLjk5MjE4OCAzMy4xODM1OTQgMTIuOTkyMTg4IEMgMzIuODk0NTMxIDguMjE0ODQ0IDI4Ljg4NjcxOSA2IDI1LjM1MTU2MyA2IEwgMTEuODc4OTA2IDYgQyAxMS40MDIzNDQgNiAxMS4wMjczNDQgNi4zMzU5MzggMTAuOTIxODc1IDYuNzc3MzQ0IEwgMTAuOTE3OTY5IDYuNzczNDM4IEwgNS4wMjczNDQgMzMuODEyNSBMIDUuMDQyOTY5IDMzLjgxMjUgQyA1LjAyNzM0NCAzMy44Nzg5MDYgNS4wMDM5MDYgMzMuOTM3NSA1LjAwMzkwNiAzNC4wMDc4MTMgQyA1LjAwMzkwNiAzNC41NjI1IDUuNDQ5MjE5IDM1IDYuMDAzOTA2IDM1IEwgMTQuMDc0MjE5IDM1IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiMwMzlCRTU7IiBkPSJNIDMzLjE4MzU5NCAxMi45OTIxODggQyAzMy4yMzQzNzUgMTMuODcxMDk0IDMzLjE3OTY4OCAxNC44MjQyMTkgMzIuOTUzMTI1IDE1Ljg3NSBDIDMxLjY3MTg3NSAyMS44NzEwOTQgMjcuMDQyOTY5IDI0Ljk5MjE4OCAyMS4zMjAzMTMgMjQuOTkyMTg4IEMgMjEuMzIwMzEzIDI0Ljk5MjE4OCAxNy44NDc2NTYgMjQuOTkyMTg4IDE3LjAwNzgxMyAyNC45OTIxODggQyAxNi40ODQzNzUgMjQuOTkyMTg4IDE2LjIzODI4MSAyNS4yOTY4NzUgMTYuMTI1IDI1LjUzMTI1IEwgMTQuMzg2NzE5IDMzLjU3ODEyNSBMIDE0LjA4MjAzMSAzNS4wMDc4MTMgTCAxNC4wNzQyMTkgMzUuMDA3ODEzIEwgMTIuODEyNSA0MC44MDQ2ODggTCAxMi44MjQyMTkgNDAuODA0Njg4IEMgMTIuODEyNSA0MC44NzEwOTQgMTIuNzg1MTU2IDQwLjkyOTY4OCAxMi43ODUxNTYgNDEgQyAxMi43ODUxNTYgNDEuNTU0Njg4IDEzLjIzNDM3NSA0MiAxMy43ODUxNTYgNDIgTCAyMS4xMTcxODggNDIgTCAyMS4xMzI4MTMgNDEuOTg4MjgxIEMgMjEuNjA1NDY5IDQxLjk4NDM3NSAyMS45ODA0NjkgNDEuNjQ0NTMxIDIyLjA3ODEyNSA0MS4yMDMxMjUgTCAyMi4wOTM3NSA0MS4xODc1IEwgMjMuOTA2MjUgMzIuNzY5NTMxIEMgMjMuOTA2MjUgMzIuNzY5NTMxIDI0LjAzMTI1IDMxLjk2ODc1IDI0Ljg3ODkwNiAzMS45Njg3NSBDIDI1LjcyMjY1NiAzMS45Njg3NSAyOS4wNTQ2ODggMzEuOTY4NzUgMjkuMDU0Njg4IDMxLjk2ODc1IEMgMzQuNzc3MzQ0IDMxLjk2ODc1IDM5LjQ1NzAzMSAyOC44NjMyODEgNDAuNzM4MjgxIDIyLjg2NzE4OCBDIDQyLjE3OTY4OCAxNi4xMDU0NjkgMzcuMzU5Mzc1IDEzLjAxOTUzMSAzMy4xODM1OTQgMTIuOTkyMTg4IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiMyODM1OTM7IiBkPSJNIDE5LjY2MDE1NiAxMyBDIDE5LjE4NzUgMTMgMTguODA4NTk0IDEzLjMyNDIxOSAxOC43MDMxMjUgMTMuNzY5NTMxIEwgMTguNjk5MjE5IDEzLjc2NTYyNSBMIDE2LjEyNSAyNS41MzEyNSBDIDE2LjIzODI4MSAyNS4yOTY4NzUgMTYuNDg0Mzc1IDI0Ljk5MjE4OCAxNy4wMDM5MDYgMjQuOTkyMTg4IEMgMTcuODQ3NjU2IDI0Ljk5MjE4OCAyMS4yMzgyODEgMjQuOTkyMTg4IDIxLjIzODI4MSAyNC45OTIxODggQyAyNi45NjQ4NDQgMjQuOTkyMTg4IDMxLjY3MTg3NSAyMS44NzEwOTQgMzIuOTUzMTI1IDE1Ljg3ODkwNiBDIDMzLjE3OTY4OCAxNC44MjQyMTkgMzMuMjM0Mzc1IDEzLjg3MTA5NCAzMy4xODM1OTQgMTIuOTk2MDk0IEMgMzMuMTY0MDYzIDEyLjk5MjE4OCAzMy4xNDg0MzggMTMgMzMuMTMyODEzIDEzIFogIi8+PC9nPjwvc3ZnPg==" alt="paypal">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item no-padding>\n              <ion-input type="mail" placeholder="E-mail"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item no-padding>\n              <ion-input placeholder="Password" type="password"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n  </div>\n\n  <!--submit button-->\n  <button ion-button class="round" color="primary" margin-top full tappable (click)="send()">SEND</button>\n</ion-content>\n'/*ion-inline-end:"D:\source\jamkrindo\src\pages\checkout-trip\checkout-trip.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], CheckoutTripPage);
    return CheckoutTripPage;
}());

//# sourceMappingURL=checkout-trip.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
        console.log('Hello ProgressBarComponent Component');
        this.text = 'Hello World';
    }
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'progress-bar',template:/*ion-inline-start:"D:\source\jamkrindo\src\components\progress-bar\progress-bar.html"*/'<!-- Generated template for the ProgressBarComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"D:\source\jamkrindo\src\components\progress-bar\progress-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__klaim_klaim__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__penjamin_penjamin__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__terjamin_terjamin__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_chart_js__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { HttpClient } from '@angular/common/http';






var HomePage = /** @class */ (function () {
    function HomePage(storage, nav, popoverCtrl, chart) {
        this.storage = storage;
        this.nav = nav;
        this.popoverCtrl = popoverCtrl;
        this.chart = chart;
        // search condition
        this.search = {
            name: "",
            date: new Date().toISOString()
        };
        this.Segment = 'Progress';
        // chart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Pengajuan' },
            { data: [28, 48, 40, 19, 40, 27, 30], label: 'Pengajuan Di Setujui' }
        ];
        this.colors = [
            { backgroundColor: ["#53C396", "#53C396", "#53C396", "#53C396", "#53C396", "#53C396", "#53C396"] },
            { backgroundColor: ["#58A5E0", "#58A5E0", "#58A5E0", "#58A5E0", "#58A5E0", "#58A5E0", "#58A5E0"] }
        ];
        this.date = Date.now();
        this.temp = [];
        this.temp2 = [];
        this.params = [];
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
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // this.search.pickup = "Rio de Janeiro, Brazil";
        // this.search.dropOff = "Same as pickup";
        this.storage.get('pickup').then(function (val) {
            if (val === null) {
                _this.search.name = "";
            }
            else {
                _this.search.name = val;
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
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
                "no": "1",
                "mitra": "BRI",
                "terjamin": "30",
                "total": "3000000000"
            },
            {
                "no": "2",
                "mitra": "Mandiri",
                "terjamin": "29",
                "total": "2561528769"
            },
            {
                "no": "3",
                "mitra": "BNI",
                "terjamin": "28",
                "total": "2358378208"
            },
            {
                "no": "4",
                "mitra": "BII Maybank",
                "terjamin": "27",
                "total": "2032649732"
            },
            {
                "no": "5",
                "mitra": "Bank Jatim",
                "terjamin": "26",
                "total": "1923084239"
            },
            {
                "no": "6",
                "mitra": "BPD NTB",
                "terjamin": "25",
                "total": "1803297386"
            },
            {
                "no": "7",
                "mitra": "Bank Sinarmas",
                "terjamin": "20",
                "total": "1528637290"
            },
            {
                "no": "8",
                "mitra": "Bank Jabar",
                "terjamin": "19",
                "total": "1476883292"
            },
            {
                "no": "9",
                "mitra": "Bukopin",
                "terjamin": "18",
                "total": "1387129917"
            },
            {
                "no": "10",
                "mitra": "Mandiri Syariah",
                "terjamin": "15",
                "total": "927839263"
            },
            {
                "no": "11",
                "mitra": "BTPN",
                "terjamin": "14",
                "total": "827853285"
            },
            {
                "no": "12",
                "mitra": "BCA",
                "terjamin": "10",
                "total": "712879233"
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
                "no": "1",
                "nama_terjamin": "Panji Nurfirman",
                "mitra": "BRI",
                "total_pengajuan": "10082730"
            },
            {
                "no": "2",
                "nama_terjamin": "Fitri Fardia",
                "mitra": "Mandiri",
                "total_pengajuan": "9801298"
            },
            {
                "no": "3",
                "nama_terjamin": "Mario Stefano",
                "mitra": "BNI",
                "total_pengajuan": "9027308"
            },
            {
                "no": "4",
                "nama_terjamin": "Teopilus Sutjiana",
                "mitra": "BII Maybank",
                "total_pengajuan": "8781203"
            },
            {
                "no": "5",
                "nama_terjamin": "Bambang Karyadi",
                "mitra": "Bank Jatim",
                "total_pengajuan": "7182073"
            },
            {
                "no": "6",
                "nama_terjamin": "Sylvina Kwandou",
                "mitra": "BPD NTB",
                "total_pengajuan": "6782103"
            },
            {
                "no": "7",
                "nama_terjamin": "Rogers Hadikusuma",
                "mitra": "Bank Sinarmas",
                "total_pengajuan": "6219381"
            },
            {
                "no": "8",
                "nama_terjamin": "Daniel Yuwono",
                "mitra": "Bank Jabar",
                "total_pengajuan": "5871289"
            },
            {
                "no": "9",
                "nama_terjamin": "David Margahung",
                "mitra": "Bukopin",
                "total_pengajuan": "5619287"
            },
            {
                "no": "10",
                "nama_terjamin": "Kurniyati",
                "mitra": "Mandiri Syariah",
                "total_pengajuan": "5100921"
            },
            {
                "no": "11",
                "nama_terjamin": "Suwito Yaputera",
                "mitra": "BTPN",
                "total_pengajuan": "4102809"
            },
            {
                "no": "12",
                "nama_terjamin": "Herrik Sidarta",
                "mitra": "BCA",
                "total_pengajuan": "2093403"
            }
        ];
        this.temp2 = this.rows2;
    };
    // to go account page
    HomePage.prototype.goToAccount = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */]);
    };
    // events
    HomePage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    HomePage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    HomePage.prototype.randomize = function () {
        // Only Change 3 values
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40
        ];
        var clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
    };
    HomePage.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.mitra.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        // this.table.offset = 0;
    };
    HomePage.prototype.updateFilter2 = function (event) {
        var val2 = event.target.value.toLowerCase();
        // filter our data
        var temp2 = this.temp2.filter(function (d) {
            return d.nama_terjamin.toLowerCase().indexOf(val2) !== -1 || !val2;
        });
        // update the rows
        this.rows2 = temp2;
        // Whenever the filter changes, always go back to the first page
        // this.table.offset = 0;
    };
    HomePage.prototype.Klaim = function (event) {
        console.log("click");
        this.params.header = event;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__klaim_klaim__["a" /* KlaimPage */], this.params);
    };
    HomePage.prototype.penjamin = function (event) {
        this.params.header = event;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__penjamin_penjamin__["a" /* PenjaminPage */], this.params);
    };
    HomePage.prototype.terjamin = function (event) {
        this.params.header = event;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__terjamin_terjamin__["a" /* TerjaminPage */], this.params);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('progress'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "progress", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"D:\source\jamkrindo\src\pages\home\home.html"*/'<!-- -->\n<ion-header>\n  <ion-navbar color="primary">\n    <!-- <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button> -->\n    <!-- <ion-title>\n      <strong>Jamkrindo</strong>\n    </ion-title> -->\n    <img src="assets/icon/ionic3-ico.png" style="width: 40%;margin-left: 35%;">\n    <ion-buttons end>\n      <!-- <button ion-button tappable (click)="presentNotifications($event)">\n        <ion-icon name="notifications"></ion-icon>\n      </button> -->\n      <button ion-button tappable (click)="goToAccount()">\n        <ion-icon name="options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="animated fadeIn common-bg">\n\n  <ion-card no-margin margin-bottom class="full-width">\n  <div style="color: black;text-align: center; font-size: 12px;margin-bottom: 10px;">Jumlah Pengajuan VS Pengajuan Disetujui</div>\n  <div>\n    <div style="display: block">\n      <canvas baseChart\n              [datasets]="barChartData"\n              [labels]="barChartLabels"\n              [options]="barChartOptions"\n              [legend]="barChartLegend"\n              [chartType]="barChartType"\n              [colors]="colors"\n              (chartHover)="chartHovered($event)"\n              (chartClick)="chartClicked($event)"></canvas>\n    </div>\n    <!-- <button (click)="randomize()">Update</button> -->\n  </div>\n  </ion-card>\n\n    <ion-slides style="height: 20%;">\n      <ion-slide>\n        <ion-row>\n        <ion-col col-6>\n          <ion-card no-margin class="full-width" style="background-color:#42A6FA;height: 90px; ">\n            <!-- <ion-icon name="alarm" style="font-size: 10ch" item-left></ion-icon> -->\n            <img src="assets/icon/ic_rata-rata-pengajuan.png" style="width: 40px;margin-top: 22px">\n            <div style="color: white; margin-top: -45px; margin-left: 55px;text-align: center;font-size: 12px;">Rata-rata Process Bulan Ini</div>\n            <!-- <div style="color: white; margin-top: 15px; margin-left: 5px;text-align: center">Rata-rata Process Bulan Ini</div> -->\n            <div style="color: white; margin-left: 55px;text-align: center"><strong>14 Hari 16 Jam</strong></div>\n          </ion-card>\n        </ion-col>\n        <ion-col col-6>\n          <ion-card no-margin class="full-width" style="background-color:#1A9788;height: 90px; ">\n            <!-- <ion-icon name="contacts" style="font-size: 10ch" item-left></ion-icon> -->\n            <img src="assets/icon/ic_nasabah.png" style="width: 40px;margin-top: 30px">\n            <div style="color: white; margin-top: -35px; margin-left: 35px;text-align: center;font-size: 12px;">Jumlah Customer Aktif Bulan Ini</div>\n            <!-- <div style="color: white; margin-top: 15px; margin-left: 5px;text-align: center">Jumlah Customer Aktif Bulan Ini</div> -->\n            <div style="color: white; margin-left: 35px;text-align: center"><strong>330 Orang</strong></div>\n          </ion-card>\n        </ion-col>\n        </ion-row>\n      </ion-slide>\n      <ion-slide>\n        <ion-row>\n        <ion-col col-6>\n          <ion-card no-margin class="full-width" style="background-color:#D78E1E;height: 90px; ">\n            <!-- <ion-icon name="cash" style="font-size: 10ch" item-left></ion-icon> -->\n            <img src="assets/icon/ic_total-pengajuan-klaim.png" style="width: 40px;margin-top: 25px">\n            <div style="color: white; margin-top: -35px; margin-left: 35px;text-align: center;font-size: 12px;">Total Pengajuan Tahun Ini</div>\n            <!-- <div style="color: white; margin-top: 15px; margin-left: 5px;text-align: center">Total Pengajuan Tahun Ini</div> -->\n            <div style="color: white; margin-left: 35px;text-align: center"><strong>{{3442730483 | number}}</strong></div>\n          </ion-card>\n        </ion-col>\n        </ion-row>\n      </ion-slide>\n    </ion-slides>\n\n  <ion-segment [(ngModel)]="Segment">\n    <ion-segment-button value="Progress" style="font-size: 9px">Progress Status</ion-segment-button>\n    <ion-segment-button value="Mitra" style="font-size: 10px">Top 10 Mitra</ion-segment-button>\n    <ion-segment-button value="Terjamin" style="font-size: 10px"> Top 10 Terjamin</ion-segment-button>\n  </ion-segment>\n\n  <div class="segment-tab-menu" [ngSwitch]="Segment" style="margin-top: 10px;">  \n    <div [style.display]="Segment == \'Progress\' ? \'block\' : \'none\'">\n      <ion-item style="font-size: 12px;">\n        {{date | date: \'EEEE, dd MMMM yyyy HH:mm\'}}\n      </ion-item>\n      <ion-row>\n        <ion-col col-4>\n          <ion-card no-margin margin-bottom class="full-width full-height" (click)="Klaim(\'Klaim Dalam Proses\')">\n            <!-- <div class="num-header"> 1</div> -->\n            <!-- <ion-icon name="desktop" class="icon-at-home"></ion-icon> -->\n            <img src="assets/icon/ic_klaim dalam proses.png" style="width: 80%;margin-left: 10px">\n            <div style="text-align: center; font-size: 12px;">Klaim Dalam Proses</div>\n          </ion-card>\n        </ion-col>\n        <ion-col col-4>\n          <ion-card no-margin margin-bottom class="full-width full-height" (click)="Klaim(\'Pending Proses Klaim\')">\n            <!-- <div class="num-header"> 1</div> -->\n            <!-- <ion-icon name="timer" class="icon-at-home"></ion-icon> -->\n            <img src="assets/icon/ic_pending proses klaim.png" style="width: 80%;margin-left: 10px">\n            <div style="text-align: center; font-size: 12px;">Pending Proses Klaim</div>\n          </ion-card>\n        </ion-col>\n        <ion-col col-4>\n          <ion-card no-margin margin-bottom class="full-width full-height" (click)="Klaim(\'Klaim Register\')">\n            <!-- <div class="num-header"> 1</div> -->\n            <!-- <ion-icon name="briefcase" class="icon-at-home"></ion-icon> -->\n            <img src="assets/icon/ic_klaim register.png" style="width: 80%;margin-left: 10px">\n            <div style="text-align: center; font-size: 12px;">Klaim Register</div>\n          </ion-card>\n        </ion-col>\n      </ion-row>  \n\n      <ion-row>\n        <ion-col col-4>\n          <ion-card no-margin margin-bottom class="full-width full-height" (click)="Klaim(\'Hutang Klaim\')">\n            <!-- <div class="num-header"> 1</div> -->\n            <!-- <ion-icon name="analytics" class="icon-at-home"></ion-icon> -->\n            <img src="assets/icon/ic_hutang klaim.png" style="width: 80%;margin-left: 10px">\n            <div style="text-align: center; font-size: 12px;">Hutang Klaim</div>\n          </ion-card>\n        </ion-col>\n        <ion-col col-4>\n          <ion-card no-margin margin-bottom class="full-width full-height" (click)="Klaim(\'Klaim Dibayar\')">\n            <!-- <div class="num-header"> 1</div> -->\n            <!-- <ion-icon name="archive" class="icon-at-home"></ion-icon> -->\n            <img src="assets/icon/ic_klaim dibayar.png" style="width: 80%;margin-left: 10px">\n            <div style="text-align: center; font-size: 12px;">Klaim Dibayar</div>\n          </ion-card>\n        </ion-col>\n        <ion-col col-4>\n          <ion-card no-margin margin-bottom class="full-width full-height" (click)="Klaim(\'Selisih Dibayar Dan Banding Klaim\')">\n            <!-- <div class="num-header"> 1</div> -->\n            <!-- <ion-icon name="bookmarks" class="icon-at-home"></ion-icon> -->\n            <img src="assets/icon/ic_selisih bayar.png" style="width: 80%;margin-left: 10px">\n            <div style="text-align: center; font-size: 12px;">Selisih Dibayar Dan Banding Klaim</div>\n          </ion-card>\n        </ion-col>\n      </ion-row>  \n\n      <ion-row>\n        <ion-col col-4>\n          <ion-card no-margin margin-bottom class="full-width full-height" (click)="Klaim(\'Pending Bayar Klaim\')">\n            <!-- <div class="num-header"> 1</div> -->\n            <!-- <ion-icon name="calendar" class="icon-at-home"></ion-icon> -->\n            <img src="assets/icon/ic_pending bayar klaim.png" style="width: 80%;margin-left: 10px">\n            <div style="text-align: center; font-size: 12px;">Pending Bayar Klaim</div>\n          </ion-card>\n        </ion-col>\n        <ion-col col-4>\n          <ion-card no-margin margin-bottom class="full-width full-height" (click)="Klaim(\'Klaim Ditolak\')">\n            <!-- <div class="num-header"> 1</div> -->\n            <!-- <ion-icon name="close-circle" class="icon-at-home"></ion-icon> -->\n            <img src="assets/icon/ic_klaim ditolak.png" style="width: 80%;margin-left: 10px">\n            <div style="text-align: center; font-size: 12px;">Klaim Ditolak</div>\n          </ion-card>\n        </ion-col>\n        <ion-col col-4>\n          <ion-card no-margin margin-bottom class="full-width full-height" (click)="Klaim(\'Lain-lain\')">\n            <!-- <div class="num-header"> 1</div> -->\n            <!-- <ion-icon name="code-working" class="icon-at-home"></ion-icon> -->\n            <img src="assets/icon/ic_lain lain.png" style="width: 80%;margin-left: 10px">\n            <div style="text-align: center; font-size: 12px;">Lain-lain</div>\n          </ion-card>\n        </ion-col>\n      </ion-row> \n\n    </div>\n    <div [style.display]="Segment == \'Mitra\' ? \'block\' : \'none\'">\n      <ion-item tappable class="border-bottom">\n        <ion-icon name="search" color="primary" item-right></ion-icon>\n        <input type=\'text\' style=\'border: none;width: 100%;height: 50px;\' placeholder=\'Type to filter...\' (keyup)=\'updateFilter($event)\' />\n      </ion-item>\n      <div style="padding: 10px">\n        <strong>Top 10 {{Segment}} / Penerima Jaminan</strong>\n      </div>\n      <ngx-datatable\n        [sortType]="\'multi\'"\n        [headerHeight]="50"\n        [rowHeight]="50"\n        [rows]="rows"\n        [columnMode]="\'force\'"\n        [limit]="10"\n        [scrollbarH]="true"\n        style="color: black"\n        >\n        <ngx-datatable-column prop="no" name="No" [draggable]="false" width="30">\n          <ng-template let-value="value" ngx-datatable-cell-template>\n            {{value}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column prop="mitra" name="Mitra / Penerima Jaminan" [draggable]="false">\n          <ng-template let-value="value" ngx-datatable-cell-template>\n            {{value}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column prop="terjamin" name="Terjamin" [draggable]="false" width="55">\n          <ng-template let-value="value" ngx-datatable-cell-template>\n            {{value}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column prop="total" name="Total Pengajuan" [draggable]="false">\n          <ng-template let-value="value" ngx-datatable-cell-template>\n            {{value | number}}\n          </ng-template>\n        </ngx-datatable-column>\n      </ngx-datatable>\n\n      <button ion-button block color="secondary" (click)="penjamin(\'Daftar Mitra\')">Lihat Lainnya</button>\n    </div>\n    <div [style.display]="Segment == \'Terjamin\' ? \'block\' : \'none\'">\n    <ion-item tappable class="border-bottom">\n        <ion-icon name="search" color="primary" item-right></ion-icon>\n        <input type=\'text\' style=\'border: none;width: 100%;height: 50px;\' placeholder=\'Type to filter...\' (keyup)=\'updateFilter2($event)\' />\n      </ion-item>\n      <div style="padding: 10px">\n        <strong>Top 10 {{Segment}}</strong>\n      </div>\n      <ngx-datatable\n        [sortType]="\'multi\'"\n        [headerHeight]="50"\n        [rowHeight]="50"\n        [rows]="rows2"\n        [columnMode]="\'force\'"\n        [limit]="10"\n        [scrollbarH]="true"\n        style="color: black"\n        >\n        <ngx-datatable-column prop="no" name="No" [draggable]="false" width="30">\n          <ng-template let-value="value" ngx-datatable-cell-template>\n            {{value}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column prop="nama_terjamin" name="Nama Terjamin" [draggable]="false">\n          <ng-template let-value="value" ngx-datatable-cell-template>\n            {{value}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column prop="mitra" name="Penerima Jaminan" [draggable]="false">\n          <ng-template let-value="value" ngx-datatable-cell-template>\n            {{value}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column prop="total_pengajuan" name="Total Pengajuan" [draggable]="false">\n          <ng-template let-value="value" ngx-datatable-cell-template>\n            {{value | number}}\n          </ng-template>\n        </ngx-datatable-column>\n      </ngx-datatable>\n\n      <button ion-button block color="secondary" (click)="terjamin(\'Daftar Terjamin\')">Lihat Lainnya</button>\n    </div>    \n  </div>\n</ion-content>\n\n'/*ion-inline-end:"D:\source\jamkrindo\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_charts__["ChartsModule"]])
    ], HomePage);
    return HomePage;
}());

//
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(nav, forgotCtrl, menu, toastCtrl) {
        this.nav = nav;
        this.forgotCtrl = forgotCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.menu.swipeEnable(false);
    }
    // go to register page
    LoginPage.prototype.register = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    // login and go to home page
    LoginPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.forgotPass = function () {
        var _this = this;
        var forgot = this.forgotCtrl.create({
            title: 'Forgot Password?',
            message: "Enter you email address to send a reset link password.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email',
                    type: 'email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        console.log('Send clicked');
                        var toast = _this.toastCtrl.create({
                            message: 'Email was sended successfully',
                            duration: 3000,
                            position: 'top',
                            cssClass: 'dark-trans',
                            closeButtonText: 'OK',
                            showCloseButton: true
                        });
                        toast.present();
                    }
                }
            ]
        });
        forgot.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"D:\source\jamkrindo\src\pages\login\login.html"*/'<!-- -->\n<ion-content padding class="animated fadeIn login auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding-horizontal text-center class="animated fadeInDown">\n      <div class="logo"></div>\n      <!-- <h2 ion-text class="text-primary">\n        <strong>Ionic 3</strong> Start Theme\n      </h2> -->\n    </div>\n\n    <!-- Login form -->\n    <form class="list-form">\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n          Email\n        </ion-label>\n        <ion-input type="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          Password\n        </ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n    </form>\n\n    <p text-right ion-text color="secondary" tappable (click)="forgotPass()"><strong>Forgot Password?</strong></p>\n\n    <div>\n      <button ion-button icon-start block color="dark" tappable (click)="login()">\n        <ion-icon name="log-in"></ion-icon>\n        SIGN IN\n      </button>\n\n      <!-- <p text-center ion-text color="secondary">Or Sign in with:</p> -->\n\n      <!-- <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-facebook">\n              <ion-icon name="logo-facebook"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-twitter">\n              <ion-icon name="logo-twitter"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-gplus">\n              <ion-icon name="logo-googleplus"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid> -->\n\n    </div>\n\n\n    <!-- Other links -->\n    <div text-center margin-top>\n      <span ion-text color="secondary" tappable (click)="register()">New here? <strong>Sign up</strong></span>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\source\jamkrindo\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[496]);
//# sourceMappingURL=main.js.map