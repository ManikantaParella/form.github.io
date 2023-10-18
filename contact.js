var x;
var z;
var y;
var w;
function updateName() {
    var selected_state = document.getElementById("select_state").value;
    if(selected_state!=""){
        document.getElementById("promo").value=selected_state+"-PROMO";
        document.getElementById("myPromo").innerHTML="*";
    }
    else{
        document.getElementById("promo").value=selected_state+"";
        document.getElementById("myPromo").innerHTML="Name is required";
    }
  }
  
function validateName(){
    x=document.getElementById("fname").value;
    if(x==""){
        document.getElementById("myName").innerHTML="Name is required";
    }
    else{
        document.getElementById("myName").innerHTML="*";
    }
}
function promotionCode(){
    var w=document.getElementById("promo").value;
    if(w==""){
        document.getElementById("myPromo").innerHTML="Name is required";
    }
    else{
        document.getElementById("myPromo").innerHTML="*";
    }
}
function validateOrganization(){
     z=document.getElementById("organization").value;
    if(z==""){
        /*alert("Please fill the required details");*/
        document.getElementById("myOrganisation").innerHTML="Name is required";
    }
    else{
        document.getElementById("myOrganisation").innerHTML="*";
    }
}

/*function genderCheck(){
    if(document.getElementById("maleClick").checked){
        alert("Hello Sir!");
    }
    else
        alert("Hello Lady!");
}*/

function genderCheck(){
    var a = document.getElementsByName('gender');
    for(var i=0;i<a.length;i++){
        if(a[i].checked){
            if(a[i].value==='Male'){
                alert("Hello sir!");
            }else if(a[i].value==='Female'){
                alert("Hello Lady!");
            }
             
            break;
        }
    }
}  

function validateEmail()
{
    var y=document.getElementById("email").value;
    if (y!="")
    {
        var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(email.value.match(mailformat))
        {  
            document.getElementById("myEmail").innerHTML="*";
        }
        else
        {
            alert("Invalid email address.");
        }

    }
    else{
        document.getElementById("myEmail").innerHTML="Name is required";
        }
}

function validate(){
    required();
    validateName();
    validateEmail();
    validateOrganization();
    promotionCode();
}
function required(){
    x=document.getElementById("fname").value;
    y=document.getElementById("email").value;
    z=document.getElementById("organization").value;
    w=document.getElementById("promo").value;
    if(x==""|| y=="" ||z=="" || w==""){
        alert("Please fill the required details");
    }
}
    