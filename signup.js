const showAlart=(msg,className)=>{
    alartmsg.innerText=msg;
    alartmsg.className=className
}

let allUser = JSON.parse(localStorage.getItem("localDetails"))
// console.log(allUser)
const signUp= ()=>{
    var found=false
    allUser.map((user,i)=>{
        if (user.email==ee.value && user.password==ep.value) {
            localStorage.setItem("currentuserdetails",i)
            found=true
        }
    }) 
    
     if(found==true){
        window.location.href = "confirm.html"
    
    }
    else if(ee.value=="" || ep.value==""){
        showAlart("can not be empty","alert alert-danger")
        setTimeout(() => {
            alartmsg.className=""
            alartmsg.innerText=""
        }, 2000);

    }
    else{
        showAlart("wroung password","alert alert-danger")
        setTimeout(() => {
            alartmsg.className=""
            alartmsg.innerText="" 
        }, 2000);
    }
}
