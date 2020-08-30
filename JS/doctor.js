function back(){
    window.history.go(-1);
}
var citiesByState = {
    Odisha: ["Bhubaneswar","Puri","Cuttack","Bhadrak","Balasore","Balangir","Khordha","Keonjhar","Nabarangpur","Others"],
    Maharashtra: ["Mumbai","Pune","Nagpur"],
    Kerala: ["kochi","Kanpur"],
    }
    function makeSubmenu(value) {
    if(value.length==0) 
    document.getElementById("citySelect").innerHTML = "<option></option>";
    else {
    var citiesOptions = "";
    for(cityId in citiesByState[value]) {
    citiesOptions+="<option>"+citiesByState[value][cityId]+"</option>";
    }
    document.getElementById("citySelect").innerHTML = citiesOptions;
    }
    }
    function resetSelection() {
        document.getElementById("countrySelect").selectedIndex = 0;
        document.getElementById("citySelect").selectedIndex = 0;
        }