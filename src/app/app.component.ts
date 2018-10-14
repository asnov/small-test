import { Component } from '@angular/core';

// recommended way as in https://github.com/ethers-io/ethers.js/issues/268#issuecomment-418159827
import { ethers } from 'ethers';    // Uncaught Error: Cannot find module 'tslib'
// import {ethers} from 'ethers2';   // works fine


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'small-test';

  constructor() {
    const bn: ethers.utils.BigNumber = ethers.utils.bigNumberify(1);
    console.log(`BigNumber=`, bn);

    this.testEthers();
  }

  testEthers() {
    const ethProvider = new ethers.providers.EtherscanProvider();

    // EtherscanProvider.perform() -> fetchJson() -> XMLHttpRequest()
    // ethProvider.perform('log', {})
    //   .then(perform => {
    //     console.log(`perform=`, perform);
    //   });

    const address = '0xb2682160c482eB985EC9F3e364eEc0a904C44C23';
    const startBlock = 3135808;
    const endBlock = 5091477;

    // EtherscanProvider.getHistory() -> fetchJson() -> XMLHttpRequest()
    ethProvider.getHistory(address, startBlock, endBlock)
      .then(transactions => {
        console.log(`transactions=`, transactions);
      });

    const rpcProvider = new ethers.providers.JsonRpcProvider();
    const hash = '0x2ddf6dd2ec23adf525dac59d7c9189b25b172d679aad951e59e232045f2c811f';

    // JsonRpcProvider.send() -> fetchJson() -> XMLHttpRequest()
    rpcProvider.send('debug_traceTransaction', [hash])
      .then(send => {
        console.log(`send=`, send);
      });
  }

}
