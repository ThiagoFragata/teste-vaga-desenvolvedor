interface StateRevenue {
    state: string;
    revenue: number;
}

function formatCurrency(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
}

function calculateStatePercentages(revenues: StateRevenue[]) {
    const totalRevenue = revenues.reduce((acc, cur) => acc + cur.revenue, 0);
    

    return revenues.map((stateRevenue) => {
        const percentage = (stateRevenue.revenue / totalRevenue) * 100;
        return {
            state: stateRevenue.state,
            revenue: stateRevenue.revenue,
            percentage: percentage.toFixed(2)
        };
    });
}

const revenues: StateRevenue[] = [
    { state: 'SP', revenue: 67836.43 },
    { state: 'RJ', revenue: 36678.66 },
    { state: 'MG', revenue: 29229.88 },
    { state: 'ES', revenue: 27165.48 },
    { state: 'Outros', revenue: 19849.53 }
];

const result = calculateStatePercentages(revenues);

result.forEach((stateData) => {
    console.log(`${stateData.state}: ${formatCurrency(stateData.revenue)} - ${stateData.percentage}%`);
});
