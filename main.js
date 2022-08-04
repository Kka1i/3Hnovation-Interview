function validation() {
    let email = document.getElementsByClassName("email")[0].value;
    let pwd = document.getElementsByClassName("password")[0].value;

    if(email == '' || pwd == '') {
        alert('All fields are required');
    }
    else{
        if(validateEmail(email)) {
            alert('You have successfully logged in');
        }   
        else {
            alert('Enter a valid email');
        }
    }
}

function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
}