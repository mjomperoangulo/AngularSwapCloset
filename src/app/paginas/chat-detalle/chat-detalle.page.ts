import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonAvatar, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar} from '@ionic/angular';

@Component({
  selector: 'app-chat-detalle',
  templateUrl: './chat-detalle.page.html',
  styleUrls: ['./chat-detalle.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonAvatar]
})
export class ChatDetallePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
