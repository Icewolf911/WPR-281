function Person(firstName, lastName, email, userID, country, state, city, phone, referenceCode) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.userID = userID;
    this.country = country;
    this.state = state;
    this.city = city;
    this.phone = phone;
    this.referenceCode = referenceCode;
  }

  function lettersOnly(input) {
    
  }
  function numbersOnly(input) {
    
  }
  function emailValid(input) {
    
  }
  function randomRefrence(input) {
    
  }
  function checkCode(input) {
    
  }
  function resetForm(input) {
    
  }
  function formValid(input) {
    
  }

  let referenceCode;
  let globalPerson= new Person();

document.getElementById("first-name").addEventListener("blur", function() {
    lettersOnly();
    globalPerson.firstName= document.getElementById("first-name").value});

document.getElementById("last-name").addEventListener("blur", function() {
    lettersOnly();
    globalPerson.firstName= document.getElementById("last-name").value});

document.getElementById("email").addEventListener("blur", function() {
    emailValid();
    globalPerson.firstName= document.getElementById("email").value});

document.getElementById("user-id").addEventListener("blur", function() {

    globalPerson.firstName= document.getElementById("user-id").value});

document.getElementById("country").addEventListener("blur", function() {

    globalPerson.firstName= document.getElementById("country").value});

document.getElementById("state").addEventListener("blur", function() {
    globalPerson.firstName= document.getElementById("state").value});

document.getElementById("city").addEventListener("blur", function() {
    globalPerson.firstName= document.getElementById("city").value});

document.getElementById("phone").addEventListener("blur", function() {
    globalPerson.firstName= document.getElementById("phone").value});
   
document.getElementById("reference-code").addEventListener("blur", function() {

    globalPerson.firstName= document.getElementById("reference-code").value});

document.getElementById("continue-button").addEventListener("click", function() {
    checkCode();
    globalPerson.firstName= document.getElementById("reference-code").value});

document.getElementById("continue-button").addEventListener("click", function() {
    resetForm();
    globalPerson.firstName= document.getElementById("reference-code").value});