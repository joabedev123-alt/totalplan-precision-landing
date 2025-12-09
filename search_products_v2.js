import { createRequire } from "module";
const require = createRequire(import.meta.url);
const XLSX = require('xlsx');

const workbook = XLSX.readFile('src/pastadecatalogos/RELAÇÃO PRODUTOS POR ORDEM DE CÓDIGO.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

const data = XLSX.utils.sheet_to_json(sheet);

const targets = ['2503', '2504'];

const clean = (str) => {
    if (typeof str !== 'string') return str;
    return str.replace(/[\r\n]+/g, ' ').trim();
}

const results = data.filter(row => {
    const code = String(row['CÓDIGO']);
    return targets.some(t => code.startsWith(t));
}).map(row => ({
    Codigo: clean(row['CÓDIGO']),
    Descricao: clean(row['DESCRIÇÃO                                                   ']), // The column name had spaces in the previous output, I might need to fuzzy match or get keys dynamically
    Utilizacao: clean(row['UTILIZAÇÃO']),
    // Keys might be tricky, let's just dump all values cleaned
    Raw: Object.keys(row).reduce((acc, key) => {
        acc[key.trim()] = clean(row[key]);
        return acc;
    }, {})
}));

console.log(JSON.stringify(results, null, 2));
