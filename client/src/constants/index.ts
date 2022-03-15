const CONSTANTS = {
    TEXT: {
        FOOTER: {
            CONTACT_US: "Contact Us",
            YOUR_NAME: "Full name",
            YOUR_PHONE: "Phone",
            YOUR_EMAIL: "Email",
            SUBJECT: "Subject",
            MESSAGE: "Message",
            SEND: "Send",
            EMPTY: "This field cannot be empty.",
            EMAIL_ERROR: "This is not a valid email.",
        },
        SUCCESS_MODAL: {
            MESSAGE: "Your message was sent successfully!",
            CLOSE: "Close",
        },
        ERROR_MODAL: {
            MESSAGE: "Something went wrong. Please try again later!",
            CLOSE: "Close",
        },
        LOGIN_MODAL: {
            LOGIN: "Login",
            EMAIL: "Email",
            PASSWORD: "Password",
            SUBMIT: "Submit",
            NO_MATCH: "The email and password doesn't match.",
            MATCH: "You logged in successfully!",
            NO_ACCOUNT_YET: "You don't have an account yet? Register",
        },
        NAVBAR: {
            LOGIN: "Login",
            MY_ACCOUNT: "My account",
            HOME: "Home",
        },
        REGISTER: {
            EMAIL: "Email",
            FIRST_NAME: "First name",
            LAST_NAME: "Last name",
            PASSWORD: "Password",
            PHONE_NUMBER: "Phone number",
            REGISTER: "Register",
            EMPTY_ERROR: "Plesae fill out this field.",
            FIRST_NAME_ERROR: "Please fill out this field.",
            LAST_NAME_ERROR: "Please fill out this field.",
            EMAIL_ERROR: "This is not a valid email.",
            PASSWORD_ERROR: "Password should be blabla",
            PHONE_NUMBER_ERROR: "This is not a valid phone number.",
        },
    },
    SERVER: "http://192.168.0.248:4000",
    SERVER_PATHS: {
        LOGIN: "/user/login",
    },
};
export default CONSTANTS;
