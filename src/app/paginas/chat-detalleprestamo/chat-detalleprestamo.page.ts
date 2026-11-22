import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonRouterLink,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {addIcons} from "ionicons";
import {add, arrowBackOutline, cameraOutline, heart, thumbsUp, thumbsUpOutline} from "ionicons/icons";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-chat-detalleprestamo',
  templateUrl: './chat-detalleprestamo.page.html',
  styleUrls: ['./chat-detalleprestamo.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonAvatar, IonIcon, IonButton, IonRouterLink,RouterLink]
})
export class ChatDetalleprestamoPage implements OnInit {
  volver() {
    window.history.back();
  }
  constructor() {
    addIcons({
      arrowBackOutline,
      cameraOutline,
      add,
      thumbsUp
    })
  }

  ngOnInit() {
  }

}
