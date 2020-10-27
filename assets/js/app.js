/*
Instantiate the pass object to store our constant values, our password string components.
*/
const pass = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", // String to contain our upperCase characters.
    lowerCase: "abcdefghijklmnopqrstuvwxyz", // String to contain our lowerCase characters.
    numbers: "0123456789", // String to contain our numbers characters.
    special: "!@#$%^&*()_+-={}|[]\:<>?/" // String to contain our symbol characters.
}

// Create our password variables.

var pWord = "";
var passString = "";

// Store our pertinent DOM elements.
var options = $("#options");
var copyClipboard = $("#copyClipboard");
var inputBox = $("#inputBox");
var passLengthInput = $("#numInput");
var passLength = 12;
var allChecked = $(".form-check-input");
var newPassword = $("#newPassword");

var isUpper = true; var isLower = true; var isNumber = true; var isCharacter = true;

// Get our password length from the number input.
passLengthInput.on("change", function () {
    passLength = parseInt(passLengthInput.val());
    getPassword();
});

// Change what happens when our checkboxes are clicked.
options.on("change", ".form-check-input", function(){
    // Determine which checkboxes have been unchecked.
    if ((allChecked.length - 1) === allChecked.filter(":not(:checked)").length) {
        alert('You need at least two options to make a strong password');
        location.reload();
      }
        if ($(this).is(':not(:checked)') && $(this).val() === "incUpps"){
            isUpper = false;
        } if ($(this).is(':not(:checked)') && $(this).val() === "incLows"){
            isLower = false;
        } if ($(this).is(':not(:checked)') && $(this).val() === "incNums"){
            isNumber = false;
        } if ($(this).is(':not(:checked)') && $(this).val() === "incChars"){
            isCharacter = false;
            }

    getPassword();
})

getPassword();

/*
    the getPassword() function generates the actual password.
*/
function getPassword() {
    resetPassword();

    if (isUpper){
        passString += pass.upperCase;
    } if (isLower){
        passString += pass.lowerCase;
    } if (isNumber){
        passString += pass.numbers;
    } if (isCharacter){
        passString += pass.special;
    }
    console.log(passString);

        for (var i = 0; i < passLength; i++) {
            pWord += passString.charAt(Math.floor(Math.random() * passString.length));
        }
    setPassword(pWord);

}

function setPassword(){
    inputBox.attr('value', pWord);
}


/*
    The resetPassword() function clears our text input which
    holds the password, as well as our concatenated password variable.
*/
function resetPassword(){
    inputBox.empty();
    pWord = "";
    passString = "";
}

/*
    The copy() function simply copies the text input in the
    password box and stores it in the user's clipboard.
*/
  function copy(){
    inputBox.select();
    inputBox.setSelectionRange(0, 99999)
    inputBox.execCommand("copy");
  }


// Determine what our copy to clipboard button does.
copyClipboard.on("click", copy);

newPassword.on("click", getPassword);