import { createRequire } from "module";
const require = createRequire(import.meta.url);
const XLSX = require('xlsx');

const workbook = XLSX.readFile('src/pastadecatalogos/RELAÇÃO PRODUTOS POR ORDEM DE CÓDIGO.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// Convert to JSON to see headers
const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

console.log('Headers (Row 1):', data[0]);
console.log('Row 2:', data[1]);
console.log('Row 3:', data[2]);
