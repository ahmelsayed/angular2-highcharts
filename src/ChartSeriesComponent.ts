import { ElementRef, Input, Output, EventEmitter, ContentChild } from 'angular2/core';
import { ChartPointComponent } from './ChartPointComponent';
import { Directive } from "angular2/core";
import { ChartEvent } from './ChartEvent';

@Directive({
    selector: 'series'
})
export class ChartSeriesComponent {
    @ContentChild(ChartPointComponent) point: ChartPointComponent;
    @Output() click = new EventEmitter<ChartEvent>();
    @Output() afterAnimate = new EventEmitter<ChartEvent>();
    @Output() checkboxClick = new EventEmitter<ChartEvent>();
    @Output() hide = new EventEmitter<ChartEvent>();
    @Output() legendItemClick = new EventEmitter<ChartEvent>();
    @Output() mouseOver = new EventEmitter<ChartEvent>();
    @Output() mouseOut = new EventEmitter<ChartEvent>();
    @Output() show = new EventEmitter<ChartEvent>();
}