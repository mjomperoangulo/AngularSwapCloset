import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonModal,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {chatbubbles, arrowBackOutline, heartOutline, checkmarkCircleOutline, closeCircleOutline} from 'ionicons/icons';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-detalle-prenda',
  templateUrl: './detalle-prenda.page.html',
  styleUrls: ['./detalle-prenda.page.scss'],
  imports: [IonContent, IonHeader, CommonModule, FormsModule, IonButton, IonIcon, IonFooter, IonAvatar, IonModal, IonToolbar]
})
export class DetallePrendaPage implements OnInit {

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
  modalAbierto = false;

  abrirModal() {
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
  }



  ngOnInit() {
  }

}
