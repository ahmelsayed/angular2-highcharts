import { EventEmitter } from 'angular2/core';
import { ChartEvent } from './ChartEvent';

const chartEvents = [
    //'click', works by default as a native DOM click
    'addSeries',
    'afterPrint',
    'beforePrint',
    'drilldown',
    'drillup',
    'load',
    'redraw',
    'selection'
];

const seriesEvents = [
    'click',
    'afterAnimate',
    'checkboxClick',
    'hide',
    'legendItemClick',
    'mouseOut',
    'mouseOver',
    'show'
];

const pointEvents = [
    'click',
    'remove',
    'select',
    'unselect',
    'mouseOut',
    'mouseOver',
    'update'
];

export function createBaseOpts(chartCmp, seriesCmp, pointCmp, element) {
    let opts = {
        chart : { renderTo : element, events :{} },
        plotOptions : {
            series : { events : { }, point : { events : { } } }
        }
    };
    chartEvents.forEach(function (eventName) {
        opts.chart.events[eventName] = opts.chart.events[eventName] || function (event: any) {
            chartCmp[eventName].emit(new ChartEvent(event, this));
        }
    });
    if (seriesCmp) {
        seriesEvents.forEach(function (eventName) {
            opts.plotOptions.series.events[eventName] = opts.plotOptions.series.events[eventName] || function (event: any) {
                seriesCmp[eventName].emit(new ChartEvent(event, this));
            }
        });
    }
    if (pointCmp) {
        pointEvents.forEach(function (eventName) {
            opts.plotOptions.series.point.events[eventName] = opts.plotOptions.series.point.events[eventName] || function (event: any) {
                pointCmp[eventName].emit(new ChartEvent(event, this));
            }
        });
    }

    return opts;
}
