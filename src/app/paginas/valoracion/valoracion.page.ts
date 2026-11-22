import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButton, IonContent, IonHeader, IonIcon, IonTextarea, IonTitle, IonToolbar} from '@ionic/angular';
import {addIcons} from "ionicons";
import {arrowBackOutline, star, starOutline} from "ionicons/icons";

@Component({
  selector: 'app-valoracion',
  templateUrl: './valoracion.page.html',
  styleUrls: ['./valoracion.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonTextarea, IonButton]
})
export class ValoracionPage implements OnInit {
  volver() {
    window.history.back();
  }
  constructor() {
    addIcons({star,starOutline,arrowBackOutline})
  }

  ngOnInit() {
  }

}
