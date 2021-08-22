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

// Elements by ID.
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

// REGEX nom et prénoms
// Accepte les lettres min ou maj et avec accent + le'-' pour les prenoms composés
// avec un mini de deux lettre sans max
const regex = /\s*[a-zA-Zéèàêîâ-]{2,}$/;
// REGEX Mail
// Accepte les  formats entreprise @lenomdebidule.com
// 1 @  max obligatoire
const regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
// verifie que la saisie est un chiffre et compris entre 0 et 7 l'evenement existe depuis 2014 :) 
const regexQty =/^[01234567]{1}$/;
// constantes de veriifications


// Verification de Prenom //////////////////////////////////////////
firstName.addEventListener('input', function(e){
  if(firstName.value.trim() ==""){
    firstName.closest("div").setAttribute("data-error","le champs ne peux pas etre vide");
    firstName.closest("div").setAttribute("data-error-visible", true);
    e.preventDefault(); // empeche le click du formulaire si erreur
  }
  else if (regex.test(firstName.value) == false){
    firstName.closest("div").setAttribute("data-error","Veuillez entrer 2 caractères ou plus");
    firstName.closest("div").setAttribute("data-error-visible", true);
    e.preventDefault();
  }
  else{
    firstName.closest("div").setAttribute("data-error-visible", false);
  }
})
// Verification de Nom ////////////////////////////////////////////////
lastName.addEventListener('input', function(e){
  if(lastName.value.trim() ==""){
    lastName.closest("div").setAttribute("data-error","le champs ne peux pas etre vide");
    lastName.closest("div").setAttribute("data-error-visible", true);
    e.preventDefault();
  }
  else if (regex.test(lastName.value) == false){
    lastName.closest("div").setAttribute("data-error","Veuillez entrer 2 caractères ou plus");
    lastName.closest("div").setAttribute("data-error-visible", true);
    e.preventDefault();
  }
  else{
    lastName.closest("div").setAttribute("data-error-visible", false);
  }
})
// Verification de l'Email //////////////////////////////////////////
email.addEventListener('input', function(e){
  if(email.value.trim() ==""){
    email.closest("div").setAttribute("data-error","le champs ne peux pas etre vide");
    email.closest("div").setAttribute("data-error-visible", true);
    e.preventDefault();
  }
  else if (regexMail.test(email.value) == false){
    email.closest("div").setAttribute("data-error","Merci d'entrer une adresse email valide");
    email.closest("div").setAttribute("data-error-visible", true);
    e.preventDefault();
  }
  else{
    email.closest("div").setAttribute("data-error-visible", false);
  }
})
// Verification de la date de naissance //////////////////////////////////////////
birthdate.addEventListener('input', function(e){
  if(birthdate.value.trim() ==""){
    birthdate.closest("div").setAttribute("data-error","Merci de rentrer votre date de naissance");
    birthdate.closest("div").setAttribute("data-error-visible", true);
    e.preventDefault();
  }
  else{
    birthdate.closest("div").setAttribute("data-error-visible", false);
  }
})
// Verification de la date du nombre d'evenements //////////////////////////////////////////
quantity.addEventListener('input', function(e){
  if(regexQty.test(quantity.value) == false){
    quantity.closest("div").setAttribute("data-error","Merci de rentrer un chiffre entre 0 et 7");
    quantity.closest("div").setAttribute("data-error-visible", true);
    e.preventDefault();
  }
  else{
    quantity.closest("div").setAttribute("data-error-visible", false);
  }
})
// verification CGU ///////////////////////////////////////////////////////////////////////////////
cgu.addEventListener('change', function(e){
  if(cgu.checked == false){
    cgu.closest("div").setAttribute("data-error","Vous devez vérifier que vous acceptez les termes et conditions");
    cgu.closest("div").setAttribute("data-error-visible", true);
    e.preventDefault();
  }
  else{
    cgu.closest("div").setAttribute("data-error-visible", false);
  }}
)
// verification Ville///////////////////////////////////////////////////////////////////////////////
submit.addEventListener('click', function(e){
  if(ny.checked == true || sf.checked == true || seattle.checked == true ||chicago.checked == true ||boston.checked == true || portland.checked == true  ){
    ny.setAttribute("data-error-visible", false);
  }
  else{
    ny.closest("div").setAttribute("data-error","Merci de choisir une ville");
    ny.closest("div").setAttribute("data-error-visible", true);
    e.preventDefault();
  }}
)

// dernière verification avant envoi du formulaire ////////////////////////////////////////
submit.addEventListener('click',validate);

function validate() {
// prenom ----------------------------------------------------
  if(firstName.value.trim() ==""){
    firstName.closest("div").setAttribute("data-error","le champs ne peux pas etre vide");
    firstName.closest("div").setAttribute("data-error-visible", true);
    return false; // empeche le click du formulaire si erreur
  }
// nom --------------------------------------------------------
  if(lastName.value.trim() ==""){
  lastName.closest("div").setAttribute("data-error","le champs ne peux pas etre vide");
  lastName.closest("div").setAttribute("data-error-visible", true);
  return false;
  }
// email -------------------------------------------------------
  if(email.value.trim() ==""){
    email.closest("div").setAttribute("data-error","le champs ne peux pas etre vide");
    email.closest("div").setAttribute("data-error-visible", true);
    return false;
  }
  // date de naissance ------------------------------------------
  if(birthdate.value.trim() ==""){
    birthdate.closest("div").setAttribute("data-error","Merci de rentrer votre date de naissance");
    birthdate.closest("div").setAttribute("data-error-visible", true);
    return false;
  }
// quantity --------------------------------------------------
  if(regexQty.test(quantity.value) == false){
    quantity.closest("div").setAttribute("data-error","Merci de rentrer un chiffre entre 0 et 7");
    quantity.closest("div").setAttribute("data-error-visible", true);
    return false;
  }
// gcu --------------------------------------------------------
  if(cgu.checked == false){
    cgu.closest("div").setAttribute("data-error","Vous devez vérifier que vous acceptez les termes et conditions");
    cgu.closest("div").setAttribute("data-error-visible", true);
    return false;
  }
 
  return true;
 
}

if(validate()) {
  console.log('yessssssss')
  modalbgThx.style.display = "block";
 }

modalbgThx.addEventListener('click',closeThx);
function closeThx(){
  modalbgThx.style.display = "none";
}
