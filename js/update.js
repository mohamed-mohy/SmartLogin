let updateEmail = document.getElementById("Update_Email")
let updatePass = document.getElementById("Update_Pass")
let updateForm = "updateForm"
var currentUser=[];
var allUsers = [];


if(localStorage.getItem("SmartLoginSystem") != null)
    {
        allUsers = JSON.parse(localStorage.getItem("SmartLoginSystem"))
    }
    
if(sessionStorage.getItem("Loginuser") != null)
{
    currentUser = JSON.parse(sessionStorage.getItem("Loginuser"))
}
updateEmail.value = currentUser[0].loginUser
updatePass.addEventListener("keyup" , function(){
    if(strength == 4)
    {
        updatePass.className="form-control my-3 bg-dark text-white is-valid "
    }
    else
    {
        updatePass.className="form-control my-3 bg-dark text-white is-invalid "

    }
})

updatePass.addEventListener("focusout" , function(){
    if(strength == 4)
    {
        updatePass.className="form-control my-3 bg-dark text-white is-valid "
    }
    else
    {
        updatePass.className="form-control my-3 bg-dark text-white is-invalid "

    }
})


updatePass.addEventListener("keyup", function(){
    let uppass = document.getElementById("Update_Pass").value
    checkStrength(uppass)
})
function toggleUp(){
    if(state){
        document.getElementById("Update_Pass").setAttribute("type","password");
        state = false;
    }else{
        document.getElementById("Update_Pass").setAttribute("type","text")
        state = true;
    }
}

function ShowPass(show){
    show.classList.toggle("fa-eye-slash");
    show.classList.toggle("fa-eye");
}


function checkStrength(password) {
    strength = 0;
    //If password contains both lower and uppercase characters
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        strength += 1;
        lowUpperCase.classList.remove('fa-circle');
        lowUpperCase.classList.add('fa-check');
    } else {
        lowUpperCase.classList.add('fa-circle');
        lowUpperCase.classList.remove('fa-check');
    }
    //If it has numbers and characters
    if (password.match(/([0-9])/)) {
        strength += 1;
        number.classList.remove('fa-circle');
        number.classList.add('fa-check');
    } else {
        number.classList.add('fa-circle');
        number.classList.remove('fa-check');
    }
    //If it has one special character
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
        strength += 1;
        specialChar.classList.remove('fa-circle');
        specialChar.classList.add('fa-check');
    } else {
        specialChar.classList.add('fa-circle');
        specialChar.classList.remove('fa-check');
    }
    //If password is greater than 7
    if (password.length > 7) {
        strength += 1;
        eightChar.classList.remove('fa-circle');
        eightChar.classList.add('fa-check');
    } else {
        eightChar.classList.add('fa-circle');
        eightChar.classList.remove('fa-check');   
    }

    // If value is less than 2
    if (strength < 2) {
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.remove('progress-bar-success');
        passwordStrength.classList.add('progress-bar-danger');
        passwordStrength.style = 'width: 10%';
    } else if (strength == 3) {
        passwordStrength.classList.remove('progress-bar-success');
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.classList.add('progress-bar-warning');
        passwordStrength.style = 'width: 60%';
    } else if (strength == 4) {
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.classList.add('progress-bar-success');
        passwordStrength.style = 'width: 100%';
        strength = 4;
    }
}





function update()
{
    
updateEmail.value = currentUser[0].loginUser

                for (let i = 0; i < allUsers.length; i++) {
                    currentUser  = [{loginUser:updateEmail.value , fname:allUsers[i].FirstName , lname:allUsers[i].LastName ,pass:updatePass.value}]
                    sessionStorage.setItem("Loginuser" , JSON.stringify(currentUser))
                if(currentUser[0].loginUser == allUsers[i].Email && strength == 4)
                {
                    allUsers[i]={FirstName :allUsers[i].FirstName, LastName :allUsers[i].LastName, Email:updateEmail.value , Password:updatePass.value 
                    };
                    localStorage.setItem("SmartLoginSystem" ,JSON.stringify(allUsers))
                    DisplaySuccess("home.html" , updateForm)
                }
                else
                {
                    
                    updatePass.className="form-control my-3 bg-dark text-white is-invalid "

                }
                    } 

}

function loadd(){
    if(currentUser.length == 0)
    {
        setTimeout(function(){
            window.location.href = "index.html";});
            
    }
    fname.value =currentUser[0].fname
    lname.value =currentUser[0].lname
    document.getElementById("fName").innerText=fname.value;
    document.getElementById("lName").innerText=lname.value;

}