
import * as fs from 'fs';

interface RevenueDay {
    dia: number;
    valor: number;
}


function calculateRevenue(data: RevenueDay[]) {
    const daysWithRevenue = data.filter((r) => r.valor > 0);
    
    const lowestRevenue = Math.min(...daysWithRevenue.map((r) => r.valor));
    const highestRevenue = Math.max(...daysWithRevenue.map((r) => r.valor));
    
    const totalRevenue = daysWithRevenue.reduce((acc, cur) => acc + cur.valor, 0);
    const monthlyAverage = totalRevenue / daysWithRevenue.length;

    const daysAboveAverage = data.filter((r) => r.valor > monthlyAverage).length;

    return {
        lowestRevenue,
        highestRevenue,
        monthlyAverage,
        daysAboveAverage,
    };
}


function loadRevenueData(): RevenueDay[] {
    const jsonData = fs.readFileSync('invoicing.json', 'utf-8');
    const data = JSON.parse(jsonData);
    return data;
}

function formatCurrency(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
}

const data = loadRevenueData();
const result = calculateRevenue(data);

console.log('Menor receita em um dia:', formatCurrency(result.lowestRevenue));
console.log('Maior receita em um dia:', formatCurrency(result.highestRevenue));
console.log('Receita média mensal:', formatCurrency(result.monthlyAverage));
console.log('Número de dias com receita acima da média mensal:', result.daysAboveAverage);
