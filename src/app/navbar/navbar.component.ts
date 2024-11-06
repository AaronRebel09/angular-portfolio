import { Component } from '@angular/core';
import {FlexLayoutModule} from '@ngbracket/ngx-layout';
import {MatToolbar} from '@angular/material/toolbar';
import {MatTabLink, MatTabNav, MatTabNavPanel} from '@angular/material/tabs';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {AsyncPipe, NgForOf} from '@angular/common';
import {FlexLayoutServerModule} from '@ngbracket/ngx-layout/server';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    FlexLayoutServerModule,
    FlexLayoutModule,
    MatToolbar,
    MatTabNav,
    MatTabLink,
    AsyncPipe,
    NgForOf,
    MatTabNavPanel,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
  navLinks = [
    {label: 'comienza aqui',icon: 'home',link: './first-page',index: 0 },
    {label: 'portafolio',icon: 'work',link: './second-page',index: 1 },
    {label: 'noticias',icon: 'people',link: './third-page',index: 2 },
    {label: 'acerca de Aaron',icon: 'contact_mail',link: './fourth-page',index: 3 }
  ];

}
