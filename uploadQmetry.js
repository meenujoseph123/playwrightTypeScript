const fs = require('fs');
const axios = require('axios');

// QMetry API Endpoint and Headers
const qmetryAPIEndpoint = 'https://qtmcloud.qmetry.com/rest/api/automation/importresult';
const qmetryApiKey = '92255fc662d8ef87bfbd390b1b4ca5526b83801a24396c5b68740a380ad190ac1a64ff92d409f7b89b56921f6cf92cce426410ed6a489517783e0308126902a8f5e735fbbfea8f4531b43882e084aa55';
const qmetryProjectId = '10000';
// Read the generated JUnit XML results file
const xmlFilePath = 'test-results.json';
const xmlData = fs.readFileSync(xmlFilePath, 'utf8');
console.log('Test results xml:'+xmlData);
// Define the headers for the request
const headers = {
  'Content-Type': 'application/json',
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