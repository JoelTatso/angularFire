import { Component, inject, Signal } from '@angular/core';
import { enableIndexedDbPersistence, Firestore } from '@angular/fire/firestore';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`
})
export class AppComponent {

  firestore : Firestore = inject(Firestore)

  constructor(){
    enableIndexedDbPersistence(this.firestore)
  }
}
