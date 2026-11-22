import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonIcon, IonInput, IonLabel,
  IonSegment, IonSegmentButton,
  IonSelect,
  IonSelectOption, IonTextarea

} from '@ionic/angular';
import {addIcons} from "ionicons";
import {cameraOutline,wifi,cellular,batteryFull} from "ionicons/icons";

@Component({
  selector: 'app-publicar-prenda',
  templateUrl: './publicar-prenda.page.html',
  styleUrls: ['./publicar-prenda.page.scss'],
  imports: [IonContent, IonLabel, IonSegment, IonSegmentButton, CommonModule, FormsModule, IonIcon, IonSelectOption, IonSelect, IonSegment, IonSegmentButton, IonLabel, IonInput, IonTextarea, IonButton]
})
export class PublicarPrendaPage implements OnInit {

  constructor() {
    addIcons({
      cameraOutline,
      cellular,
      wifi,
      batteryFull
    })
  }

  ngOnInit() {
  }

}
