import {
  passwordRegex,
  lowerCaseRegex,
  upperCaseRegex,
  numberRegex,
  specialRegex,
} from "@/utils/constants";

const progessValidate = (pass) => {
  let value = 0;
  if (
    !lowerCaseRegex.test(pass) &&
    !upperCaseRegex.test(pass) &&
    !numberRegex.test(pass) &&
    !specialRegex.test(pass)
  ) {
    value = 0;
  }
  if (
    lowerCaseRegex.test(pass) ||
    upperCaseRegex.test(pass) ||
    numberRegex.test(pass) ||
    specialRegex.test(pass)
  ) {
    value = 20;
  }
  if (
    (lowerCaseRegex.test(pass) && upperCaseRegex.test(pass)) ||
    (numberRegex.test(pass) && specialRegex.test(pass)) ||
    (upperCaseRegex.test(pass) && numberRegex.test(pass)) ||
    (lowerCaseRegex.test(pass) && specialRegex.test(pass)) ||
    (lowerCaseRegex.test(pass) && numberRegex.test(pass)) ||
    (upperCaseRegex.test(pass) && specialRegex.test(pass))
  ) {
    value = 40;
  }
  if (
    (lowerCaseRegex.test(pass) &&
      upperCaseRegex.test(pass) &&
      numberRegex.test(pass)) ||
    (numberRegex.test(pass) &&
      specialRegex.test(pass) &&
      lowerCaseRegex.test(pass)) ||
    (upperCaseRegex.test(pass) &&
      numberRegex.test(pass) &&
      specialRegex.test(pass)) ||
    (lowerCaseRegex.test(pass) &&
      specialRegex.test(pass) &&
      upperCaseRegex.test(pass))
  ) {
    value = 80;
  }
  if (passwordRegex.test(pass)) {
    value = 100;
  }
  return value;
};

export default progessValidate;
