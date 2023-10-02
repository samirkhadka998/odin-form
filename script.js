const myform = document.getElementById('myForm');
myform.noValidate = true;

myform.addEventListener('submit', validateForm);

let allInput = document.querySelectorAll('input');
allInput = Array.from(allInput);
allInput.forEach(input => {
    input.addEventListener('mouseenter', ()=>{
        input.style.border = "2px solid blue"
    })
    input.addEventListener('mouseleave', ()=>{
        input.style.border = "1px solid gray"
    })
    
})


// validate form on submission
function validateForm(e) {

    const form = e.target;
    e.preventDefault()
    const firstName = document.querySelector("#firstName")
    const lastName = document.querySelector("#lastName")
    const email = document.querySelector("#email")
    const password = document.querySelector("#password");
    const cpassword = document.querySelector("#cpassword");
    const passInfo = document.querySelector('#passInfo');
    let message = '';

    if(!firstName.value){
        message+= "First Name is required.<br>";
    }
    if(!lastName.value){
      message+= "Last Name is required.<br>";
    }
    if(!email.value){
      message+= "Email  is required.<br>";
    }
    if(!password.value){
      message+= "Password  is required.<br>";
    }
    if(!cpassword.value){
      message+= "Confirm password  is required.<br>";
    }
    if(password.value != cpassword.value){
        message += "Password and Confirm Password didn't match.<br>"
        password.style.border= '2px solid red';
    }

    if(message){
      passInfo.style.color = 'red';
      passInfo.innerHTML = message;
      return;
    }
    else{
      password.style.border= '2px solid green';
      passInfo.style.color = 'green';
      passInfo.textContent = "Success!!!";
      return;
    }
    
  };