import { Component } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import {
  library,
  playCircle,
  radio,
  search,
  personOutline,
  shirtOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonIcon,
    IonLabel,
    IonTab,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonTitle,
    IonToolbar
  ]
})
export class TabsPage {
  constructor() {
    addIcons({
      library,
      playCircle,
      radio,
      search,
      personOutline,
      shirtOutline
    });
  }
}
