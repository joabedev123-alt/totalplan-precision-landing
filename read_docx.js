
import mammoth from 'mammoth';
import fs from 'fs';

const filePath = 'c:\\Users\\Joab\\Desktop\\Edmir - espatula\\totalplan-precision-landing\\src\\assets\\Espatulas02\\RELAÇÃO POR GRUPOS - ALTERAÇÕES Edimir.docx';

mammoth.extractRawText({ path: filePath })
    .then(result => {
        const text = result.value;
        fs.writeFileSync('docx_content_utf8.txt', text, 'utf8');
        console.log("File written successfully.");
    })
    .catch(err => {
        console.error("Error reading docx:", err);
    });
