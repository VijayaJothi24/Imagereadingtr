const Tesseract = require('tesseract.js');

// Correct image path definition
const imagePath = "C:/Users/cours/OneDrive/Desktop/Imagereading/Picture1.png"; // Ensure the file exists

// OCR function
Tesseract.recognize(imagePath, 'eng', {
  tessedit_char_whitelist: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
  logger: m => console.log(m),
}).then(({ data: { text } }) => {
  console.log('Extracted Text:\n', text);
}).catch(err => console.error('Error:', err));

