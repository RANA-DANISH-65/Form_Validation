const form=document.querySelector("form")
const emailField=document.querySelector(".email-field");
const emailInput=document.querySelector("#email");
const passField=document.querySelector(".create-password");
const passInput=document.querySelector("#password");
const cPassField=document.querySelector(".confirm-password");
const cPassInput=document.querySelector("#confirm-password");

const eyeIcons=document.querySelectorAll(".show-hide")

eyeIcons.forEach((eyeIcon)=>{
    eyeIcon.addEventListener("click",()=>{
        const pInput = eyeIcon.parentElement.querySelector("input");
        if(pInput.type==="password")
        {
            pInput.type="text";
            eyeIcon.classList.remove("bx-hide");
            eyeIcon.classList.add("bx-show");

        }else{
            pInput.type="password";
            eyeIcon.classList.remove("bx-show");
            eyeIcon.classList.add("bx-hide");

        }
    })

})

function checkPassword(){
    const password = passInput.value;
    const Ppattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(password.match(Ppattern)){
        passField.classList.remove("invalid");
        }else{
            passField.classList.add("invalid");
        }


}
function confirmPass() {
    if (passInput.value !== cPassInput.value || cPassInput.value === "") {
      return cPassField.classList.add("invalid");
    }
    cPassField.classList.remove("invalid");
  }



function checkEmail(){
  const emailPattern= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailInput.value.match(emailPattern))
        return emailField.classList.add("invalid");
    emailField.classList.remove("invalid");
}




form.addEventListener("submit",(e)=>{
    e.preventDefault();
    checkEmail();
    checkPassword();
    confirmPass();

    emailInput.addEventListener("keyup",checkEmail)
    passInput.addEventListener("keyup",checkPassword)
    cPassInput.addEventListener("keyup",confirmPass)
    
    
  if (
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
  ) {
    location.href = form.getAttribute("action");
  }
})