let url = document.getElementById("url");
url.addEventListener("blur", () => {
  // Password Validation
  let RegUrl =
    /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})/g;
  let str = url.value;
  console.log(RegUrl, str);
  if (RegUrl.test(str)) {
    console.log("Matched");
    url.classList.remove("is-invalid");
  } else {
    console.log("Not Matched");
    url.classList.add("is-invalid");
  }
});
