import { createRequire } from "module";
const require = createRequire(import.meta.url);
const XLSX = require('xlsx');

const workbook = XLSX.readFile('src/pastadecatalogos/RELAÇÃO PRODUTOS POR ORDEM DE CÓDIGO.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

const data = XLSX.utils.sheet_to_json(sheet, { header: 'A' }); // Use A, B, C... to avoid column name issues

const targets = ['2503', '2504'];

const results = data.filter(row => {
    const code = String(row['A']); // Column A is likely Code
    return targets.some(t => code.startsWith(t));
}).map(row => ({
    Code: row['A'],
    Desc: row['B'], // Column B is Description
    Use: row['C']   // Column C might be use
}));

console.log(JSON.stringify(results, null, 2));
