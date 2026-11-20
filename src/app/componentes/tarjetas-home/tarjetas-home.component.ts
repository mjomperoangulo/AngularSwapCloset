import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle, IonContent,
  IonSearchbar
} from '@ionic/angular';

@Component({
  selector: 'app-tarjetas-home',
  templateUrl: './tarjetas-home.component.html',
  styleUrls: ['./tarjetas-home.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonButton, RouterLink, IonContent],
})
export class TarjetasHomeComponent {


  tarjetas = [
    { id:1, nombre: 'Sudadera de Leopardo', imagen: 'assets/icon/camiseta.jpg', tipo: 'Intercambio' ,ruta: '/app/detalle-prenda' },
    { id:2,nombre: 'Conjunto Camisa + Chandal Puma', imagen: 'assets/icon/Prestamoimagen(1).png', tipo: 'Préstamo' ,ruta: '/app/detalle-prendaprestamo' },
    { id:3,nombre: 'Sudadera de Leopardo', imagen: 'assets/icon/camiseta.jpg', tipo: 'Intercambio',ruta: '/app/detalle-prenda' },
    { id:4,nombre: 'Bolso de marca', imagen: 'assets/icon/bolso.jpg', tipo: 'Préstamo' ,ruta: '/app/detalle-prendaprestamo' },
    { id:5,nombre: 'Sudadera de Leopardo', imagen: 'assets/icon/camiseta.jpg', tipo: 'Préstamo' ,ruta: '/app/detalle-prendaprestamo' },
    { id:6,nombre: 'Sudadera de Leopardo', imagen: 'assets/icon/camiseta.jpg', tipo: 'Intercambio',ruta: '/app/detalle-prenda' }
  ];





}
