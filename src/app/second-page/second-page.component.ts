import {Component, OnInit} from '@angular/core';
import {FlexLayoutModule} from '@ngbracket/ngx-layout';

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [
    FlexLayoutModule
  ],
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.scss'
})
export class SecondPageComponent implements OnInit {
  alternate = true;
  toggle = true;
  color = false;
  size = 40;
  expandEnabled = true;
  contentAnimation = true;
  dotAnimation = true;
  side = 'left';

  constructor() { }

  ngOnInit() {
  }

  entries = [
    { header: 'UNAM', content: 'blog, stack: polymer javascript', side: '2017', index: 0 },
    { header: 'Capgemini', content: 'BBVA Cliente Sistema de Tasas para depositos Internos, stack: java8 angular oracle spring aop mvc gitlab', side: '2018', index: 1 },
    { header: 'BBVA', content: 'Contabilidad en medios electrónicos, stack: java8 APX mongo spring batch jenkins sonar bitbucket jira ninja', side: '2019', index: 2 },
    { header: 'CITI', content: 'Automatización de Procesos Internos, stack: java14 rest soap oracle mongo spring springboot microservices', side: '2020', index: 3 },
    { header: 'Banco Azteca', content: 'Credito en Efectivo, stack: java12 rest oracle spring springboot web cloud microservices docker kubernetes rancher', side: '2021', index: 4 },
    { header: 'Mercado Libre', content: 'Fintech Mercado Pago, stack: Go 1.17 rest batch message queue mysql aws kvs gin docker microservices', side: '2022', index: 5 }
  ];

  removeEntry() {
    this.entries.pop();
  }

  onHeaderClick(event: { stopPropagation: () => void; }) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onDotClick(event: { stopPropagation: () => void; }) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onExpandEntry(expanded: any, index: any) {
    console.log(`Expand status of entry #${index} changed to ${expanded}`);
  }
}
