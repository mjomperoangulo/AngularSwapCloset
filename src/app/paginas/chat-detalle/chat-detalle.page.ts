import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { arrowBackOutline} from 'ionicons/icons';
import {IonAvatar, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar} from '@ionic/angular';
import {addIcons} from "ionicons";

@Component({
  selector: 'app-chat-detalle',
  templateUrl: './chat-detalle.page.html',
  styleUrls: ['./chat-detalle.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonAvatar]
})
export class ChatDetallePage implements OnInit {
  volver() {
    window.history.back();
  }
  constructor() {
    addIcons({
      arrowBackOutline
    })
  }

  ngOnInit() {
  }

}
