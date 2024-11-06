import { Component } from '@angular/core';
import {FlexLayoutModule} from '@ngbracket/ngx-layout';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [
    FlexLayoutModule
  ],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.scss'
})
export class FirstPageComponent {

}
