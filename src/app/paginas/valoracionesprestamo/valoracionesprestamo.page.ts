import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButton, IonContent, IonHeader, IonIcon, IonTextarea, IonTitle, IonToolbar} from '@ionic/angular';
import {addIcons} from "ionicons";
import {arrowBackOutline, star, starOutline} from "ionicons/icons";

@Component({
  selector: 'app-valoracionesprestamo',
  templateUrl: './valoracionesprestamo.page.html',
  styleUrls: ['./valoracionesprestamo.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonIcon, IonTextarea]
})
export class ValoracionesprestamoPage implements OnInit {
  volver() {
    window.history.back();
  }
  constructor() { addIcons({star,starOutline,arrowBackOutline})}

  ngOnInit() {
  }

}
