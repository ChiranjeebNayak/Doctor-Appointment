function back(){
    window.history.go(-1);
}
function register(){
    var name= document.getElementById("name").value;
    console.log(name);
    var dob= document.getElementById("dob").value;
    console.log(dob);
    var phone= document.getElementById("phone").value;
    console.log(dob);
    var email= document.getElementById("email").value;
    console.log(email);
    var pwd=document.getElementById("password").value;
    console.log(pwd);
    var repwd= document.getElementById("password").value;
    console.log(repwd);
    return true;
}