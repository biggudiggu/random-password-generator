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
    return `()`;
  }

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[index];
  }

  return password;
}


const passwordLength = 10;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;


const password = generatePassword(passwordLength, 
                                  includeLowercase, 
                                  includeUppercase, 
                                  includeNumbers, 
                                  includeSymbols);


console.log(password);                                  