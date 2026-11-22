import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon, IonInput,
  IonModal, IonRouterLink,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {addIcons} from "ionicons";
import {arrowBackOutline, chatbubbles, checkmarkCircleOutline, closeCircleOutline, heartOutline} from "ionicons/icons";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-detalle-prendaprestamo',
  templateUrl: './detalle-prendaprestamo.page.html',
  styleUrls: ['./detalle-prendaprestamo.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonAvatar, IonButton, IonFooter, IonIcon, IonModal, IonInput, IonRouterLink,RouterLink]
})
export class DetallePrendaprestamoPage implements OnInit {

  modalAbierto = false;

  abrirModal() {
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
  }

  volver() {
    window.history.back();
  }

  constructor() {
    addIcons({
      arrowBackOutline,
      heartOutline,
      chatbubbles,
      checkmarkCircleOutline,
      closeCircleOutline,

    });
  }

  ngOnInit() {
  }

}
