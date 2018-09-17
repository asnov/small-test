import { Component } from '@angular/core';

// recommended way as in https://github.com/ethers-io/ethers.js/issues/268#issuecomment-418159827
import {ethers} from 'ethers';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'small-test';

  constructor() {
    const bn: ethers.BigNumber = ethers.utils.bigNumberify(1);
    console.log(`BigNumber=`, bn);
  }

}
