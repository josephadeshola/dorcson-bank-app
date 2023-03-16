let allUser = JSON.parse(localStorage.getItem
   ("localDetails"))
let currentuserdetails = JSON.parse(localStorage.getItem
   ("currentuserdetails"))
disp.innerHTML = "WELCOME " + allUser[currentuserdetails].firstname

window.location.href = "atm.html"