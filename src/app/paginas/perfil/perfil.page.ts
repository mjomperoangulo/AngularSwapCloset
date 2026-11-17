import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons} from "ionicons";
import { notificationsOutline} from "ionicons/icons";
import { star } from 'ionicons/icons';
import {
  IonButton, IonButtons,
  IonContent,
  IonHeader, IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonRouterLink,
  IonTitle, IonToggle,
  IonToolbar
} from '@ionic/angular';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  imports: [IonContent, CommonModule, FormsModule, IonRouterLink, RouterLink, IonList, IonItem, IonLabel, IonIcon, IonToggle]
})
export class PerfilPage implements OnInit {

  constructor() {

    addIcons ({notificationsOutline,star});
  }
  cambiarTema(event: any) {
    console.log(event.detail.checked);
  }

  ngOnInit() {}



}
