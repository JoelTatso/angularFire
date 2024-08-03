import { Component, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AngularFireModule } from '@angular/fire/compat';
import { collection, collectionData, enableIndexedDbPersistence, Firestore } from '@angular/fire/firestore';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularFireModule],
  template: `

      <h1 align="center">Bienvenue sur le marche Admin</h1>

      <ul>
        @for (item of items(); track $index) {
          <li>{{ item?.name }}</li>
        }
      </ul>

      <router-outlet />
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng_18';

  firestore : Firestore = inject(Firestore)
  items : Signal<any[] | undefined>

  constructor(){
    enableIndexedDbPersistence(this.firestore)
      const Collection = collection(this.firestore,'items')
      this.items = toSignal(collectionData(Collection))

  }
}
