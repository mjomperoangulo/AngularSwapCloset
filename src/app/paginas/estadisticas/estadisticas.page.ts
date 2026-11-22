import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader, IonIcon, IonSelect, IonSelectOption, IonTitle, IonToolbar} from '@ionic/angular';
import {addIcons} from "ionicons";
import {arrowBackOutline} from "ionicons/icons";

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonSelect, IonSelectOption]
})
export class EstadisticasPage implements OnInit {
  volver() {
    window.history.back();
  }
  constructor() {
    addIcons({arrowBackOutline})
  }

  ngOnInit() {
  }

}
