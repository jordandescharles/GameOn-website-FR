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
const modalbgThx = document.querySelector(".bgroundThx");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const submit = document.querySelector('.btn-submit');

// Elements by ID ---------------------------------------------------
const myForm = document.getElementById('myForm')
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const cgu = document.getElementById('checkbox1');
const ny = document.getElementById('location1');
const sf = document.getElementById('location2');
const seattle = document.getElementById('location3');
const chicago = document.getElementById('location4');
const boston= document.getElementById('location5');
const portland = document.getElementById('location6');

/* REGEX nom et prénoms
Accepte les lettres min ou maj et avec accent + le'-' pour les prenoms composés
avec un mini de deux lettre sans max*/
const regex = /\s*[a-zA-Zéèàêîâ-]{2,}$/;
/* REGEX Mail 
 Accepte les  formats entreprise @lenomdebidule.com
1 @  max obligatoire */
const regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
// verifie que la saisie est un chiffre et compris entre 0 et 7 l'evenement existe depuis 2014 :) 
const regexQty =/^[01234567]{1}$/;
// constantes de verifications

// FONCTIONS -------------------------------------------------------------------------------------

// launch & close modal form and thx popup
function launchModal() {modalbg.style.display = "block";}
function closeModal() {modalbg.style.display = "none";}
function showThx(){modalbgThx.style.display = "block";}
function closeThx(){modalbgThx.style.display = "none";}

// ---------------------------------- verif PRENOM
function veriffirstName(){ 
  if(firstName.value.trim() ==""){
    firstName.closest("div").setAttribute("data-error","le champs ne peux pas etre vide");
    firstName.closest("div").setAttribute("data-error-visible", true);
    return false;
  }
  else if (regex.test(firstName.value) == false){
    firstName.closest("div").setAttribute("data-error","Veuillez entrer 2 caractères ou plus");
    firstName.closest("div").setAttribute("data-error-visible", true);
  return false;
  }
    else{
    firstName.closest("div").setAttribute("data-error-visible", false);
    return true; 
  } 
}
// ----------------------------------- verif NOM
function verifLastName(){ 
  if(lastName.value.trim() ==""){
    lastName.closest("div").setAttribute("data-error","le champs ne peux pas etre vide");
    lastName.closest("div").setAttribute("data-error-visible", true);
    return false;
  }
  else if (regex.test(lastName.value) == false){
    lastName.closest("div").setAttribute("data-error","Veuillez entrer 2 caractères ou plus");
    lastName.closest("div").setAttribute("data-error-visible", true);
    return false;
  }
  else{
    lastName.closest("div").setAttribute("data-error-visible", false);
    return true;
  }
}
// ----------------------------------- verif Email
function verifEmail(){ 
  if(email.value.trim() ==""){
    email.closest("div").setAttribute("data-error","le champs ne peux pas etre vide");
    email.closest("div").setAttribute("data-error-visible", true);
    return false
  }
  else if (regexMail.test(email.value) == false){
    email.closest("div").setAttribute("data-error","Merci d'entrer une adresse email valide");
    email.closest("div").setAttribute("data-error-visible", true);
    return false;
  }
  else{
    email.closest("div").setAttribute("data-error-visible", false);
    return true;
  }
}
// ----------------------------------- verif Date naissance
function verifDate(){
  if(birthdate.value.trim() ==""){
    birthdate.closest("div").setAttribute("data-error","Merci de rentrer votre date de naissance");
    birthdate.closest("div").setAttribute("data-error-visible", true);
    return false;

  }
  else{
    birthdate.closest("div").setAttribute("data-error-visible", false);
    return true;
  }
}
// -----------------------------------  verif Nb de participations
function verifQty(){
  if(regexQty.test(quantity.value) == false){
    quantity.closest("div").setAttribute("data-error","Merci de rentrer un chiffre entre 0 et 7");
    quantity.closest("div").setAttribute("data-error-visible", true);
    return false;
  }
  else{
    quantity.closest("div").setAttribute("data-error-visible", false);
    return true;
  }
}
// ----------------------------------- verif CGU
function verifCgu(){
  if(cgu.checked == false){
    cgu.closest("div").setAttribute("data-error","Vous devez vérifier que vous acceptez les termes et conditions");
    cgu.closest("div").setAttribute("data-error-visible", true);
    return false;
  }
  else{
    cgu.closest("div").setAttribute("data-error-visible", false);
    return true;
  }
}
// ----------------------------------- verif ville
function verifVille(){
  if(ny.checked == false && sf.checked == false && seattle.checked == false && chicago.checked == false && boston.checked == false && portland.checked == false   ){
    ny.closest("div").setAttribute("data-error","Merci de choisir une ville");
    ny.closest("div").setAttribute("data-error-visible", true);
    return false;
  }
  else{
    ny.closest("div").setAttribute("data-error-visible", false);
    return true;
  }
}
function validate() {
  return true;
}

// LISTENERS -----------------------------------------------------------


// verification de la saisie en temps réel sur chaque input
firstName.addEventListener('input',function(){ veriffirstName()});
lastName.addEventListener('input', function(){ verifLastName()});
email.addEventListener('input', function(){ verifEmail()});
birthdate.addEventListener('input', function(){ verifDate()}); 
quantity.addEventListener('input', function(){ verifQty()}); 
cgu.addEventListener('change', function(){ verifCgu()}); 
// !!! verifVille etant des btn radio on ne verifie pas à la saisie mais au submit !!!

// verification submit pour validation
submit.addEventListener('click', function(e){
  e.preventDefault(); // empeche les erreurs navigateur de pop
  verifVille() 
  if(veriffirstName()&&verifLastName()&&verifEmail()&&verifDate()&&verifQty()&&verifCgu()&&verifVille())
    {
    closeModal();
    showThx();
    validate();
    myForm.reset();
    }
});

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
//close modal
document.querySelector(".close").addEventListener('click',closeModal);
//close modal THX
modalbgThx.addEventListener('click',closeThx);

