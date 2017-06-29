import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';


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
  private dadesViatge : {};
  private estacions:{};
  private viatges : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.viatges = navParams.get("viatges");
    this.estacions = {
    "manresa-alta": "Manresa Alta",
    "barcelona-palau-reial":"Barcelona - Palau Reial"
  };

    this.dadesViatge = {
      origen : "", 
      desti : ""
    }
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.dadesViatge["origen"] = this.estacions[this.viatges.dades.origen]
    this.dadesViatge["desti"]= this.estacions[this.viatges.dades.desti]
  }
}
