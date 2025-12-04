import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require('fs');
const pdf = require('pdf-parse');

console.log('Type of pdf:', typeof pdf);
console.log('Exports:', pdf);

try {
    const dataBuffer = fs.readFileSync('src/pastadecatalogos/catalogos/catalogo com todod os codigos 01.pdf');
    pdf(dataBuffer).then(function (data) {
        console.log(data.text);
    }).catch(function (error) {
        console.error('Error parsing:', error);
    });
} catch (e) {
    console.error('Error reading file:', e);
}
