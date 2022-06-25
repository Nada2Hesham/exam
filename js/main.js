//////////////////// navbar  & animation

$('.i1').click(function(){
    let position = $('.wholeNav').offset().left;
    if(position == -250){
        $('.i1').addClass("fa-xmark");
        $('.wholeNav').css("left","0px");

        $('.a1').css("animation" ,"a1 0.5s forwards 0.5s");
        $('.a2').css("animation" ,"a2 0.7s forwards 0.5s");
        $('.a3').css("animation" ,"a3 0.9s forwards 0.5s");
        $('.a4').css("animation" ,"a4 1.1s forwards 0.5s");
        $('.a5').css("animation" ,"a5 1.3s forwards 0.5s");
        $('.a6').css("animation" ,"a6 1.5s forwards 0.5s");
    }
    else{
        $('.i1').removeClass("fa-xmark");
        $('.wholeNav').css("left","-250px")
    }

})


/////////////////////// rest of page
////// page content

//// API
// let api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Hv04MM7kvh1ps7sqNlIXxG-2Rl4RKjsINzwEFRq022F00EPJMoYSVBA;
// let APIURL ='';







/////////////////validation

let inputName = document.getElementById('name');

function nameValidation(){
    let NameVali = /^[a-z]|[A-Z]|[0-9]$/;
    let NameValue = NameVali.value;

    if(nameV.test(NameValue)==true){
    return true;
    }
    else{
    return false;
    }
}
inputName.addEventListener('blur',nameValidation)

let inputEmail = document.getElementById('email');

function emailValidation(){
    let EmailVali = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    let EmailValue = EmailVali.value;

    if(nameV.test(EmailValue)==true){
    return true;
    }
    else{
    return false;
    }
}
inputEmail.addEventListener('blur',emailValidation)