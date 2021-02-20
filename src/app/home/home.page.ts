import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>
          Home Page
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <h1>Home</h1>
    </ion-content>
  `
})
export class HomePage {

  constructor() {}

}
