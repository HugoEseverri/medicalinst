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
    } else {
        const birthDate = new Date(input.birthdate);
        const today = new Date();
        const minYear = 1900;
        const maxYear = today.getFullYear() - 18;

        const age = today.getFullYear() - birthDate.getFullYear();
        const isBirthdayPassed =
            today.getMonth() > birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

        if (birthDate.getFullYear() < minYear || birthDate.getFullYear() > maxYear) {
            errors.birthdate = `El año debe estar entre ${minYear} y ${maxYear}.`;
        } else if (age < 18 || (age === 18 && !isBirthdayPassed)) {
            errors.birthdate = "Debes ser mayor de 18 años para registrarte.";
        }
    }

    if (!input.nDni) {
        errors.nDni = "Número de DNI requerido";
    } else if (!/^\d{7,8}$/.test(input.nDni)) {
        errors.nDni = "DNI inválido (Debe tener 7 u 8 dígitos)";
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


export const isWeekDay = (dateString) => {
    const date = new Date(dateString)
    const dayOfTheWeek = date.getDay();
    return dayOfTheWeek !== 5 && dayOfTheWeek !== 6
}

export const  isValidTime = (timeString) => {
    const [hour, minutes] = timeString.split(":").map(Number)
    if (hour < 8 || hour > 21 || (hour === 21 && minutes > 0)){
        return false
    }
    return true
}

export const isCancellable = (date, time) => {
    const appointmentDateTime = new Date(`${date}T${time}`);
    const now = new Date();
    const hoursDifference = (appointmentDateTime - now) / (1000 * 60 * 60);
    return hoursDifference > 24;
};