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
    let numbersArray = ['0','1','2','3','4','5','6','7','8','9']
    for(let i = 0; i < input.length; i++){
        //console.log(`${input[i]} is ${typeof(input[i])}`)
        if(numbersArray.includes(input[i])){
            alert(`${input} is an invalid text field.`);
            break;
        }
    }
  }

  function numbersOnly(input) {   
    let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let counter = 0;
    for(let i = 0; i < input.length; i++, counter++){
        //console.log(`${input[i]} is ${typeof(input[i])}`);
        if(alphabet.includes(input[i])){
            alert(`User ID has an invalid character.`);
            break;
        };    
    }
    if(counter > 13){
        alert(`User ID has too many digits.`);
    } else if(counter < 13){
        alert(`User ID has too little digits.`);
    }
  }

  function emailValid(input) {
    if(input.includes('@')){
        let [test, domain] = input.split('@');
        if(test.length <= 3){
            alert("Email must have more than 3 characters before '@' sign.");
        }
        if(!domain.includes('.')){
            alert("Domain must contain a '.' character.");
        }
    }else(alert("Email must contain '@' character."));     
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
    globalPerson.firstName= document.getElementById("first-name").value;
    lettersOnly(globalPerson.firstName)});

document.getElementById("last-name").addEventListener("blur", function() {
    globalPerson.firstName= document.getElementById("last-name").value;
    lettersOnly(globalPerson.firstName)});

document.getElementById("email").addEventListener("blur", function() {
    globalPerson.firstName= document.getElementById("email").value
    emailValid(globalPerson.firstName)});

document.getElementById("user-id").addEventListener("blur", function() {
    globalPerson.firstName= document.getElementById("user-id").value;
    numbersOnly(globalPerson.firstName)});

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