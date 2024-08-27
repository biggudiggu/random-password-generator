//random password generator


const generateBtn = document.getElementById("generateBtn").addEventListener("click", function(){
  const passwordLength = parseInt(document.getElementById("passwordLength").value);
  const includeLowercase = document.getElementById("includeLowercase").checked;
  const includeUppercase = document.getElementById("includeUppercase").checked;
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeSymbols = document.getElementById("includeSymbols").checked;
  
  const password = generatePassword(passwordLength, 
    includeLowercase, 
    includeUppercase, 
    includeNumbers, 
    includeSymbols);

  document.getElementById("answer").innerHTML = `Your password is:<br><br>${password}`;
});


function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "-.+*#'^!§$%&/()=?^<>";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowerCaseChars : "";
  allowedChars += includeUppercase ? upperCaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if(passwordLength <= 0){
    return `(password length must be at least 1)`;
  }
  if(allowedChars.length === 0){
    return `(at least 1 set of character must be selected)`;
  }

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[index];
  }
  
  answer.textContent = `your password is: ${password}`;

  return password;
}