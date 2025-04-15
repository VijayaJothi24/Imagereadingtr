// Import the Google Cloud Vision client library
const vision = require('@google-cloud/vision');

// Create a client
const client = new vision.ImageAnnotatorClient({
  keyFilename: 'C:\Users\cours\OneDrive\Desktop\Google_VisionAPi\service-account-key.json'  
});

// Function to read text from an image
async function readTextFromImage(imagePath) {
  try {
    // Perform text detection
    const [result] = await client.textDetection(imagePath);
    const detections = result.textAnnotations;

    if (detections.length > 0) {
      console.log('Extracted Text:\n', detections[0].description);
    } else {
      console.log('No text found in the image.');
    }
  } catch (error) {
    console.error('Error analyzing image:', error);
  }
}

// Run the function
const imagePath = 'path/to/image.jpg'; // Replace with your image file path
readTextFromImage(imagePath);
