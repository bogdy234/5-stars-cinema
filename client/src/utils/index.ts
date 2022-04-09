export const isEmail = (email: string) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

export const isOnlyNumericInput = (phoneNumber: string) => {
    const re = /^[0-9\b]+$/;
    if (
        (!phoneNumber.match(re) && phoneNumber !== "") ||
        phoneNumber.length > 10
    ) {
        return false;
    }
    return true;
};

export const isValidPassword = (password: string) => {};

export const isValidPhoneNumber = (phoneNumber: string) => {
    const re =
        /^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/gim;
    if (phoneNumber.match(re)) {
        return true;
    }
    return false;
};

export const formatMinutes = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const newMinutes = minutes % 60;
    return `${hours}h ${newMinutes}min`;
};
