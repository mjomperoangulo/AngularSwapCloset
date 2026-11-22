import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonModal,
  IonSearchbar,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {RouterLink} from "@angular/router";
import {TarjetasHomeComponent} from "../../componentes/tarjetas-home/tarjetas-home.component";
import { Devolucion } from '../../modelos/devolucion';
import {addIcons} from "ionicons";
import {notificationsOutline} from "ionicons/icons";
@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.page.html',
  styleUrls: ['./inventario.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonAvatar, IonButton, IonIcon, IonSearchbar, RouterLink, TarjetasHomeComponent, IonModal]
})

export class InventarioPage implements OnInit {


  proximasDevoluciones: Devolucion[] = [
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

  constructor() {
    addIcons({
      notificationsOutline
    })
  }

  ngOnInit() {
  }
}

