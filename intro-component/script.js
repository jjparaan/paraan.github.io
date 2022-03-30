const form = document.getElementById('form')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs();
})

function checkInputs() {
    // get the values from the inputs
    const firstnameValue = fname.value.trim()
    const lastnameValue = lname.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    if(fname.value === '' || fname.value == null) {
        // show error
        // add error class
        setErrorFor(fname, 'First Name cannot be empty')
    } else {
        // add success class
        setSuccessFor(fname)
    }

    if(lname.value === '' || lname.value == null) {
        // show error
        // add error class
        setErrorFor(lname, 'Last Name cannot be empty')
    } else {
        // add success class
        setSuccessFor(lname)
    }

    if(email.value === '' || email.value == null) {
        setErrorFor(email, 'Email cannot be empty')
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Looks like this is not an email')
    } else {
        setSuccessFor(email)
    }

    if(password.value === '' || password.value == null) {
        // show error
        // add error class
        setErrorFor(password, 'Last Name cannot be empty')
    } else {
        // add success class
        setSuccessFor(password)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement // .form-control
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

function isEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}