
const regForm = document.querySelector ('#regForm')


regForm.addEventListener ('submit' , e => {
    e.preventDefault()

    const firstName =document.querySelector('#firstName')
    const lastName =document.querySelector('#lastName')
    const email =document.querySelector('#email')
    const password =document.querySelector('#password')
    const repeatPassword =document.querySelector('#repeat-password')
    const terms =document.querySelector('#terms')

    if(!validateForm(regForm)) {
        return
    }
    
    const user = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
    }

    console.log(user)
})



const validateForm = (form) => {
    const errors = []
    for(let i = 0; i < form.length; i++) {
        const input = form[i]
        input.parentElement.classList.remove('error')
        if(!input.required) continue

        errors.push(validationSwitch(input))


    }

    if(errors.includes(false)) return false

    return true
}

const validationSwitch = (input) => {
    switch(input.type) {
    case 'text': return validateText(input)
    case 'email': return validateEmail(input)
    case 'password': return validatePassword(input)
    case 'checkbox': return
    default: break;
    }
}




const setError = (input, message) => {
    const parent = input.parentElement;
    parent.classList.add('error')

    const errorElement = parent.querySelector('.invalid-input');
    errorElement.innerText = message
}

const validateText = (input) => {
    if(input.value.trim () === '') {
        setError(input, 'This field can\t be empty')

    return false

    } else if (input.value.trim().length < 2) {
        setError(input, 'This must be atleast 2 chars long')
        return false
    }
}

const validateEmail = (input) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 


    if(input.value.trim().length <= 0) {
       setError(input, 'You need to enter an email address')
       return false
    }

    else if(!emailRegex.test(input.value)) {
        setError(input, 'You need to enter a VALID email address')
        return false
    }

    return true
}

const validatePassword = (input) => {
    const passwordRegex = /^(?=.*\d).{5,}$/;
    if(input.value.trim () === '') {
        setError(input, 'Password can\´t be empty')

    return false
}
else if(!passwordRegex.test(input.value)) {
    setError(input, 'The password must contain atleast 5 characters and one number')
    return false
}
return true
}