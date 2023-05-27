console.log("File Linked");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
// console.log(username, email, password);
username.addEventListener("blur", () => {
  // Name Validation
  let RegUser = /^[A-Za-z][A-Za-z0-9_]{7,29}$/g;
  let str = username.value;
  console.log(RegUser, str);
  // let result = RegUser.exec(str)
  if (RegUser.test(str)) {
    console.log("Matched");
    username.classList.remove("is-invalid");
  } else {
    console.log("Not Matched");
    username.classList.add("is-invalid");
  }
});
email.addEventListener("blur", () => {
  // Email Validation
  let RegEmail =
    /(\w+|\.+\w+){1,10}@[a-zA-Z0-9]+\.([a-zA-Z0-9]+|\.[a-zA-Z0-9]+){1,3}$/g;
  let str = email.value;
  console.log(RegEmail, str);
  // let result = RegEmail.exec(str)
  // let flag;
  if (RegEmail.test(str)) {
    console.log("Matched");
    email.classList.remove("is-invalid");
  } else {
    console.log("Not Matched");
    email.classList.add("is-invalid");
  }
});
password.addEventListener("blur", () => {
  // Password Validation
  let RegPassword = /([-a-zA-Z0-9_.*\+@]){8,20}$/g;
  let str = password.value;
  console.log(RegPassword, str);
  if (RegPassword.test(str)) {
    console.log("Matched");
    password.classList.remove("is-invalid");
  } else {
    console.log("Not Matched");
    password.classList.add("is-invalid");
  }
});
