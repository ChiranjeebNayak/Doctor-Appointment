var name;
var dob ;
var phone;
var email;
var pwd;
var repwd;
var userId;



function back() {
  window.history.go(-1);
}
function register() {
   name = document.getElementById("name").value;
   dob = document.getElementById("dob").value;
   phone = document.getElementById("phone").value;
   email = document.getElementById("email").value;
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

  ref.child("patients/" + userId).set({
    Name: name,
    Email: email,
    Phone: phone,
    DOB: dob,
  });
   window.location.href = "patient.html";
}
