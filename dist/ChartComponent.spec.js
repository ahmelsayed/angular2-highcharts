"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var testing_1 = require('angular2/testing');
var browser_1 = require('angular2/platform/testing/browser');
var core_1 = require('angular2/core');
var ChartComponent_1 = require('./ChartComponent');
var index_1 = require('./index');
var HighchartsService_1 = require('./HighchartsService');
var HighchartsServiceMock_1 = require('./HighchartsServiceMock');
testing_1.setBaseTestProviders(browser_1.TEST_BROWSER_PLATFORM_PROVIDERS, browser_1.TEST_BROWSER_APPLICATION_PROVIDERS);
testing_1.describe('ChartComponent', function () {
    var tcb;
    var highchartsServiceMock;
    var create = function (template) {
        var TestComponent = (function () {
            function TestComponent() {
            }
            TestComponent = __decorate([
                core_1.Component({
                    selector: 'test-component',
                    template: template,
                    directives: [index_1.CHART_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [])
            ], TestComponent);
            return TestComponent;
        }());
        return tcb.createAsync(TestComponent);
    };
    testing_1.beforeEach(testing_1.inject([testing_1.TestComponentBuilder], function (_tcb) {
        highchartsServiceMock = new HighchartsServiceMock_1.HighchartsServiceMock();
        tcb = _tcb.overrideProviders(ChartComponent_1.ChartComponent, [
            core_1.provide(HighchartsService_1.HighchartsService, { useValue: highchartsServiceMock })
        ]);
    }));
    testing_1.it('should create simple chart object', function (done) {
        create('<chart [options]="options"></chart>').then(function (fixture) {
            fixture.componentInstance.options = ['options'];
            spyOn(highchartsServiceMock.Highcharts, 'Chart');
            fixture.detectChanges();
            testing_1.expect(highchartsServiceMock.Highcharts.Chart).toHaveBeenCalled();
            done();
        });
    });
    testing_1.it('should emit the "create" event with HighchartsChartObject', function (done) {
        create('<chart [options]="options" (create)="onCreated($event)"></chart>').then(function (fixture) {
            fixture.componentInstance.onCreated = function (e) {
                testing_1.expect(e.constructor).toBe(HighchartsServiceMock_1.HighchartsChartObjectMock);
                done();
            };
            fixture.componentInstance.options = ['options'];
            fixture.detectChanges();
        });
    });
});
//# sourceMappingURL=ChartComponent.spec.js.map