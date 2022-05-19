//creating pop-up form
function openForm() {
  document.getElementById("tutorForm").style.display = "block";
}

function closeForm() {
  document.getElementById("tutorForm").style.display = "none";
}


//validating form

const form = document.getElementById("form");
const name1 = document.getElementById("name");
const email = document.getElementById("email");
const contact = document.getElementById("contact");
const rate = document.getElementById("rate");
const biography = document.getElementById("biography");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs () {
  //get value from inputs
  const name1Value = name1.value.trim();
  const emailValue = email.value.trim();
  const contactValue = contact.value.trim();
  const rateValue = rate.value.trim();
  const biographyValue = biography.value.trim();

  if (name1Value === ""){
    //show error
  } 
  setErrorFor(name1,"This field is mandatory");
    else {
    //show success
    setSuccessFor(name1);
  }
}

function setErrorFor(input, message){
  const line = input.parentElement;
  const small = line.querySelector('small');

  //add error message
  small.innerText = message;

  //add error class
  line.className = 'line error';
}
function setSuccessFor(input) {
  line.className = "line success"
}