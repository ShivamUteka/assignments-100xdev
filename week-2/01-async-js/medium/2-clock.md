Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

const fs = require('fs');

function cleanFile(filePath) {
    // Read the content of the file
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Remove extra spaces using a regular expression
    const cleanedContent = fileContent.replace(/\s+/g, ' ');

    // Write the cleaned content back to the file
    fs.writeFileSync(filePath, cleanedContent, 'utf-8');

    console.log('File cleaned successfully.');
}
