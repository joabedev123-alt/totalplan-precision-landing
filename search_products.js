import { createRequire } from "module";
const require = createRequire(import.meta.url);
const XLSX = require('xlsx');

const workbook = XLSX.readFile('src/pastadecatalogos/RELAÇÃO PRODUTOS POR ORDEM DE CÓDIGO.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

const data = XLSX.utils.sheet_to_json(sheet);

const targets = ['2503', '2504'];

const results = data.filter(row => {
    const code = String(row['CÓDIGO']);
    return targets.some(t => code.startsWith(t));
});

console.log(JSON.stringify(results, null, 2));
