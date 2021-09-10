/// Sign Up Inputs
let SignUp_fName    = document.getElementById("SignUp_fName");
let SignUp_lName    = document.getElementById("SignUp_lName");
let SignUp_Email    = document.getElementById("SignUp_Email");
let SignUp_Pass     = document.getElementById("SignUp_Pass");
let SingUp_Btn      = document.getElementById("SingUp_Btn");

let Login_Email     = document.getElementById("Login_Email")
let Login_Pass      = document.getElementById("Login_Pass") 

const indexLocation = "index.html"
const homeLocation  = "home.html"
const loginForm = "loginForm"
const SingupForm ="SingupForm"
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


let fname = document.getElementById("fName")
let lname = document.getElementById("lName");

const myRegExp =/^[a-zA-Z]{3,}$/
const myRegExpEmail =/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/;
















///Password
let state = false;
let passwordStrength = document.getElementById("password-strength");
let lowUpperCase = document.querySelector(".low-upper-case i");
let number = document.querySelector(".one-number i");
let specialChar = document.querySelector(".one-special-char i");
let eightChar = document.querySelector(".eight-character i");
let strength;


    try{
    SignUp_Pass.addEventListener("keyup", function(){
        let pass = document.getElementById("SignUp_Pass").value
        checkStrength(pass)
    })    
    }
    catch(e)
    {
    }
    


function toggle(){
    if(state){
        document.getElementById("SignUp_Pass").setAttribute("type","password");
        state = false;
    }else{
        document.getElementById("SignUp_Pass").setAttribute("type","text")
        state = true;
    }
}

function ShowPass(show){
    show.classList.toggle("fa-eye-slash");
    show.classList.toggle("fa-eye");
}

function toggle1(){
    if(state){
        document.getElementById("Login_Pass").setAttribute("type","password");
        state = false;
    }else{
        document.getElementById("Login_Pass").setAttribute("type","text")
        state = true;
    }
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





















    try{


        (function(){

            SignUp_fName.addEventListener("keyup" ,function(){
                if(myRegExp.test(SignUp_fName.value))
                {
                    
                    SignUp_fName.className="form-control mt-3 bg-dark text-white is-valid "
                    var fname = document.getElementById("Vfname");
                    fname.className="d-none"
                }
                else{
                    SignUp_fName.className="form-control mt-3 bg-dark text-white is-invalid "
                    var fname = document.getElementById("Vfname");
                    fname.className=" mt-3 alert alert-danger d-block"
                }
            })
            SignUp_fName.addEventListener("focusout" ,function(){
                if(myRegExp.test(SignUp_fName.value))
                {
                    
                    SignUp_fName.className="form-control mt-3 bg-dark text-white is-valid "
                    var fname = document.getElementById("Vfname");
                    fname.className="d-none"
                }
                else{
                    SignUp_fName.className="form-control mt-3 bg-dark text-white is-invalid "
                    var fname = document.getElementById("Vfname");
                    fname.className=" mt-3 alert alert-danger d-block"
                }
            })
        
        
        
        
            SignUp_lName.addEventListener("keyup" ,function(){
                if(myRegExp.test(SignUp_lName.value))
                {
                    
                    SignUp_lName.className="form-control mt-3 bg-dark text-white is-valid "
                    var lname = document.getElementById("Vlname");
                    lname.className="d-none"
                }
                else{
                    SignUp_lName.className="form-control mt-3 bg-dark text-white is-invalid "
                    var lname = document.getElementById("Vlname");
                    lname.className=" mt-3 alert alert-danger d-block"
                }
            })
            SignUp_lName.addEventListener("focusout" ,function(){
                if(myRegExp.test(SignUp_lName.value))
                {
                    
                    SignUp_lName.className="form-control mt-3 bg-dark text-white is-valid "
                    var lname = document.getElementById("Vlname");
                    lname.className="d-none"
                }
                else{
                    SignUp_lName.className="form-control mt-3 bg-dark text-white is-invalid "
                    var lname = document.getElementById("Vlname");
                    lname.className=" mt-3 alert alert-danger d-block"
                }
            })
        //////////////////////
            SignUp_Email.addEventListener("keyup" ,function(){
                if(myRegExpEmail.test(SignUp_Email.value))
                {
                    
                    for (let i = 0; i < allUsers.length; i++) 
                    {
                        if(allUsers[i].Email.toLowerCase() == SignUp_Email.value.toLowerCase())
                        {
                            SignUp_Email.className="form-control my-3 bg-dark text-white is-invalid "
                            var emailMsg = document.getElementById("emailMsg");
                                emailMsg.className=" mt-3 alert alert-danger d-block"
                        }
                        else
                        {
                            SignUp_Email.className="form-control my-3 bg-dark text-white is-valid "
                            var email = document.getElementById("Vemail");
                            email.className="d-none"
                            var emailMsg = document.getElementById("emailMsg");
                                emailMsg.className=" d-none"
                        }
                    }
                }
                else
                {
                            SignUp_Email.className="form-control my-3 bg-dark text-white is-invalid "
                            var email = document.getElementById("Vemail");
                            email.className=" mt-3 alert alert-danger d-block"
                
                }
            })
            SignUp_Email.addEventListener("focusout" ,function(){
                if(myRegExpEmail.test(SignUp_Email.value))
                {
                    
                    for (let i = 0; i < allUsers.length; i++) 
                    {
                        if(allUsers[i].Email.toLowerCase() == SignUp_Email.value.toLowerCase())
                        {
                            SignUp_Email.className="form-control my-3 bg-dark text-white is-invalid "
                            var emailMsg = document.getElementById("emailMsg");
                                emailMsg.className=" mt-3 alert alert-danger d-block"
                        }
                        else
                        {
                            SignUp_Email.className="form-control my-3 bg-dark text-white is-valid "
                            var email = document.getElementById("Vemail");
                            email.className="d-none"
                            var emailMsg = document.getElementById("emailMsg");
                                emailMsg.className=" d-none"
                        }
                    }
                }
                else{
                    SignUp_Email.className="form-control my-3 bg-dark text-white is-invalid "
                    var email = document.getElementById("Vemail");
                    email.className=" mt-3 alert alert-danger d-block"
                }
            })
        
        /////
        
        
        SignUp_Pass.addEventListener("keyup" , function(){
            if(strength == 4)
            {
                SignUp_Pass.className="form-control my-3 bg-dark text-white is-valid "
                            
            }
            else
            {
                SignUp_Pass.className="form-control my-3 bg-dark text-white is-invalid "

            }
        })
        
        SignUp_Pass.addEventListener("focusout" , function(){
            if(strength == 4)
            {
                SignUp_Pass.className="form-control my-3 bg-dark text-white is-valid "
                            
            }
            else
            {
                SignUp_Pass.className="form-control my-3 bg-dark text-white is-invalid "

            }
        })
        
        
        })()
    



    }
    catch(e)
    {

    }










function singUp()
{
    

        let singUpFN = SignUp_fName.value;
        let singUpLN = SignUp_lName.value;
        let singUpE = SignUp_Email.value;
        let singUpP = SignUp_Pass.value;
    
        if(strength == 4 && myRegExp.test(singUpFN) && myRegExp.test(singUpLN) && myRegExpEmail.test(singUpE))
        {
            let oneUser = {FirstName : singUpFN , LastName : singUpLN , Email:singUpE , Password:singUpP };

        allUsers.push(oneUser);
        localStorage.setItem("SmartLoginSystem",JSON.stringify(allUsers));
        DisplaySuccess(indexLocation , SingupForm)
        }
        else
        {
           if(myRegExp.test(singUpFN)== false)
           {
            SignUp_fName.className="form-control mt-3 bg-dark text-white is-invalid "
            var fname = document.getElementById("Vfname");
            fname.className=" mt-3 alert alert-danger d-block"
           }
           
            if(myRegExp.test(singUpLN) == false)
            {
                SignUp_lName.className="form-control mt-3 bg-dark text-white is-invalid "
                var lname = document.getElementById("Vlname");
                lname.className=" mt-3 alert alert-danger d-block"
            }
            if(myRegExpEmail.test(singUpE) == false)
            {
                SignUp_Email.className="form-control my-3 bg-dark text-white is-invalid "
            var email = document.getElementById("Vemail");
            email.className=" mt-3 alert alert-danger d-block"
            }
            if(strength != 4 )
            {
                SignUp_Pass.className="form-control mt-3 bg-dark text-white is-invalid "

            }
            singUPValid()
        }


    
}

function DisplaySuccess(location , form)
{
    let singForm   =   document.getElementById(form)
    singForm.innerHTML=`  <div class="alert alert-success m-auto text-center">
        <p>success<i class="fas fa-check"></i></p>
        <p>you will be redirected automatically after 5 seconds</p>
        </div>  `
        setTimeout(function(){
            window.location.href = location;}, 5000);
}

function login()
{
    let loginE = Login_Email.value;
    let loginP = Login_Pass.value;

    for (let i = 0; i < allUsers.length; i++) {
        if(allUsers[i].Email == loginE && allUsers[i].Password == loginP)
        {
            currentUser  = [{loginUser:allUsers[i].Email , fname:allUsers[i].FirstName , lname:allUsers[i].LastName , pass :allUsers[i].Password}]
            sessionStorage.setItem("Loginuser" , JSON.stringify(currentUser))
            DisplaySuccess(homeLocation , loginForm)            
        }
        else
        {
            Login_Email.className="form-control my-3 bg-dark text-white is-invalid "
            Login_Pass.className="form-control my-3 bg-dark text-white is-invalid "
            var email = document.getElementById("VemailIn");
            email.className=" mt-3 alert alert-danger d-block"
            loginValid()
        }
    
    }
}


function load(){
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
function logout()
{
    

                sessionStorage.removeItem("Loginuser")
                setTimeout(function(){
                    window.location.href = "index.html";});
}



function loadonindex(){
    if(currentUser.length == 1)
    {
        setTimeout(function(){
            window.location.href = "home.html";});
            
    }
    
}