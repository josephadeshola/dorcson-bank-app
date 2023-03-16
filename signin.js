
function showAlart(msg, className) {
    alartmsg.innerText = msg;
    alartmsg.className = className
}
let allUser = []
if (localStorage.localDetails) {
    allUser = JSON.parse(localStorage.getItem("localDetails"))

}
const signIn = () => {
    let userDetails =
    {
        firstname: first.value,
        lastname: last.value,
        password: pass.value,
        email: email.value,
    }
 
    if (first.value == "" || last.value == "" || email.value == "" || pass.value == "") {
         showAlart("should not be empty", "alert alert-danger")
         setTimeout(() => {
             alartmsg.className = ""
             alartmsg.innerText = ""
 
         }, 2000)
     }
     else if(check.checked==false){
        alert("no way")
    }
    else if(pass.value!==last.value){
        showAlart("Reset your password", "alert alert-danger")
        setTimeout(() => {
            alartmsg.className = ""
            alartmsg.innerText = ""
        },2000)
    }
    

    else {
        last.value = "";
        first.value = "";
        email.value = "";
        pass.value = "";
        allUser.push(userDetails)
        console.log(allUser)
        localStorage.setItem("localDetails", JSON.stringify(allUser))
            window.location.href = "signup.html"
    }
}

