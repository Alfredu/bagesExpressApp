import { Component } from '@angular/core';


import { NavController, LoadingController } from 'ionic-angular';

import {ViatgesPage} from '../viatges/viatges'

import {ViatgesService} from '../../providers/viatges-service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dades : any;
  constructor(public navCtrl: NavController, private viatgesService : ViatgesService, private loadingCtrl : LoadingController) {
    this.dades = {
      origen : "", 
      desti : ""
    };
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  buscaViatges(data:any){
    console.log(this.dades.origen);
    let loader = this.loadingCtrl.create({
      content: "Buscant viatges.."
    });

    loader.present().then(()=>{
      this.viatgesService.getViatges("manresa-alta", "barcelona-palau-reial", "02/04/2017").subscribe(response =>{
      loader.dismiss();
      this.navCtrl.push(ViatgesPage, {viatges : response});
    })})};
}
