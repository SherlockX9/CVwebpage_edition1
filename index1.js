const form = document.querySelector("form[id='contact-me']");
const nameInput = document.querySelector("input[name='name']");
const emailInput = document.querySelector("input[name='email']");
const phoneInput = document.querySelector("input[name='phone']");
const messageInput = document.querySelector("textarea[name='message']");


nameInput.isValid = () => !!nameInput.value;
emailInput.isValid = () => isValidEmail(emailInput.value);
phoneInput.isValid = () => isValidPhone(phoneInput.value);
messageInput.isValid = () => !!messageInput.value;

const inputFields = [nameInput, emailInput, phoneInput, messageInput];

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
};

let shouldValidate = false;
let isFormValid = false;

const validateInputs = () => {
  console.log("we are here");
  if (!shouldValidate) return;

  isFormValid = true;
  inputFields.forEach((input) => {
    input.classList.remove("invalid");
    input.nextElementSibling.classList.add("hide");

    if (!input.isValid()) {
      input.classList.add("invalid");
      isFormValid = false;
      input.nextElementSibling.classList.remove("hide");
    }
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  shouldValidate = true;
  validateInputs();
  if (isFormValid) {
    // TODO: DO AJAX REQUEST
  }
});

inputFields.forEach((input) => input.addEventListener("input", validateInputs));
var todayDate = new Date();
var month = todayDate.getMonth() + 1;
var year = todayDate.getUTCFullYear() - 0; 
var tdate = todayDate.getDate()+1; 
  if(tdate < 10){
    tdate = '0' + tdate;
  }
  if(month < 10){
    month = '0' + month 
  }
  var minimumDate = year + "-" + month + "-" + tdate;
  document.getElementById("dem1").setAttribute('min', minimumDate);
  console.log(minimumDate);

  let form1 = document.getElementById("contact-me");
  let first_pass = form1.email;
  let confirm_pass = form1.emailX;
  first_pass.onchange = checkPassword;
  confirm_pass.onchange = checkPassword;

  
  
 function checkPassword(){
   let form1 = document.getElementById("contact-me");
  
   let first_pass = form1.email;
   let confirm_pass = form1.emailX;
   let errors = '';
     if(first_pass.value === confirm_pass.value){
     first_pass.setCustomValidity('');
     } else{
       errors += "Email addresses must match";
     }
     confirm_pass.setCustomValidity( errors);
    confirm_pass.reportValidity();
 }

 $('submit#buttonS').click(function(){
     var $inputs = $('form#contact-me :input[type="text"]'), 
     result = "";
     $inputs.each(function(){
         result+=$(this).val()+"<br>";
     });
     $('div#result').html(result);
 });