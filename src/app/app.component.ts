import { Component } from '@angular/core';
import {IonApp, IonButton, IonRouterOutlet} from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet,IonButton],
})
export class AppComponent {
  constructor() {}


}
