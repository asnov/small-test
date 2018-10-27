import { Injectable } from '@angular/core';

// Doesn't work: ERROR in ../small-test/node_modules/xmlhttprequest/lib/XMLHttpRequest.js
// Module not found: Error: Can't resolve 'child_process' in '/Users/alexnew/upWork/zoltu/small-test/node_modules/xmlhttprequest/lib'
// import * as ethers from 'ethers/ethers';

// recommended way as in https://github.com/ethers-io/ethers.js/issues/268#issuecomment-418159827
import { ethers } from 'ethers';    // Uncaught Error: Cannot find module 'tslib'


@Injectable({
  providedIn: 'root'
})
export class EtherTestLibService {

  constructor() {
    const bn: ethers.utils.BigNumber = ethers.utils.bigNumberify(1);
    console.log(`BigNumber=`, bn);

  }

  public testEthers() {
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

    const rpcProvider = new ethers.providers.JsonRpcProvider(); // 'http://localhost:8545');
    // const hash = '0x2ddf6dd2ec23adf525dac59d7c9189b25b172d679aad951e59e232045f2c811f';

    // JsonRpcProvider.send() -> fetchJson() -> XMLHttpRequest()
    // rpcProvider.send('debug_traceTransaction', [hash])
    rpcProvider.send('eth_signTransaction', [{}])
      .then(send => {
        console.log(`send=`, send);
      });
  }

}
