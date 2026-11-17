import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonInput, IonButton, IonRouterLink } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonContent, IonButton, RouterLink, IonRouterLink, IonInput],
})
export class LoginPage {}
