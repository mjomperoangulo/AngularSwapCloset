import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonSearchbar
} from '@ionic/angular';

@Component({
  selector: 'app-tarjetas-home',
  templateUrl: './tarjetas-home.component.html',
  styleUrls: ['./tarjetas-home.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonButton,RouterLink],
})
export class TarjetasHomeComponent {}
