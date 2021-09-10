function loginValid(){
    Login_Email.addEventListener("keyup" ,function(){
        if(myRegExpEmail.test(Login_Email.value))
        {
                Login_Email.className="form-control my-3 bg-dark text-white is-valid "
                    var lemail = document.getElementById("VemailIn");
                    lemail.className="d-none"
    
        }
        else
        {
            Login_Email.className="form-control my-3 bg-dark text-white is-invalid "
                    
        
        }
    })

    Login_Email.addEventListener("foucsout" ,function(){
        if(myRegExpEmail.test(Login_Email.value))
        {
                Login_Email.className="form-control my-3 bg-dark text-white is-valid "
                    var lemail = document.getElementById("VemailIn");
                    lemail.className="d-none"
    
        }
        else
        {
            Login_Email.className="form-control my-3 bg-dark text-white is-invalid "
                
        
        }
    })

    Login_Pass.addEventListener("keyup" ,function(){
        if(Login_Pass.value != "")
        {
            Login_Pass.className="form-control my-3 bg-dark text-white is-valid "
                    var lpass = document.getElementById("VemailIn");
                    lpass.className="d-none"
    
        }
        else
        {
            Login_Pass.className="form-control my-3 bg-dark text-white is-invalid "
                    
        
        }
    })
}
