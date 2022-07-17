
var loginEmail = document.getElementById('login-email');
var loginPassword = document.getElementById('login-password');
var login = document.getElementById('login-btn');
var emailError=document.getElementById('email-error');
var passwordError=document.getElementById('password-error');

login.addEventListener('click', function() {
    if(!formValidation()){
        return false;
    }
    console.log('clicked');
    if (loginEmail.value == localStorage.getItem('email') && loginPassword.value == localStorage.getItem('password')) {
        window.location.replace("../exam_page/exam.html");
        return false;
    } else{
    alert('email or password incorrect');
    }
    return false;
})

function formValidation(){
    var count=0;
    if(loginEmail.value===''||loginEmail.value===null){
        emailError.innerHTML='*Email is required';
        count++;
    }else{
        emailError.innerHTML='';
    }
    if(loginPassword.value==''||loginPassword.value==null){
        passwordError.innerHTML='*Password is required';
        count++;
    }else{
        passwordError.innerHTML='';
    }
    console.log(count);
    if(count>0){
        return false;
    }
    return true;
}