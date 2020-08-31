function back() {
  window.history.go(-1);
}
function register() {
  var name = document.getElementById("name").value;
  console.log(name);
  var dob = document.getElementById("dob").value;
  console.log(dob);
  var phone = document.getElementById("phone").value;
  console.log(dob);
  var email = document.getElementById("email").value;
  console.log(email);
  var pwd = document.getElementById("password").value;
  console.log(pwd);
  var repwd = document.getElementById("repassword").value;
  console.log(repwd);
  if (name == "") {
    alert("please write your name!!");
  }
  if ((dob = "")) {
    alert("Please give your DateofBirth!!");
  }
  if (phone == "") {
    alert("please give your phone number!!");
  } else if (phone.length != 10) {
    alert("Please give your 10 digit phone number!!");
  }
  if (email == "") {
    alert("Please give your email id!!");
  }
  if (pwd == "") {
    alert("Please give your  password!!");
  }
  if (repwd == "") {
    alert("Please give your password again!!");
  }

  if (pwd != repwd) {
    alert("Your password is not matched!!");
  }
  
}
