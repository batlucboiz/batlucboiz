function checkform() {
    let fname = document.getElementsByName('fname');
    console.log(faname.value);
    if(fname.value == '')
    {
        alert('First name is required');
        return false;
    }

    let phone = document.getElementById('phone');
    let bcheckPhone = validatePhoneNumber(phone.value);
    let errorspan = document.getElementById('phoneError');
    if(!bcheckPhone){
        errorspan.innerText = 'phone must be 10 digits';
        return false;
    }
    else
    {
        errorspan.innerText = '';
    }
    let email = document.getElementById('email');
    let bCheckEmail = validateEmail(email.value);
    let errorEmail = document.getElementById('emailError');
    if( !bCheckEmail ) {

        errorEmail.innerText = 'Email is not valid, must have @';
        return false;
    }
    else
    {
        errorEmail.innerText = '';
    }
    
    let password1 = document.getElementById('psw');
    let password2 = document.getElementById('psw-repeat');
    let passworError = document.getElementById('passwordMatchError');

    if(password1.value != password2.value )
    {
        passworError.innerText = 'Password not match';
        return false;
    }

    return true;
 
}
function validatePhoneNumber(input_str) {
    var re = /^\d{10}$/;
    return re.test(input_str);
}
function validateEmail(userEmail) {
    var regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    return regex.test(userEmail);
}