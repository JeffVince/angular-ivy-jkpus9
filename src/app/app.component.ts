import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {

  Mousex: number = 0; 
  MouseY: number = 0;
  imageSrc: string = '../assets/image/eye-state-00000.png';

  mouseMoved(event: MouseEvent) {
    this.Mousex = event.clientX;
    this.MouseY = event.clientY;

    console.log(Math.trunc(63.6618 * Math.atan2(this.MouseY, this.Mousex)));

    

  }
}
