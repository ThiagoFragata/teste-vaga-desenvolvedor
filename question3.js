"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function calculateRevenue(data) {
    var daysWithRevenue = data.filter(function (r) { return r.value > 0; });
    var lowestRevenue = Math.min.apply(Math, daysWithRevenue.map(function (r) { return r.value; }));
    var highestRevenue = Math.max.apply(Math, daysWithRevenue.map(function (r) { return r.value; }));
    var totalRevenue = daysWithRevenue.reduce(function (acc, cur) { return acc + cur.value; }, 0);
    var monthlyAverage = totalRevenue / daysWithRevenue.length;
    var daysAboveAverage = data.filter(function (r) { return r.value > monthlyAverage; }).length;
    return {
        lowestRevenue: lowestRevenue,
        highestRevenue: highestRevenue,
        monthlyAverage: monthlyAverage,
        daysAboveAverage: daysAboveAverage,
    };
}
function loadRevenueData() {
    var jsonData = fs.readFileSync('invoicing.json', 'utf-8');
    var data = JSON.parse(jsonData);
    return data.revenue;
}
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
}
var data = loadRevenueData();
var result = calculateRevenue(data);
console.log('Menor receita em um dia:', formatCurrency(result.lowestRevenue));
console.log('Maior receita em um dia:', formatCurrency(result.highestRevenue));
console.log('Receita média mensal:', formatCurrency(result.monthlyAverage));
console.log('Número de dias com receita acima da média mensal:', result.daysAboveAverage);
