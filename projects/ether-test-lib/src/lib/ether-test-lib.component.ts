import { Component, OnInit } from '@angular/core';
import { EtherTestLibService } from './ether-test-lib.service';


@Component({
  selector: 'lib-ether-test-lib',
  template: `
    <p>
      ether-test-lib works!
    </p>
  `,
  styles: []
})
export class EtherTestLibComponent implements OnInit {

  constructor(private etherTestLibService: EtherTestLibService) {
  }

  ngOnInit() {
    this.etherTestLibService.testEthers();
  }

}
