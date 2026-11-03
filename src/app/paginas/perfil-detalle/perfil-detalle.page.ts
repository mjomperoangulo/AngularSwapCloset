import {Component, input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar
} from '@ionic/angular';

@Component({
  selector: 'app-perfil-detalle',
  templateUrl: './perfil-detalle.page.html',
  styleUrls: ['./perfil-detalle.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton,IonList,IonItem,IonLabel]
})
export class PerfilDetallePage {

  id = input<string>();


}
