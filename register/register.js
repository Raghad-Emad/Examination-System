var btn = document.getElementById('btn');
var btn2 = document.querySelector('.form a');
var register_form = document.getElementById('register-form');
var registerBtn = document.getElementById('create');
var firstName = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var email = document.getElementById('email');
var password = document.getElementById('password');
var rePassword = document.getElementById('re-password');
var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// errors handling 
var fnameError=document.getElementById('fname-error');
var lnameError=document.getElementById('last-error');
var emailError=document.getElementById('email-error');
var passwordError=document.getElementById('password-error');
var rePasswordError=document.getElementById('rePassword-error');
var errors=document.getElementsByClassName('error');




registerBtn.addEventListener('click', function() {
    if(!formValidation()){
        return false
    }
    localStorage.setItem('firstName', firstName.value);
    localStorage.setItem('lastName', lastName.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    localStorage.setItem('re-password', rePassword.value);
    window.location.replace("login.html")
    return false;
})
function formValidation() {
    var count=0;
    errors.innerHTML='';

    if (firstName.value === '' || firstName.value === null) {
        fnameError.innerHTML='*First Name is Required';
        count++;
    }else{
        fnameError.innerHTML='';
    }
    if (isFinite(firstName.value)) {
        fnameError.innerHTML= '*First Name Must Be A String';
        count++;
    }else{
        fnameError.innerHTML='';
    }

    if (lastName.value === '' || lastName.value === null) {
        lnameError.innerHTML= '*Last Name is Required';
        count++;
    }else{
        lnameError.innerHTML='';
    }
    if (isFinite(lastName.value)) {
        lnameError.innerHTML= '*Last Name Must Be A String';
        count++;
    }else{
        lnameError.innerHTML='';
    }
    if (
        password.value === '' ||
        password.value === null ||
        password.value.length < 8
    ) {
        passwordError.innerHTML= '*Password is Required and greater than 8 characters';
        count++;
    }else{
        passwordError.innerHTML='';
    }
    if (
        rePassword.value === '' ||
        rePassword.value === null
    ) {
        rePasswordError.innerHTML= '*Password Confirmation is Required';
        count++;
    }else{
        rePasswordError.innerHTML='';
    }
    if (password.value !== rePassword.value) {
        rePasswordError.innerHTML= "*Password & Password Confirmation don't match";
        count++;
    }else{
        rePasswordError.innerHTML='';
    }
    if (
        email.value === '' ||
        email.value === null ||
        !emailReg.test(email.value)
    ) {
        emailError.innerHTML= '*Please Provide a Valid Email';
        count++;
    }else{
        emailError.innerHTML='';
    }
    
    if(count>0){
        return false;
    }
    return true;
}