import fs from 'fs';
import path from 'path';

const dir = 'src/pastadeprodutos/espatula para codificação';
const files = fs.readdirSync(dir);

const products = {};

files.forEach(file => {
    if (!file.endsWith('.jpg')) return;

    const name = file.replace('.jpg', '');
    const matches = name.match(/(\d{4})-(\d{2,3})/g);

    if (matches) {
        matches.forEach(match => {
            const [code, size] = match.split('-');

            if (!products[code]) {
                products[code] = {
                    code: code,
                    sizes: new Set(),
                    image: file
                };
            }
            products[code].sizes.add(size);
        });
    }
});

const productList = Object.values(products).map(p => ({
    id: p.code,
    nome: `Espátula Profissional ${p.code}`,
    descricao: `Espátula profissional de alta qualidade. Disponível em diversos tamanhos.`,
    sizes: Array.from(p.sizes).sort((a, b) => parseInt(a) - parseInt(b)),
    image: p.image
}));

fs.writeFileSync('products.json', JSON.stringify(productList, null, 2));
