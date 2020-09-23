const charMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*/?";
var maxLen = charMap.length;
var numInput = document.querySelector("input[type='number']");
var newPassword = document.querySelector("#newPassword");
var showAlert = document.querySelector(".show-alert");
var dangerous = false;
let length = Number(numInput.value);
let pWord = "";


generatePassword();


function generatePassword(){
for (var i = 0; i < length; i++){
  pWord += charMap.charAt(Math.floor(Math.random() * maxLen))
    }
    inputBox.setAttribute('value', pWord);
    
}   

newPassword.addEventListener("click", function(){
  pWord = "";
  generatePassword();
});

numInput.addEventListener("change", function(){
pWord = "";
  length = numInput.value;
  generatePassword();

  /*if(length < 10){
    dangerous = true;
  }
  
  if(dangerous){
    showAlert.classList.toggle("dangerous-hidden");
  } */

});

copyClipboard.addEventListener("click", function(){
  inputBox.select();
  inputBox.setSelectionRange(0, 99999)
  document.execCommand("copy");
});

