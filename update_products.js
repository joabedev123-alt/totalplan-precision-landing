import { createRequire } from "module";
const require = createRequire(import.meta.url);
const XLSX = require('xlsx');
const fs = require('fs');

// Read existing products
const productsRaw = fs.readFileSync('products.json', 'utf8');
const products = JSON.parse(productsRaw);

// Read Excel
const workbook = XLSX.readFile('src/pastadecatalogos/RELAÇÃO PRODUTOS POR ORDEM DE CÓDIGO.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const excelData = XLSX.utils.sheet_to_json(sheet);

// Create a map for faster lookup, but since we need partial match, we might just iterate or create a lookup by base code
const excelLookup = {};

excelData.forEach(row => {
    if (row['CÓDIGO']) {
        const fullCode = String(row['CÓDIGO']).trim();
        const [baseCode, size] = fullCode.split('/');

        // We only need one entry per base code to get the description
        if (baseCode && !excelLookup[baseCode]) {
            excelLookup[baseCode] = row;
        }
    }
});

// Update products
const updatedProducts = products.map(p => {
    const excelRow = excelLookup[p.id];

    if (excelRow) {
        let nome = excelRow['DESCRIÇÃO'] ? excelRow['DESCRIÇÃO'].trim() : p.nome;
        let descricao = excelRow['UTILIZAÇÃO'] ? excelRow['UTILIZAÇÃO'].trim() : p.descricao;

        // Clean up name
        nome = nome.replace(/\s+/g, ' ');

        // Clean up description
        if (descricao && descricao.length > 0) {
            descricao = descricao.charAt(0).toUpperCase() + descricao.slice(1);
        } else {
            // Fallback if UTILIZAÇÃO is empty
            descricao = p.descricao;
        }

        return {
            ...p,
            nome: nome,
            descricao: descricao
        };
    } else {
        console.log(`Product ${p.id} not found in Excel (checked base code).`);
        return p;
    }
});

fs.writeFileSync('products_updated.json', JSON.stringify(updatedProducts, null, 2));
console.log('Updated products saved to products_updated.json');
