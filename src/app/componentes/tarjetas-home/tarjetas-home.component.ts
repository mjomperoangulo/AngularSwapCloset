import { Component } from '@angular/core';
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
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonSearchbar],
})
export class TarjetasHomeComponent {}
