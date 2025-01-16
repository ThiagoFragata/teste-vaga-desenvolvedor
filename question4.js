function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
}
function calculateStatePercentages(revenues) {
    var totalRevenue = revenues.reduce(function (acc, cur) { return acc + cur.revenue; }, 0);
    return revenues.map(function (stateRevenue) {
        var percentage = (stateRevenue.revenue / totalRevenue) * 100;
        return {
            state: stateRevenue.state,
            revenue: stateRevenue.revenue,
            percentage: percentage.toFixed(2)
        };
    });
}
var revenues = [
    { state: 'SP', revenue: 67836.43 },
    { state: 'RJ', revenue: 36678.66 },
    { state: 'MG', revenue: 29229.88 },
    { state: 'ES', revenue: 27165.48 },
    { state: 'Outros', revenue: 19849.53 }
];
var result = calculateStatePercentages(revenues);
result.forEach(function (stateData) {
    console.log("".concat(stateData.state, ": ").concat(formatCurrency(stateData.revenue), " - ").concat(stateData.percentage, "%"));
});
