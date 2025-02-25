import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe('Upload Test', () => {
    it('Simple upload test', async () => {
        
        await browser.url('https://the-internet.herokuapp.com/upload');

        // store test file path
        const filePath = path.join(__dirname, '../data/image.jpg');

        // upload test file
        const remoteFilePath = await browser.uploadFile(filePath);

        // set file path value in the input field
        await $('#file-upload').setValue(remoteFilePath);
        await $('#file-submit').click();
        
        // Assertion
        await expect($('h3')).toHaveText('File Uploaded!');
    });
    
    it.only('Upload on a hidden input field', async () => {
        
        await browser.url('/cart/');

        // store test file path
        const filePath = path.join(__dirname, '../data/image.jpg');

        // upload test file
        const remoteFilePath = await browser.uploadFile(filePath);

        // remove hidden class
        await browser.execute("document.querySelector('#upfile_1').className = ''")
        
        // set file path value in the input field
        await $('#upfile_1').setValue(remoteFilePath);
        await $('#upload_1').click();

        // Espera hasta que el mensaje de éxito esté visible
        await browser.waitUntil(async () => {
            return (await $('#wfu_messageblock_header_1_label_1').getText()).includes('uploaded successfully');
        }, {
            timeout: 5000,
            timeoutMsg: 'El mensaje de éxito no apareció'
        });

        // Assertion
        const message = await $('#wfu_messageblock_header_1_label_1').getText();
        await expect(message).toContain('uploaded successfully');
    });
});