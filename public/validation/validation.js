
export function validation(email,phone,emailErrorDoc,phoneErrorDoc){
  let emailError = document.getElementById(emailErrorDoc)
  emailError.innerHTML = ' '
  let phoneError = document.getElementById(phoneErrorDoc)
  phoneError.innerHTML = ' '
  console.log('yes')
    if(emailValidation(email) && phoneValidation(phone)){
        return true
    }else{
      if(!emailValidation(email)){
        emailError.style.color = 'red';
        emailError.innerHTML = 'Error: Invalid Email'
      } 
      if(!phoneValidation(phone)){
        phoneError.style.color = 'red';
        phoneError.innerHTML = 'Error: Invalid Phone Number'
      }
      return false
    }
};
function emailValidation(email){
    let RegExp = /([a-z0-9]+)@([a-z0-9]+)\.([a-z])/
    return RegExp.test(email);
};
function phoneValidation(phone){
    let RegExp = /([2-9]{1})([0-9]{9})/
    return RegExp.test(phone)
};

