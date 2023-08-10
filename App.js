//creating a constructor is best practice and makes it easier to work with the person object since
//we can can create an empty object and still refer to all the fields as well as change 
//them step for step, it also makes error handling easier
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
    let numbersArray = ['0','1','2','3','4','5','6','7','8','9'];
    let specialArray = ['!','@','#','$','%','^','&','*','(',')','_','+','=','`','~',',','<','>','.','/','?','|'];
    for(let i = 0; i < input.length; i++){
        //console.log(`${input[i]} is ${typeof(input[i])}`)
        if(numbersArray.includes(input[i]) || specialArray.includes(input[i])){
            alert(`${input} is an invalid text field.`); 
            break;
        }
    }
  }

  function numbersOnly(input) {   
    let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let specialArray = ['!','@','#','$','%','^','&','*','(',')','_','+','=','`','~',',','<','>','.','/','?','|'];
    let counter = 0;
    for(let i = 0; i < input.length; i++, counter++){
        //console.log(`${input[i]} is ${typeof(input[i])}`);
        if(alphabet.includes(input[i]) || specialArray.includes(input[i])){
            alert(`Phone number has an invalid character.`);
            break;
        };    
    }

  }

  function noSpecialCharecters(input) {
    
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

  //this will be our global refrence code which wil be regenerated every
  //time we click in the refrence code input box
  let referenceCode;

  //this wil be our global person which will store all our inputed values
  let globalPerson= new Person();


  //the following code is adding event listners to each input field and processing
  //the info typed in
  //each text field has the "blur" listener since we want to check and add the values
  //after the person finished typing it in
  document.getElementById("first-name").addEventListener("blur", function() {
    globalPerson.firstName= document.getElementById('first-name').value;
    lettersOnly(globalPerson.firstName)});

  document.getElementById("last-name").addEventListener("blur", function() {
    globalPerson.lastName= document.getElementById("last-name").value;
    lettersOnly(globalPerson.lastName)});

  document.getElementById("email").addEventListener("blur", function() {
    globalPerson.email= document.getElementById("email").value
    emailValid(globalPerson.email)});


  document.getElementById("user-id").addEventListener("blur", function() {
    globalPerson.userID= document.getElementById("user-id").value;});

  document.getElementById("country").addEventListener("blur", function() {

    globalPerson.country= document.getElementById("country").value});

  document.getElementById("state").addEventListener("blur", function() {
    globalPerson.state= document.getElementById("state").value});

  document.getElementById("city").addEventListener("blur", function() {
    globalPerson.city= document.getElementById("city").value});

  document.getElementById("phone").addEventListener("blur", function() {
    globalPerson.phone= document.getElementById("phone").value
    numbersOnly(globalPerson.phone)});
   
  document.getElementById("reference-code").addEventListener("blur", function() {

    globalPerson.referenceCode= document.getElementById("reference-code").value});

  //the buttons have the "click" eventlistner since we want to check the form after
  //the button is clicked
  document.getElementById("continue-button").addEventListener("click", function() {
    checkCode();});

  document.getElementById("continue-button").addEventListener("click", function() {
    resetForm();});

    function resetForm(){
      document.getElementById("first-name").value = '';
      document.getElementById("last-name").value = '';
      document.getElementById("email").value = '';
      document.getElementById("user-id").value = '';
      document.getElementById("phone").value = '';
      document.getElementById("reference-code").value = '';
    } 
    // The function resetForm is created to clear all fields.

    function Redisplay() {
      window.location.href = "redisplay.html";
    }