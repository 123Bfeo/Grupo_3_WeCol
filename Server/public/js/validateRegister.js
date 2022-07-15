const form = document.querySelector('#formRegister');
const inputs = document.querySelectorAll('#formRegister input');


const expresiones = {
    username: /^[a-zA-Z0-9\_\-\*\#]{4,7}$/, // Letras, numeros, guion y guion_bajo
    firstname: /^[a-zA-ZÀ-ÿ\s]{3,15}$/, // Letras y espacios, pueden llevar acentos.
    lastname: /^[a-zA-ZÀ-ÿ\s]{3,15}$/,
    password: /^.{1,8}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{1,10}$/, // 7 a 14 numeros.
    country: /^\d{1,4}$/,
    address: /^[a-zA-Z0-9\_\-\*\#\s]{4,20}$/
}

const validateForm = (e) => {
    switch (e.target.name) {
        case 'firstname':
            ValidateInput(expresiones.firstname, e.target, 'firstname')
            break;
        case 'lastname':
            ValidateInput(expresiones.lastname, e.target, 'lastname')
            break;
        case 'username':
            ValidateInput(expresiones.username, e.target, 'username')
            break;
        case 'email':
            ValidateInput(expresiones.email, e.target, 'email')
            break;
        case 'password':
            ValidateInput(expresiones.password, e.target, 'password')
            break;
        case 'phone':
            ValidateInput(expresiones.phone, e.target, 'phone')
            break;
        case 'country':
            ValidateInput(expresiones.country, e.target, 'country')
            break;
        case 'address':
            ValidateInput(expresiones.address, e.target, 'address')
            break;
    }

}

const ValidateInput = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.querySelector(`.group-validate-${campo}`).classList.add('group-validate-correct');
        document.querySelector(`.p-errors_${campo} p`).classList.remove('p-validate_errors')
        document.querySelector(`.p-errors_${campo} p`).classList.add('p-validate')
    }
    else {
        document.querySelector(`.group-validate-${campo}`).classList.remove('group-validate-correct');
        document.querySelector(`.group-validate-${campo}`).classList.add('group-validate-errors')
        document.querySelector(`.p-errors_${campo} p`).classList.remove('p-validate')
        document.querySelector(`.p-errors_${campo} p`).classList.add('p-validate_errors')
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm)
})


