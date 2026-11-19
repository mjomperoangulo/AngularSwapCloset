import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButton, IonContent, IonHeader, IonRouterLink, IonTitle, IonToolbar} from '@ionic/angular';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-no-encontrada',
  templateUrl: './no-encontrada.page.html',
  styleUrls: ['./no-encontrada.page.scss'],
  imports: [IonContent, IonHeader, CommonModule, FormsModule, IonButton, IonRouterLink,RouterLink]
})
export class NoEncontradaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
