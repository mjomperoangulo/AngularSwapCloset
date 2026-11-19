import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonIcon, IonModal,
  IonSearchbar,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {TarjetasHomeComponent} from "../../componentes/tarjetas-home/tarjetas-home.component";
import {addIcons} from "ionicons";
import {notificationsOutline} from "ionicons/icons";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonContent,CommonModule, FormsModule, TarjetasHomeComponent, IonButton, IonIcon, IonModal, IonSearchbar, IonAvatar,RouterLink]
})
export class HomePage implements OnInit {

  constructor() {
    addIcons({
      'notifications-outline': notificationsOutline
    });
  }
  proximasDevoluciones = [
    {
      nombre: 'Zapatos Vans',
      propietario: 'Juan Lopez',
      dias: 2,
      imagen: 'assets/img/vans.jpg'
    },
    {
      nombre: 'Sudadera canina',
      propietario: 'Fabiana Sevillana',
      dias: 10,
      imagen: 'assets/img/sudadera.jpg'
    },
    {
      nombre: 'Pantalon Cargo',
      propietario: 'Fernan Torres',
      dias: 7,
      imagen: 'assets/img/pantalon.jpg'
    }
  ];
  mostrarDevoluciones: boolean = false;

  abrirDevoluciones() {
    this.mostrarDevoluciones = true;
  }

  cerrarDevoluciones() {
    this.mostrarDevoluciones = false;
  }

  ngOnInit() {
  }

}
