import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonAvatar, IonButton, IonContent, IonHeader, IonIcon, IonSearchbar, IonTitle, IonToolbar} from '@ionic/angular';
import {addIcons} from "ionicons";
import {batteryFull, cellular, wifi} from "ionicons/icons";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonButton, IonSearchbar, IonAvatar, RouterLink]
})
export class BuscarPage implements OnInit {
  mostrarDevoluciones: boolean = false;

  abrirDevoluciones() {
    this.mostrarDevoluciones = true;
  }

  cerrarDevoluciones() {
    this.mostrarDevoluciones = false;
  }
  constructor() {
    addIcons({
      cellular,
      wifi,
      batteryFull

    })
  }

  ngOnInit() {
  }

}
