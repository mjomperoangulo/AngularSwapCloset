import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons} from "ionicons";
import { notificationsOutline} from "ionicons/icons";
import {
  IonButton, IonButtons,
  IonContent,
  IonHeader, IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonRouterLink,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonRouterLink, RouterLink, IonList, IonItem, IonLabel, IonButtons, IonIcon]
})
export class PerfilPage implements OnInit {

  constructor() {
    addIcons ({notificationsOutline});
  }

  ngOnInit() {}



}
