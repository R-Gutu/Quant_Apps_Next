export const validateName = (name) => {
    const nameRegex = /^([a-zA-Z]{2,})( [a-zA-Z]{2,}){0,4}$/;
    return nameRegex.test(name);
};

export const validatePhone = (phone) => {
    const phoneRegex = /^(?=.*\d)[\d()+]*$/;
    return phone?.length >= 6 && phoneRegex.test(phone);
};

export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};