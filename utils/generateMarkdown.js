// function to generate markdown for README
function generateMarkdown(data) {
  // determine which license badge to use for the README
  let licenseBadge;
  if (data.license === "MIT") {
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (data.license === "GNU GPL v3") {
    licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (data.license === "IBM Public") {
    licenseBadge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  } else {
    licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  }

  // create README file content using template literals
  return `
# ${data.title} ${licenseBadge}
***
   
### Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contribution](#Contribution)
* [Tests](#Tests)
* [Questions](#Questions)
---
   
### Description <a name="Description"></a>
${data.description}
   
---
   
### Installation <a name="Installation"></a>
${data.install}
   
---
   
### Usage <a name="Usage"></a>
${data.usage}
   
---
   
### License <a name="License"></a>
This project is covered under the ${data.license} license

---
   
### Contribution <a name="Contribution"></a>
${data.contribution}
   
---
   
### Tests <a name="Tests"></a>
${data.tests}
   
---
   
### Questions <a name="Questions"></a>

[${data.github}](https://github.com/${data.github})

${data.email}
   
---`;

}

module.exports = generateMarkdown;
