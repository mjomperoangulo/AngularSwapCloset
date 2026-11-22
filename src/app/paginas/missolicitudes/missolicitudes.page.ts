import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButton, IonContent, IonHeader, IonIcon, IonRouterLink, IonTitle, IonToolbar} from '@ionic/angular';
import {RouterLink} from "@angular/router";
import {addIcons} from "ionicons";
import {arrowBackOutline} from "ionicons/icons";

@Component({
  selector: 'app-missolicitudes',
  templateUrl: './missolicitudes.page.html',
  styleUrls: ['./missolicitudes.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonButton, IonRouterLink,RouterLink]
})
export class MissolicitudesPage implements OnInit {
  volver() {
    window.history.back();
  }
  constructor() {
    addIcons({ arrowBackOutline})
  }

  ngOnInit() {
  }

}
