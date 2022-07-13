const formulario = document.querySelector('#formLogin');
const inputs = document.querySelectorAll('#formLogin input');


const expresiones = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{1,8}$/ // 4 a 12 digitos.

}

const validateForm = (e) => {
    switch (e.target.name) {
        case 'email':
            if (expresiones.email.test(e.target.value)) {
                document.querySelector('#username').classList.add('group-validate-correct-log');

            }
            else {
                document.querySelector('.group-validate-email-log').classList.remove('group-validate-correct-log');
                document.querySelector('.group-validate-email-log').classList.add('group-validate-errors-log')

            }
            break;
        // case 'password':
        //     if (expresiones.password.test(e.target.value)) {
        //         document.querySelector(`.group-validate-password-log`).classList.add('group-validate-correct-log');
        //         document.querySelector(`.p-errors_password-log p`).classList.remove('p-validate_errors-log')
        //         document.querySelector(`.p-errors_password-log p`).classList.add('p-validate-log')
        //     }
        //     else {
        //         document.querySelector(`.group-validate-password-log`).classList.remove('group-validate-correct-log');
        //         document.querySelector(`.group-validate-password-log`).classList.add('group-validate-errors-log')
        //         document.querySelector(`.p-errors_password-log p`).classList.remove('p-validate-log')
        //         document.querySelector(`.p-errors_password-log p`).classList.add('p-validate_errors-log')
        //     }
        //     break;
    }

    // const Validatelogin = (expresion, input, campo) => {
    //     if (expresion.test(input.value)) {
    //         document.querySelector(`.group-validate-${campo}-log`).classList.add('group-validate-correct');
    //         // document.querySelector(`.p-errors_${campo} p`).classList.remove('p-validate_errors')
    //         // document.querySelector(`.p-errors_${campo} p`).classList.add('p-validate')
    //     }
    //     else {
    //         // document.querySelector(`.group-validate-${campo}`).classList.remove('group-validate-correct');
    //         // document.querySelector(`.group-validate-${campo}`).classList.add('group-validate-errors')
    //         // document.querySelector(`.p-errors_${campo} p`).classList.remove('p-validate')
    //         // document.querySelector(`.p-errors_${campo} p`).classList.add('p-validate_errors')
    //     }
    // }


    inputs.forEach((input) => {
        input.addEventListener('keyup', validateForm);
        input.addEventListener('blur', validateForm)
    })

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
    })

}