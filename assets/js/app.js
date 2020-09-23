
var inputBox = document.getElementById("inputBox");
var copyClipboard = document.querySelector("#copyClipboard");
var newPassword = document.querySelector("#newPassword");
var lengthBox = document.getElementById("lengthBox");

generatePassword();

function generatePassword(){
    var pword = (Math.random().toString(36).slice(2)) + (Math.random().toString(36).slice(2));
    inputBox.setAttribute('value', pword);

    lengthBox.textContent = pword.length;
}

copyClipboard.addEventListener("click", function(){
    inputBox.select();
    inputBox.setSelectionRange(0, 99999)
    document.execCommand("copy");
});

newPassword.addEventListener("click", function(){
    generatePassword();
});

