import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonSearchbar,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {TarjetasHomeComponent} from "../../componentes/tarjetas-home/tarjetas-home.component";
import {addIcons} from "ionicons";
import {notificationsOutline} from "ionicons/icons";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, TarjetasHomeComponent, IonSearchbar, IonButton, IonIcon, IonButtons]
})
export class HomePage implements OnInit {

  constructor() {
    addIcons({
      'notifications-outline': notificationsOutline
    });
  }

  ngOnInit() {
  }

}
