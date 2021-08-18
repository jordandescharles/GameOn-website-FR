function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const email = document.querySelector('#email');
const submit=document.querySelector('.btn-submit');

// verifie le mail
const regex= new RegExp (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

// permet de recupérer le parent de #email pour lui mettre les attributs
const formDataEmail = email.closest("div"); 

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//close modal
document.querySelector(".close").addEventListener('click',closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
function closeModal() {
  modalbg.style.display = "none";
}


//EMAIL Check

email.addEventListener('input',emailCheck);
function emailCheck(){
  if (email.value.match(regex)) { // le .value est important !!!
    formDataEmail.removeAttribute("data-error");
    formDataEmail.removeAttribute("data-error-visible");
    console.log("test")
  } 
 else { 
  formDataEmail.setAttribute("data-error","merci d'entrer un e-mail valide");
  formDataEmail.setAttribute("data-error-visible", true);
  }
}





