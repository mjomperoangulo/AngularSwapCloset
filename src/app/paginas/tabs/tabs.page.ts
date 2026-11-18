import { Component } from '@angular/core';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel, IonRouterLink, IonRouterOutlet,
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
  shirtOutline, bookOutline, pulseOutline, waterOutline, chatbubblesOutline, homeOutline, searchOutline,add,
  chatbubbleOutline
} from 'ionicons/icons';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  imports: [
    IonIcon,
    IonLabel,
    IonTabBar,
    IonTabButton,
    IonTabs,
  ]
})
export class TabsPage {
  constructor() {
    addIcons({
      homeOutline,
      searchOutline,
      chatbubbleOutline,
      personOutline,
      add
    });
  }
}
