import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/*
  Generated class for the Viatges page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-viatges',
  templateUrl: 'viatges.html'
})
export class ViatgesPage {
  private viatges : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.viatges = navParams.get("viatges");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViatgesPage');
  }
}
