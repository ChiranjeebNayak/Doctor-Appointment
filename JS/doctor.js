var name;
var dob;
var gender;
var phone;
var email;
var state;
var city;
var clinic;
var pwd;
var repwd;
var userId;

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
  name = document.getElementById("name").value;
  dob = document.getElementById("dob").value;
  gender = document.getElementById("gender").value;
  phone = document.getElementById("phone").value;
  email = document.getElementById("email").value;
  state = document.getElementById("countrySelect").value;
  city = document.getElementById("citySelect").value;
  clinic = document.getElementById("clinic").value;
  pwd = document.getElementById("password").value;
  repwd = document.getElementById("repassword").value;
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

  // alert('hello');
  //window.location.href = "index.html";

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, pwd)
    .then(function () {
      //alert("sucessfully!!!");
      firebase
        .auth()
        .currentUser.sendEmailVerification()
        .then(function () {
          firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
              // User is signed in.
              // alert(user.uid);
              userId = user.uid;
              // alert(userId);
            } else {
              // No user is signed in.
            }
          });

          setTimeout(datastore, 2000);

          alert(
            "Email Verification Sent!!! please verify it and login.Have a good day!!!"
          );
          // window.location.href = "index.html";
        });
    })
    .catch(function (error) {
      //Handle Errors here.

      var errorCode = error.code;
      var errorMessage = error.message;
      alert(error);

      // ...
    });
}
function datastore() {
  const ref = firebase.database().ref();
  ref.child("doctors/" + userId).set({
    Name: name,
    Email: email,
    DOB: dob,
    PHONE: phone,
    GENDER: gender,
    STATE: state,
    CITY: city,
    CLINIC: clinic,
    Dp:null;
  });
  window.location.href = "doctor.html";
}
