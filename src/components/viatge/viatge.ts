import { Component, Input } from '@angular/core';

/*
  Generated class for the ViatgeComponent component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'viatge',
  templateUrl: 'viatge.html'
})
export class ViatgeComponent {
  @Input('viatge') viatge;
  @Input('dades') dades;
  text: string;

  constructor() {
    
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.dades);
  }

}
