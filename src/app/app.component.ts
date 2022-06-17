import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {

  Mousex: number = 0; 
  MouseY: number = 0;
  photo_id: number = 0;

  imageSrc: string = 'https://raw.githubusercontent.com/JeffVince/angular-ivy-jkpus9/master/src/assets/images/eye_state_00000.png';

  imageSrcFront: string = "https://raw.githubusercontent.com/JeffVince/angular-ivy-jkpus9/master/src/assets/images/eye_state_000";

  imageSrcEnd: string = ".png"

  showEyeTracking: boolean = true;

  mouseMoved(event: MouseEvent) {
    if (this.showEyeTracking) {
      this.Mousex = event.clientX;
      this.MouseY = event.clientY;
      this.photo_id = 100-Math.trunc(63.6618 * Math.atan2(this.MouseY, this.Mousex));
      this.imageSrc = this.imageSrcFront + String(this.photo_id) + this.imageSrcEnd;
    }
  }

  mouseClicked(event: MouseEvent) {
    this.showEyeTracking = !this.showEyeTracking;
    console.log("test");
  }


}
