import fs from 'fs';

const filePath = 'src/components/CatalogoSection.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Extract productsData array
const startMarker = 'const productsData = [';
const endMarker = '];';
const startIndex = content.indexOf(startMarker);

if (startIndex === -1) {
    console.error('Could not find productsData');
    process.exit(1);
}

const endIndex = content.indexOf(endMarker, startIndex);
if (endIndex === -1) {
    console.error('Could not find end of productsData');
    process.exit(1);
}

const productsString = content.substring(startIndex + startMarker.length, endIndex).trim();

// Fix trailing commas if any to make it valid JSON-like for eval or strict parsing
// Since it's a TS/JS file, it might not be strict JSON (keys might not be quoted, though in this file they seem quoted).
// Let's safe-eval it or use a safer regex approach if possible, but eval is easier for quick scripts.
// We'll wrap it in braces to make it an object property or just array.
let productsData;
try {
    // Use new Function to parse JS object literal syntax
    productsData = new Function(`return [${productsString}]`)();
} catch (e) {
    console.error('Error parsing products data:', e);
    process.exit(1);
}

// Sort productsData
productsData.sort((a, b) => {
    // Custom sort to handle numbers and strings like "2503-01" vs "2503" if any
    // We want natural sort order
    return a.id.localeCompare(b.id, undefined, { numeric: true, sensitivity: 'base' });
});

// Format back to string
const newProductsString = JSON.stringify(productsData, null, 2);

// Reconstruct file content
// We need to match the indentation and format of the original file ideally
// The original used 2 spaces indentation for properties? Let's check.
// Using JSON.stringify gives double quotes for keys which matches the file.
// We just need to ensure the variable declaration is preserved.

const newContent = content.substring(0, startIndex + startMarker.length) + '\n' +
    newProductsString.substring(1, newProductsString.length - 1) + // remove outer brackets
    content.substring(endIndex); // keys already quoted

// Write back
fs.writeFileSync(filePath, newContent);
console.log('Successfully sorted productsData by ID.');
