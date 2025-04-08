const fs = require('fs');
const axios = require('axios');

// QMetry API Endpoint and Headers
const qmetryAPIEndpoint = 'https://qtmcloud.qmetry.com/rest/api/automation/importresult';
const qmetryApiKey = 'bff8b1afbf07e6728fb729fd3343960dee2635090f74e850bdf90611ce141c3b16a7f71914069a3b6c40da4f63bdcc0dddb27826b44e4d2c92b0c6a4676136763b17b2e6890a39aee8813e77abc7896e';
const qmetryProjectId = '10000';
// Read the generated JUnit XML results file
const xmlFilePath = 'test-results.xml';
const xmlData = fs.readFileSync(xmlFilePath, 'utf8');
//console.log('Test results xml:'+xmlData);
// Define the headers for the request
const headers = {
  'Content-Type': 'application/xml',
  'Authorization': `Bearer ${qmetryApiKey}`
  //'Format' :''
};
// Function to upload the test results to QMetry
async function uploadResultsToQMetry() {

  try {
    const response = await axios.post(qmetryAPIEndpoint, {
      projectId: '10000',
      results: xmlData,
    }, { headers });
   
    console.log('Test results uploaded to QMetry successfully:', response.data);
  } catch (error) {
    console.error('Error response received from server:', error.message);
    console.error('Error response received from server:', error.response.data);
    console.error('Error uploading results to QMetry:', error.response ? error.response.data : error.message);
  }
}

// Run the function
uploadResultsToQMetry();