    
//---------------------------------- sign up ------------------------------\\ 
    function signup() 
{
        const email = document.getElementById('email_id').value
        const password = document.getElementById('password_id').value
        const Username = document.getElementById('user_id').value

    firebase.auth().createUserWithEmailAndPassword(email, password)
        
        .then(function(userResponse) 
    {
        const userId = userResponse.user.uid
        
        firebase.firestore().collection('users')
        
        .doc(userId)
        
        .set
        
        ({
            Username,
            email
        })
        
        .then(function() 
        {
            
            // alert("Successfully Registered!")

            swal
            ({
                title: "Sign up Successfully!",
                text: "Redirecting to Login",
                icon: "success",
                button: "Okay",
            })

              .then(function () 
            {
                //link login
		        window.location = '../index.html';
            });
            
        
        })
        
        .catch(function(error) {
            var errorMessage = error.message;
            // alert(errorMessage)
            swal
            ({
                title: "Wrong Credentials",
                text: "Password should be 6 character",
                icon: "error",
                button: "Okay",
            })

        })
    })
    
        .catch(function(error) 
    {
        
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        
        // alert(errorMessage)
        swal
        ({
            title: "Wrong Credentials!",
            text: "Password should be 6 character",
            icon: "error",
            button: "Okay",
        })
    
    });
        
    //form reaset method 
    document.getElementById('signUpform').reset();

}
//---------------------------------- sign up end ------------------------------\\ 


/*------------------------------ emailvalidation ------------------------*/

function email_validation()
{
    const form2 = document.getElementById('form2');
    const email = document.getElementById('email_id').value;

    const email_pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if(email.match(email_pattern))
    {
        form2.classList.remove("valid")
        form2.classList.add("invalid")
    }
        else
    {
        form2.classList.add("valid")
        form2.classList.remove("invalid")
    }
    if(email == "")
    {
        form2.classList.remove("valid")
        form2.classList.remove("invalid")
    }
    
}

/*------------------------------ passwordvalidation style ------------------------*/

    function password_validation()
{
    const form3 = document.getElementById('form3');
    const password = document.getElementById('password_id').value;

    const password_pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$ >";

        if(password.match(password_pattern))
    {
        form3.classList.remove("valid")
        form3.classList.add('invalid') 
    }
        else
    {
        form3.classList.add("valid")
        form3.classList.remove('invalid')
    }
        if(password == "")
    {
        form3.classList.remove("valid")
        form3.classList.remove("invalid")
    }

}

/*------------------------------ usernamevalidation ------------------------*/

function username_validation()
{
    const form1 = document.getElementById('form1');
    const email = document.getElementById('user_id').value;

    const username_pattern= "/^[a-z\d]+$/i";

        if(email.match(username_pattern))
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