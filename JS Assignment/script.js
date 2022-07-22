//Getting access to the relevant html tags 

const username = document.getElementById("username");
const email = document.getElementById("email");
const country = document.getElementById("select-country");
const list = document.querySelector("select");
const submitBtn = document.getElementById("formBtn");
const form = document.getElementsByClassName("form");

//preventing default behvaior of form to submit itself AND running the validate function

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    validateForm();

})

//Function to check for missing or invalid input values AND to make url for next call to open next html page 

function validateForm() {
    url = "./summary.html?";
    queryString = "";
    try {
        if (!username.value) {
            throw "Username is missing";
        }
        else {
            let name = username.getAttribute("name");
            queryString += `${name}=${username.value}&`;
        }
        if (!email.value) {
            throw "Email is missing";
        }

        else if (email.value && !isEmail(email.value)) {
            throw "Email is not valid";

        } else {
            let emailValue = email.getAttribute("name");
            queryString += `${emailValue}=${email.value}&`;
        }

        //Accessing the selected dropdown value
        let option = list.options[list.selectedIndex];

        if (option.value === "--select--") {
            throw "Select valid country";
        } else {
            let countryName = country.getAttribute("name");
            queryString += `${countryName}=${country.value}`;
        }
        //Only will open window once all the above validation code is successful
        window.open(`${url + queryString}`);

        //Manually submitting the form, since we prevented the default behavior of form to submit
        document.theForm.submit();

    }

    catch (err) {
        alert(err);
    }
}

// Function to check the validity of email through Regex 

function isEmail(emailValue) {

    var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(String(emailValue).toLowerCase());
}



