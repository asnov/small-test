import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';
import { ethers } from 'ethers';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
// Uncaught Error: Cannot find module 'tslib'
var EtherTestLibService = /** @class */ (function () {
    function EtherTestLibService() {
        /** @type {?} */
        var bn = ethers.utils.bigNumberify(1);
        console.log("BigNumber=", bn);
    }
    /**
     * @return {?}
     */
    EtherTestLibService.prototype.testEthers = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var ethProvider = new ethers.providers.EtherscanProvider();
        // EtherscanProvider.perform() -> fetchJson() -> XMLHttpRequest()
        // ethProvider.perform('log', {})
        //   .then(perform => {
        //     console.log(`perform=`, perform);
        //   });
        /** @type {?} */
        var address = '0xb2682160c482eB985EC9F3e364eEc0a904C44C23';
        /** @type {?} */
        var startBlock = 3135808;
        /** @type {?} */
        var endBlock = 5091477;
        // EtherscanProvider.getHistory() -> fetchJson() -> XMLHttpRequest()
        ethProvider.getHistory(address, startBlock, endBlock)
            .then(function (transactions) {
            console.log("transactions=", transactions);
        });
        /** @type {?} */
        var rpcProvider = new ethers.providers.JsonRpcProvider();
        // const hash = '0x2ddf6dd2ec23adf525dac59d7c9189b25b172d679aad951e59e232045f2c811f';
        // JsonRpcProvider.send() -> fetchJson() -> XMLHttpRequest()
        // rpcProvider.send('debug_traceTransaction', [hash])
        rpcProvider.send('eth_signTransaction', [{}])
            .then(function (send) {
            console.log("send=", send);
        });
    };
    EtherTestLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    EtherTestLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ EtherTestLibService.ngInjectableDef = defineInjectable({ factory: function EtherTestLibService_Factory() { return new EtherTestLibService(); }, token: EtherTestLibService, providedIn: "root" });
    return EtherTestLibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var EtherTestLibComponent = /** @class */ (function () {
    function EtherTestLibComponent(etherTestLibService) {
        this.etherTestLibService = etherTestLibService;
    }
    /**
     * @return {?}
     */
    EtherTestLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.etherTestLibService.testEthers();
    };
    EtherTestLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-ether-test-lib',
                    template: "\n    <p>\n      ether-test-lib works!\n    </p>\n  "
                }] }
    ];
    EtherTestLibComponent.ctorParameters = function () { return [
        { type: EtherTestLibService }
    ]; };
    return EtherTestLibComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var EtherTestLibModule = /** @class */ (function () {
    function EtherTestLibModule() {
    }
    EtherTestLibModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [
                        EtherTestLibComponent,
                    ],
                    exports: [
                        EtherTestLibComponent,
                    ],
                },] }
    ];
    return EtherTestLibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { EtherTestLibService, EtherTestLibComponent, EtherTestLibModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXRoZXItdGVzdC1saWIuanMubWFwIiwic291cmNlcyI6WyJuZzovL2V0aGVyLXRlc3QtbGliL2xpYi9ldGhlci10ZXN0LWxpYi5zZXJ2aWNlLnRzIiwibmc6Ly9ldGhlci10ZXN0LWxpYi9saWIvZXRoZXItdGVzdC1saWIuY29tcG9uZW50LnRzIiwibmc6Ly9ldGhlci10ZXN0LWxpYi9saWIvZXRoZXItdGVzdC1saWIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gRG9lc24ndCB3b3JrOiBFUlJPUiBpbiAuLi9zbWFsbC10ZXN0L25vZGVfbW9kdWxlcy94bWxodHRwcmVxdWVzdC9saWIvWE1MSHR0cFJlcXVlc3QuanNcbi8vIE1vZHVsZSBub3QgZm91bmQ6IEVycm9yOiBDYW4ndCByZXNvbHZlICdjaGlsZF9wcm9jZXNzJyBpbiAnL1VzZXJzL2FsZXhuZXcvdXBXb3JrL3pvbHR1L3NtYWxsLXRlc3Qvbm9kZV9tb2R1bGVzL3htbGh0dHByZXF1ZXN0L2xpYidcbi8vIGltcG9ydCAqIGFzIGV0aGVycyBmcm9tICdldGhlcnMvZXRoZXJzJztcblxuLy8gcmVjb21tZW5kZWQgd2F5IGFzIGluIGh0dHBzOi8vZ2l0aHViLmNvbS9ldGhlcnMtaW8vZXRoZXJzLmpzL2lzc3Vlcy8yNjgjaXNzdWVjb21tZW50LTQxODE1OTgyN1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJzsgICAgLy8gVW5jYXVnaHQgRXJyb3I6IENhbm5vdCBmaW5kIG1vZHVsZSAndHNsaWInXG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRXRoZXJUZXN0TGliU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgYm46IGV0aGVycy51dGlscy5CaWdOdW1iZXIgPSBldGhlcnMudXRpbHMuYmlnTnVtYmVyaWZ5KDEpO1xuICAgIGNvbnNvbGUubG9nKGBCaWdOdW1iZXI9YCwgYm4pO1xuXG4gIH1cblxuICBwdWJsaWMgdGVzdEV0aGVycygpIHtcbiAgICBjb25zdCBldGhQcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLkV0aGVyc2NhblByb3ZpZGVyKCk7XG5cbiAgICAvLyBFdGhlcnNjYW5Qcm92aWRlci5wZXJmb3JtKCkgLT4gZmV0Y2hKc29uKCkgLT4gWE1MSHR0cFJlcXVlc3QoKVxuICAgIC8vIGV0aFByb3ZpZGVyLnBlcmZvcm0oJ2xvZycsIHt9KVxuICAgIC8vICAgLnRoZW4ocGVyZm9ybSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGBwZXJmb3JtPWAsIHBlcmZvcm0pO1xuICAgIC8vICAgfSk7XG5cbiAgICBjb25zdCBhZGRyZXNzID0gJzB4YjI2ODIxNjBjNDgyZUI5ODVFQzlGM2UzNjRlRWMwYTkwNEM0NEMyMyc7XG4gICAgY29uc3Qgc3RhcnRCbG9jayA9IDMxMzU4MDg7XG4gICAgY29uc3QgZW5kQmxvY2sgPSA1MDkxNDc3O1xuXG4gICAgLy8gRXRoZXJzY2FuUHJvdmlkZXIuZ2V0SGlzdG9yeSgpIC0+IGZldGNoSnNvbigpIC0+IFhNTEh0dHBSZXF1ZXN0KClcbiAgICBldGhQcm92aWRlci5nZXRIaXN0b3J5KGFkZHJlc3MsIHN0YXJ0QmxvY2ssIGVuZEJsb2NrKVxuICAgICAgLnRoZW4odHJhbnNhY3Rpb25zID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYHRyYW5zYWN0aW9ucz1gLCB0cmFuc2FjdGlvbnMpO1xuICAgICAgfSk7XG5cbiAgICBjb25zdCBycGNQcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLkpzb25ScGNQcm92aWRlcigpOyAvLyAnaHR0cDovL2xvY2FsaG9zdDo4NTQ1Jyk7XG4gICAgLy8gY29uc3QgaGFzaCA9ICcweDJkZGY2ZGQyZWMyM2FkZjUyNWRhYzU5ZDdjOTE4OWIyNWIxNzJkNjc5YWFkOTUxZTU5ZTIzMjA0NWYyYzgxMWYnO1xuXG4gICAgLy8gSnNvblJwY1Byb3ZpZGVyLnNlbmQoKSAtPiBmZXRjaEpzb24oKSAtPiBYTUxIdHRwUmVxdWVzdCgpXG4gICAgLy8gcnBjUHJvdmlkZXIuc2VuZCgnZGVidWdfdHJhY2VUcmFuc2FjdGlvbicsIFtoYXNoXSlcbiAgICBycGNQcm92aWRlci5zZW5kKCdldGhfc2lnblRyYW5zYWN0aW9uJywgW3t9XSlcbiAgICAgIC50aGVuKHNlbmQgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgc2VuZD1gLCBzZW5kKTtcbiAgICAgIH0pO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdGhlclRlc3RMaWJTZXJ2aWNlIH0gZnJvbSAnLi9ldGhlci10ZXN0LWxpYi5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZXRoZXItdGVzdC1saWInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgZXRoZXItdGVzdC1saWIgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEV0aGVyVGVzdExpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBldGhlclRlc3RMaWJTZXJ2aWNlOiBFdGhlclRlc3RMaWJTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmV0aGVyVGVzdExpYlNlcnZpY2UudGVzdEV0aGVycygpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdGhlclRlc3RMaWJDb21wb25lbnQgfSBmcm9tICcuL2V0aGVyLXRlc3QtbGliLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRXRoZXJUZXN0TGliQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRXRoZXJUZXN0TGliQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBFdGhlclRlc3RMaWJNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBVUE7SUFLRTs7WUFDUSxFQUFFLEdBQTJCLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztLQUUvQjs7OztJQUVNLHdDQUFVOzs7SUFBakI7O1lBQ1EsV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRTs7Ozs7OztZQVF0RCxPQUFPLEdBQUcsNENBQTRDOztZQUN0RCxVQUFVLEdBQUcsT0FBTzs7WUFDcEIsUUFBUSxHQUFHLE9BQU87O1FBR3hCLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUM7YUFDbEQsSUFBSSxDQUFDLFVBQUEsWUFBWTtZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQztTQUM1QyxDQUFDLENBQUM7O1lBRUMsV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUU7Ozs7UUFLMUQsV0FBVyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzFDLElBQUksQ0FBQyxVQUFBLElBQUk7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM1QixDQUFDLENBQUM7S0FDTjs7Z0JBdkNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OEJBWkQ7Q0FVQTs7Ozs7O0FDVkE7SUFlRSwrQkFBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7S0FDM0Q7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFLENBQUM7S0FDdkM7O2dCQWhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLHNEQUlUO2lCQUVGOzs7Z0JBWFEsbUJBQW1COztJQXFCNUIsNEJBQUM7Q0FsQkQ7Ozs7OztBQ0pBO0lBR0E7S0FVbUM7O2dCQVZsQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLHFCQUFxQjtxQkFDdEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHFCQUFxQjtxQkFDdEI7aUJBQ0Y7O0lBQ2lDLHlCQUFDO0NBVm5DOzs7Ozs7Ozs7Ozs7OzsifQ==