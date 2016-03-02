"use strict";
var Highcharts_1 = require('./Highcharts');
var deepAssign = require('deep-assign');
function initChart(userOpts, baseOpts, type) {
    if (!Highcharts_1.Highcharts[type]) {
        throw new Error(type + " is unknown chart type.");
    }
    var opts = deepAssign({}, baseOpts, userOpts);
    console.log('init chart', opts);
    return new Highcharts_1.Highcharts[type](opts);
}
exports.initChart = initChart;
//# sourceMappingURL=initChart.js.map