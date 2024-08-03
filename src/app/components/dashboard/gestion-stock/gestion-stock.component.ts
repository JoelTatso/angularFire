import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-gestion-stock',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <p>
      gestion-stock works!
    </p>
    <router-outlet />
  `,
  styles: ``
})
export default class GestionStockComponent {

}
