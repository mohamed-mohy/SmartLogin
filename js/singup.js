function singUPValid(){
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

    SignUp_Pass.addEventListener("keyup", function(){
        SignUp_Pass.className="form-control mt-3 bg-dark text-white is-invalid "
            if(strength == 4)
            {
                SignUp_Pass.className="form-control my-3 bg-dark text-white is-valid " 
            }
    })

}
