import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {add, arrowBackOutline, cameraOutline, heart, thumbsUp, thumbsUpOutline} from 'ionicons/icons';
import {IonAvatar, IonButton, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar} from '@ionic/angular';
import {addIcons} from "ionicons";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-chat-detalle',
  templateUrl: './chat-detalle.page.html',
  styleUrls: ['./chat-detalle.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonAvatar, IonButton,RouterLink]

})
export class ChatDetallePage implements OnInit {
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
