import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader, IonIcon, IonSearchbar, IonTitle, IonToolbar} from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  imports: [IonContent, CommonModule, FormsModule, IonIcon, IonSearchbar]
})
export class ChatPage implements OnInit {

  mensajes = [
    {
      nombre: 'Alberto Dominguez',
      ultimoMensaje: '¿Entonces querrás la sudadera?',
      hora: 'Hace 1 min',
      imagen: 'assets/img/alberto.jpg',
      noLeidos: 2
    },
    {
      nombre: 'Laura Diaz',
      ultimoMensaje: '¿Tienes algo de ropa que no uses...',
      hora: 'Hace 2 horas',
      imagen: 'assets/img/laura.jpg',
      noLeidos: 0
    },
    {
      nombre: 'Juan Sanchez',
      ultimoMensaje: 'Te puedo dejar ropa si...',
      hora: 'Hace 3 días',
      imagen: 'assets/img/juan.jpg',
      noLeidos: 0
    },
    {
      nombre: 'Almudena Reyes',
      ultimoMensaje: 'Por casualidad no tendrás...',
      hora: 'Hace 24 horas',
      imagen: 'assets/img/almudena.jpg',
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

  abrirChat(mensaje: any) {
    console.log('Abrir conversación con:', mensaje.nombre);
  }

  constructor() { }

  ngOnInit() {
  }

}
