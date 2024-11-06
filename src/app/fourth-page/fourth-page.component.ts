import { Component } from '@angular/core';
import {FlexLayoutModule} from '@ngbracket/ngx-layout';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-fourth-page',
  standalone: true,
    imports: [
        FlexLayoutModule,
        NgOptimizedImage
    ],
  templateUrl: './fourth-page.component.html',
  styleUrl: './fourth-page.component.scss'
})
export class FourthPageComponent {

}
