const date1 = document.querySelector("#date1");

try {
    const options = {year: "numeric"};

date1.innerHTML = `<span class="highlight">${new Date().toLocaleDateString("en-US", options)}</span>`;} 
catch (e) {console.log("Error with code or your browser does not support Locale");}

const modified1 = document.querySelector("#modified1");
modified1.innerHTML = new Date(document.lastModified);