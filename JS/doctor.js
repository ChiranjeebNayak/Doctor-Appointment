function back() {
  window.history.go(-1);
}
var citiesByState = {
  Odisha: [
    "Bhubaneswar",
    "Puri",
    "Cuttack",
    "Bhadrak",
    "Balasore",
    "Balangir",
    "Khordha",
    "Keonjhar",
    "Nabarangpur",
    "Others",
  ],
  Maharashtra: ["Mumbai", "Pune", "Nagpur"],
  Kerala: ["kochi", "Kanpur"],
};
function makeSubmenu(value) {
  if (value.length == 0)
    document.getElementById("citySelect").innerHTML = "<option></option>";
  else {
    var citiesOptions = "";
    for (cityId in citiesByState[value]) {
      citiesOptions += "<option>" + citiesByState[value][cityId] + "</option>";
    }
    document.getElementById("citySelect").innerHTML = citiesOptions;
  }
}
function resetSelection() {
  document.getElementById("countrySelect").selectedIndex = 0;
  document.getElementById("citySelect").selectedIndex = 0;
}
function register() {
  var name = document.getElementById("name").value;
  var dob = document.getElementById("dob").value;
  var gender = document.getElementById("gender").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var state = document.getElementById("countrySelect").value;
  var city = document.getElementById("citySelect").value;
  var clinic = document.getElementById("clinic").value;
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
  if (gender == "") {
    alert("please enter your gender!!");
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
  if (state == "") {
    alert("please enter your state!!");
    return false;
  }
  if (city == "") {
    alert("please enter your city!!");
    return false;
  }
  if (clinic == "") {
    alert("please enter your Clinic name else write 'NO' !!");
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
  window.location.href = "index.html";
}
