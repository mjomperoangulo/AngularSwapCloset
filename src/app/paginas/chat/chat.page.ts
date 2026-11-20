import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader, IonIcon, IonSearchbar, IonTitle, IonToolbar} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { cellular, wifi, batteryFull } from 'ionicons/icons';
import { Mensajes } from '../../modelos/mensajes';
import {RouterLink} from "@angular/router";
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  imports: [IonContent, CommonModule, FormsModule, IonIcon, IonSearchbar, RouterLink]

})
export class ChatPage implements OnInit {

  mensajes: Mensajes[]=[
    {
      nombre: 'Alberto Dominguez',
      ultimoMensaje: '¿Entonces querrás la sudadera?',
      hora: 'Hace 1 min',
      imagen: 'assets/icon/imagenchat1.png',
      noLeidos: 2
    },
    {
      nombre: 'Laura Diaz',
      ultimoMensaje: '¿Tienes algo de ropa que no uses...',
      hora: 'Hace 2 horas',
      imagen: 'assets/icon/imagenchat2.png',
      noLeidos: 0
    },
    {
      nombre: 'Juan Sanchez',
      ultimoMensaje: 'Te puedo dejar ropa si...',
      hora: 'Hace 3 días',
      imagen: 'assets/icon/imagenchat3.png',
      noLeidos: 0
    },
    {
      nombre: 'Almudena Reyes',
      ultimoMensaje: 'Por casualidad no tendrás...',
      hora: 'Hace 24 horas',
      imagen: 'assets/icon/imagenchat4.png',
      noLeidos: 0
    }
  ];

  mensajesFiltrados = [...this.mensajes];

  busqueda: string = '';

  filtrarMensajes() {
    this.mensajesFiltrados = this.mensajes.filter(mensaje =>
      mensaje.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }

  abrirChat(mensaje:Mensajes) {
    console.log('Abrir conversación con:', mensaje.nombre);
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
