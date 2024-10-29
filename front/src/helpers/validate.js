export const validateLogin = (input) => {
    const errors = {};


    if (!input.username) {
        errors.username = "Usuario requerido";
    } else if (!/^[a-zA-Z0-9]+$/.test(input.username)) {
        errors.username = "Usuario inválido";
    } else if (input.username.length > 50) {
        errors.username = "El usuario no puede tener más de 50 caracteres";
    }


    if (!input.password) {
        errors.password = "Contraseña requerida";
    } else if (input.password.length < 6) {
        errors.password = "La contraseña debe tener al menos 6 caracteres";
    } else if (!/[A-Za-z]/.test(input.password) || !/\d/.test(input.password)) {
        errors.password = "La contraseña debe contener al menos una letra y un número";
    } else if (input.password.length > 20) {
        errors.password = "La contraseña no puede tener más de 20 caracteres";
    }

    return errors;
}

export const validateRegister = (input) => {
    const errors = {};

    if (!input.name) {
        errors.name = "Nombre requerido";
    } else if (!/^[A-Za-z\s]+$/.test(input.name)) {
        errors.name = "El nombre solo debe contener letras y espacios";
    }

    if (!input.email) {
        errors.email = "Email requerido";
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
        errors.email = "Email inválido";
    }

    if (!input.birthdate) {
        errors.birthdate = "Fecha de nacimiento requerida";
    }

    if (!input.nDni) {
        errors.nDni = "Número de DNI requerido";
    } else if (!/^\d{8}$/.test(input.nDni)) {
        errors.nDni = "DNI inválido (Debe tener 8 dígitos)";
    }

    if (!input.username) {
        errors.username = "Nombre de usuario requerido";
    }

    if (!input.password) {
        errors.password = "Contraseña requerida";
    } else if (input.password.length < 6) {
        errors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    return errors;
};
