function back() {
  window.history.go(-1);
}
function register() {
  var name = document.getElementById("name").value;
  var dob = document.getElementById("dob").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var pwd = document.getElementById("password").value;
  var repwd = document.getElementById("repassword").value;

  if (name == "") {
    alert("please write your name!!");
    return false;
  }
  if (dob == "") {
    alert("Please give your DateofBirth!!");
    return false;
  }
  if (phone == "") {
    alert("please give your phone number!!");
    return false;
  } else if (phone.length != 10) {
    alert("Please give your 10 digit phone number!!");
    return false;
  }
  if (email == "") {
    alert("Please give your email id!!");
    return false;
  }
  if (pwd == "") {
    alert("Please give your  password!!");
    return false;
  }
  if (repwd == "") {
    alert("Please give your password again!!");
    return false;
  } else if (pwd != repwd) {
    alert("Your password is not matched!!");
    return false;
  }
  window.location.href="index.html";
}
