// Sample XML data as a string
const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
<testsuites id="" name="" tests="6" failures="0" skipped="0" errors="0" time="10.192823">
    <testsuite name="example.spec.ts" timestamp="2025-04-04T06:14:45.614Z" hostname="chromium" tests="2" failures="0" skipped="0" time="9.005" errors="0">
        <testcase name="has title" classname="example.spec.ts" time="4.225"> </testcase>
        <testcase name="get started link" classname="example.spec.ts" time="4.78"> </testcase>
    </testsuite>
    <testsuite name="example.spec.ts" timestamp="2025-04-04T06:14:45.614Z" hostname="firefox" tests="2" failures="0" skipped="0" time="4.761" errors="0">
        <testcase name="has title" classname="example.spec.ts" time="1.929"> </testcase>
        <testcase name="get started link" classname="example.spec.ts" time="2.832"> </testcase>
    </testsuite>
    <testsuite name="example.spec.ts" timestamp="2025-04-04T06:14:45.614Z" hostname="webkit" tests="2" failures="0" skipped="0" time="4.546" errors="0">
        <testcase name="has title" classname="example.spec.ts" time="2.363"> </testcase>
        <testcase name="get started link" classname="example.spec.ts" time="2.183"> </testcase>
    </testsuite>
</testsuites>
`;

// URL of the API endpoint
const apiUrl = 'https://qtmcloud.qmetry.com/rest/api/automation/importresult';

// Send the XML data using fetch
fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'text/xml',  // Make sure to specify the Content-Type as XML
    },
    body: xmlData,  // The XML data you want to send
})
.then(response => response.json())  // Assuming the API returns JSON
.then(data => console.log('Response:', data))
.catch(error => console.error('Error:', error));