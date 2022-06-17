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
  blink_id: number = 76
  imageSrc: string = 'https://raw.githubusercontent.com/JeffVince/angular-ivy-jkpus9/master/src/assets/images/eye_state_00000.png';

  imageSrcFront: string = "https://raw.githubusercontent.com/JeffVince/angular-ivy-jkpus9/master/src/assets/images/eye_state_000";

  imageSrcEnd: string = ".png"

  blinkSrc: string = "https://raw.githubusercontent.com/JeffVince/angular-ivy-jkpus9/master/src/assets/blink/Blink_00076.png"

  blinkSrcFront: string = "https://raw.githubusercontent.com/JeffVince/angular-ivy-jkpus9/master/src/assets/blink/Blink_000"

  showEyeTracking: boolean = true;

  mouseMoved(event: MouseEvent) {
    if (this.showEyeTracking) {
      this.Mousex = event.clientX;
      this.MouseY = event.clientY;
      this.photo_id = 100-Math.trunc(63.6618 * Math.atan2(this.MouseY, this.Mousex));
      this.imageSrc = this.imageSrcFront + String(this.photo_id) + this.imageSrcEnd;
    }
  }

  async mouseClicked(event: MouseEvent) {
    this.showEyeTracking = !this.showEyeTracking;
    for (let i = 76; i < 86; i++)  {
      this.blinkSrc = this.blinkSrcFront + String(i) + this.imageSrcEnd;
      await new Promise(resolve => setTimeout(resolve, 5));
      console.log(this.blinkSrc);
    }
    this.showEyeTracking = !this.showEyeTracking;

  }


}
