const checkValidateData = (email, password, fullName) => {
  if (fullName) var isFullName = fullName.trim().length > 0;

  const isEmailValidate = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  const isPasswordValidate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(
    password
  );

  // if (!isFullName) return "Please enter the full name";
  if (!isEmailValidate) return "Email ID is not valid";
  if (!isPasswordValidate) return "Password is not valid";

  return null;
};

export default checkValidateData;
