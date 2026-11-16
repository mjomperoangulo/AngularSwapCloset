import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButton, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar} from '@ionic/angular';

@Component({
  selector: 'app-detalle-prenda',
  templateUrl: './detalle-prenda.page.html',
  styleUrls: ['./detalle-prenda.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonIcon]
})
export class DetallePrendaPage implements OnInit {

  volver() {
    window.history.back();
  }


  constructor() { }

  ngOnInit() {
  }

}
