import { Component, OnInit } from '@angular/core';
import {home} from "ionicons/icons";
import {IonCard, IonIcon} from "@ionic/angular";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-tarjetas-home',
  templateUrl: './tarjetas-home.component.html',
  styleUrls: ['./tarjetas-home.component.scss'],
  imports: [
    IonIcon,
    RouterLink,
    IonCard
  ],
})
export class TarjetasHomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  protected readonly home = home;
}
