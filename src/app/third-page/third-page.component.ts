import { Component } from '@angular/core';
import {FlexLayoutModule} from '@ngbracket/ngx-layout';

@Component({
  selector: 'app-third-page',
  standalone: true,
  imports: [
    FlexLayoutModule
  ],
  templateUrl: './third-page.component.html',
  styleUrl: './third-page.component.scss'
})
export class ThirdPageComponent {

}
