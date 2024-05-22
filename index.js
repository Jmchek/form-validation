const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = email.nextElementSibling;
const country = document.querySelector("#country");
const countryError = country.nextElementSibling;
const zipCode = zip.querySelector("#zip");
const zipError = zip.nextElementSibling;
const password = document.querySelector("#password");
const passwordError = password.nextElementSibling;
const passwordConfirm = document.querySelector("#pwconfirm");
const pwConfirmError = passwordConfirm.nextElementSibling;

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const zipCodeRegExp = /^\d{5}(?:[-\s]\d{4})?$/;
const pwRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

window.addEventListener("load", () => {
  const isEmailValid =
    email.value.length === 0 || emailRegExp.test(email.value);
  const isCountryValid = country.value == "None";
  const isZipValid = zip.value.length === 0 || zipCodeRegExp.test(zip.value);
  const isPasswordValid = password.value.length === 0 || pwRegExp.test(password.value)
  
  email.className = isEmailValid ? "valid" : "invalid";
  country.className = isCountryValid ? "valid" : "invalid";
  zip.className = isZipValid ? "valid" : "invalid";
  password.className = isPasswordValid ? "valid" : "invalid";
});

email.addEventListener("input", () => {
  const isEmailValid = email.value.length === 0 || emailRegExp.test(email.value);

  if (isEmailValid) {
    email.className = "valid";
    emailError.textContent = "";
    emailError.className = "emailError";
  } else {
    email.className = "invalid";
  } 
});

country.addEventListener("change", () => {
    const isCountryValid = country.value !== "None";

    if(isCountryValid) {
        country.className = "valid";
        countryError.textContent = "";
        countryError.className = "countryError";
    } else {
        country.className = "invalid";
    }
});

zip.addEventListener("input", () => {
    const isZipValid = zip.value.length === 0 || zipCodeRegExp.test(zip.value);
  
    if (isZipValid) {
      zip.className = "valid";
      zipError.textContent = "";
      zipError.className = "zipError";
    } else {
      zip.className = "invalid";
    }  
  });

  password.addEventListener("input", () => {
    const isPasswordValid = password.value.length === 0 || pwRegExp.test(password.value)
  
    if (isPasswordValid) {
      password.className = "valid";
      passwordError.textContent = "";
      passwordError.className = "passwordError";
    } else {
        password.className = "invalid";
    }  
  });

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isEmailValid = emailRegExp.test(email.value);
  const isZipValid = zipCodeRegExp.test(zip.value);
  const isPasswordValid = password.value.length != 0 || pwRegExp.test(password.value)


  if (!isEmailValid) {
    email.className = "invalid";
    emailError.textContent = "Please provide a valid email!";
    emailError.className = "emailError active";
  } else {
    email.className = "valid";
    emailError.textContent = "";
    emailError.className = "zipError";
  }

  if(country.value == "None"){
    country.className = "invalid";
    countryError.textContent = "Please select a country!";
    countryError.className = "countryError active";
  }

  if (!isZipValid) {
    zip.className = "invalid";
    zipError.textContent = "Please provide a valid zip code!";
    zipError.className = "emailError active";
  } else {
    zip.className = "valid";
    zipError.textContent = "";
    zipError.className = "zipError";
  }

  if(!isPasswordValid){
    password.className = "valid";
    passwordError.textContent = "Please provide a valid password!";
    passwordError.className = "passwordError";
  } else {
    password.className = "invalid";

  }
});