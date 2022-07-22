const container = document.getElementById("container");

//Saving the query string into "params" variable

const Params = new URLSearchParams(window.location.search);

//Injecting the details of those strings into <p> in the form key : value pairs
for (const param of Params) {
    let element = document.createElement("p");
    element.innerHTML = `${param[0]} : ${param[1]}`;
    container.appendChild(element);
}  
