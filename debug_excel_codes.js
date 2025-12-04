import { createRequire } from "module";
const require = createRequire(import.meta.url);
const XLSX = require('xlsx');

const workbook = XLSX.readFile('src/pastadecatalogos/RELAÇÃO PRODUTOS POR ORDEM DE CÓDIGO.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const excelData = XLSX.utils.sheet_to_json(sheet);

console.log('Excel Codes found:');
excelData.forEach(row => {
    if (row['CÓDIGO']) {
        console.log(`'${row['CÓDIGO']}'`);
    }
});
