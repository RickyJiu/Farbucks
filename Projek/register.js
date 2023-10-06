document.getElementById("form").addEventListener("submit",
(e) => {
    var username = document.getElementById("username").value;
    var youraddress = document.getElementById("add").value;
    var youremail = document.getElementById("youremail").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirmpassword").value;
    var term = document.getElementById("term").checked;

    if (username === '' || username === null){
        alert("Insert Your Username")
        e.preventDefault()
    }
    
    else if (youraddress === '' || youraddress === null ){
        alert("Insert Your Address")
        e.preventDefault()
    }

    else if (youremail === '' || youremail === null){
        alert("Insert Your Email")
        e.preventDefault()
    }

    else if (password === '' || password === null){
        alert("Insert Your Password")
        e.preventDefault()
    }

    else if (confirm === '' || confirm === null){
        alert("Confirm Your Password")
        e.preventDefault()
    }

    else if (password != confirm){
        alert("Password does not match!")
        e.preventDefault()
    }

    else if (!term){
        alert("Please Agree to Terms & Conditions")
        e.preventDefault()
    }
})