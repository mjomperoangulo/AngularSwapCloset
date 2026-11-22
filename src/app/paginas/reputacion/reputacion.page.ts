import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonAvatar, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar} from '@ionic/angular';
import {addIcons} from "ionicons";
import {star, starOutline} from "ionicons/icons";

@Component({
  selector: 'app-reputacion',
  templateUrl: './reputacion.page.html',
  styleUrls: ['./reputacion.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonAvatar]
})
export class ReputacionPage implements OnInit {

  volver() {
    window.history.back();
  }
  constructor() {
    addIcons({
      star,
      starOutline
    })
  }

  ngOnInit() {
  }

}
