function updateName() {
    var selected_state = document.getElementById("select_state").value;
    if (selected_state != "") {
        document.getElementById("promo").value = selected_state + "-PROMO";
        document.getElementById("name3").innerText = "*";
        return true;
    }
    else {
        document.getElementById("promo").value = selected_state + "";
        document.getElementById("name3").innerText = "Name is required";
        return false;
    }
}

function validateName() {
    var names = document.getElementsByClassName("name");
    var emailBox = document.getElementById("email").value;
    var validation_status=false;
   
    for (var i = 0; i < names.length; i++) {
        if (names[i].value == "") {
            console.log("name" + (0 + 1));
            document.getElementById("name" + (i + 1)).innerText = "Name is required";
        }
        else {
            document.getElementById("name" + (i + 1)).innerText = "*";
            validation_status=true;
        }
    }

    if (emailBox != "") {
        var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (email.value.match(mailformat)) {
            document.getElementById("myEmail").innerText = "*";
            
        }
        else {
            alert("Invalid email address.");
            validation_status=false;
        }

    }
    else {
        document.getElementById("myEmail").innerText = "Name is required";
        validation_status=false;
    }
    return validation_status;

}
function genderCheck() {
    var genderRadio = document.getElementsByName('gender');
    for (var i = 0; i < genderRadio.length; i++) {
        if (genderRadio[i].checked) {
            if (genderRadio[i].value === 'Male') {
                alert("Hello sir!");
            } else if (genderRadio[i].value === 'Female') {
                alert("Hello Lady!");
            }
            return true;
        }
        else{
            return false;
        }
    }
}
function required(){
    var names = document.getElementsByClassName("name");
    var feild=0;
    for (var i = 0; i < names.length; i++) {
        if (names[i].value == "") {
           feild=1;
        }
    }
    if(feild==1){
        alert("Please fill the Required feilds");
    }

}
function validate(){
    required();
    let statusOfNameUpdate=updateName();
    let statusOfNamesValidate=validateName();
    let statusOfGenderCheck=genderCheck();
    if(statusOfNameUpdate && statusOfNamesValidate && statusOfGenderCheck){
        return true;
    }
    else{

        return false;
    }
}

/* w = document.getElementById("promo").value;
 z = document.getElementById("organization").value;*/

/* if (x == "") {
     document.getElementById("myName").innerHTML = "Name is required";
 }
 else {
     document.getElementById("myName").innerHTML = "*";
 }
 if (w == "") {
     document.getElementById("myPromo").innerHTML = "Name is required";
 }
 else {
     document.getElementById("myPromo").innerHTML = "*";
 }
 if (z == "") {
    
     document.getElementById("myOrganisation").innerHTML = "Name is required";
 }
 else {
     document.getElementById("myOrganisation").innerHTML = "*";
 }*/

/*function promotionCode() {
    var w = document.getElementById("promo").value;
    if (w == "") {
        document.getElementById("myPromo").innerHTML = "Name is required";
    }
    else {
        document.getElementById("myPromo").innerHTML = "*";
    }
}
function validateOrganization() {
    z = document.getElementById("organization").value;
    if (z == "") {
       
        document.getElementById("myOrganisation").innerHTML = "Name is required";
    }
    else {
        document.getElementById("myOrganisation").innerHTML = "*";
    }
}*/


/*function validateEmail() {
    var y = document.getElementById("email").value;
    if (y != "") {
        var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (email.value.match(mailformat)) {
            document.getElementById("myEmail").innerHTML = "*";
        }
        else {
            alert("Invalid email address.");
        }

    }
    else {
        document.getElementById("myEmail").innerHTML = "Name is required";
    }
}*/


/*function required() {
    x = document.getElementById("fname").value;
    y = document.getElementById("email").value;
    z = document.getElementById("organization").value;
    w = document.getElementById("promo").value;
    if (x == "" || y == "" || z == "" || w == "") {
        alert("Please fill the required details");
    }
}*/
