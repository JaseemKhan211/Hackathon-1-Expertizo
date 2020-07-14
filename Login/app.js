
//----------------------------------logIn------------------------------\\ 
    
    function login() 
    
{
    
        const email = document.getElementById('email_id').value
        const password = document.getElementById('password_id').value
    
        firebase.auth().signInWithEmailAndPassword(email, password)
        
        .then(function(userResponse) 
        {
            
            const userId = userResponse.user.uid
            localStorage.setItem('userId', userId)

            swal
            ({
                title: "Login Successfully!",
                text: "Redirecting to transactions",
                icon: "success",
                button: "Okay",
            })

              .then(function () 
            {
                //link transation
		        window.location = './Transactions/index.html';
            });
            
          
        
        })
        
        .catch(function(error) 
        {
            
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...

            swal
            ({
                title: "Wrong Credentials!",
                text: "Please check your password",
                icon: "error",
                button: "Okay",
            })
        
        });
}

//----------------------------------logIn end------------------------------\\

/*------------------------------ emailvalidation ------------------------*/

    function email_validation()
{
    const form1 = document.getElementById('form1');
    const email = document.getElementById('email_id').value;

    const email_pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if(email.match(email_pattern))
    {
        form1.classList.remove("valid")
        form1.classList.add("invalid")
    }
        else
    {
        form1.classList.add("valid")
        form1.classList.remove("invalid")
    }
    if(email == "")
    {
        form1.classList.remove("valid")
        form1.classList.remove("invalid")
    }
    
}

/*------------------------------ passwordvalidation style ------------------------*/

    function password_validation()
{
    const form2 = document.getElementById('form2');
    const password = document.getElementById('password_id').value;

    const password_pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$ >";

        if(password.match(password_pattern))
    {
        form2.classList.remove("valid")
        form2.classList.add('invalid') 
    }
        else
    {
        form2.classList.add("valid")
        form2.classList.remove('invalid')
    }
        if(password == "")
    {
        form2.classList.remove("valid")
        form2.classList.remove("invalid")
    }

}

