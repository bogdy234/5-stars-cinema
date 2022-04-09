const CONSTANTS = {
    TEXT: {
        RESERVATION_MODAL:{
            CONFIRM: 'Confirma',
            PLEASE_SELECT:'Selecteaza data si ora:',
        },
        SEATS_AREA:{
            SCREEN:"Ecran",
            UNAVAILABLE: 'Indisponibil',
            AVAILABLE:'Disponibil',
            SELECTED:'Selectat',
        },
        MOVIE_PAGE: {
            PREMIERE: "Premiera",
            TITLE: "Titlu",
            PRODUCTION_YEAR: "Anul productiei",
            MOVIE_LENGTH: "Durata filmului",
            GENRE: "Gen",
            ACTORS: "Actori",
            FORMAT: "Format",
            DIRECTION: "Regia",
            TRAILER: "Trailer",
            RESERVE: "Rezerva",
        },
        FOOTER: {
            CONTACT_US: "Formular de contact",
            YOUR_NAME: "Nume complet",
            YOUR_PHONE: "Phone",
            YOUR_EMAIL: "Email",
            SUBJECT: "Subiect",
            MESSAGE: "Mesaj",
            SEND: "Send",
            EMPTY: "Acest camp trebuie completat.",
            EMAIL_ERROR: "Acesta nu este un email valid.",
        },
        SUCCESS_MODAL: {
            CONTACT_MESSAGE: "Your message was sent successfully!",
            REGISTER: "Your account has been succesfully created!",
            CLOSE: "Inchide",
        },
        ERROR_MODAL: {
            MESSAGE: "A aparut o eroare. Te rog incearca mai tarziu!",
            CLOSE: "Inchide",
        },
        LOGIN_MODAL: {
            LOGIN: "Login",
            EMAIL: "Email",
            PASSWORD: "Parola",
            SUBMIT: "Submit",
            NO_MATCH: "Email-ul si parola nu se potrivesc.",
            MATCH: "Te-ai autentificat cu succes!",
            NO_ACCOUNT_YET: "Nu ai cont inca? Inregistreaza-te",
        },
        NAVBAR: {
            LOGIN: "Login",
            MY_ACCOUNT: "Contul meu",
            HOME: "Acasa",
        },
        REGISTER: {
            EMAIL: "Email",
            FIRST_NAME: "Prenume",
            LAST_NAME: "Nume",
            PASSWORD: "Parola",
            PHONE_NUMBER: "Numar telefon",
            REGISTER: "Register",
            EMPTY_ERROR: "Acest camp trebuie completat.",
            FIRST_NAME_ERROR: "Acest camp trebuie completat.",
            LAST_NAME_ERROR: "Acest camp trebuie completat.",
            EMAIL_ERROR: "Acesta nu este un email valid.",
            PASSWORD_ERROR: "Password should be blabla",
            PHONE_NUMBER_ERROR: "Acesta nu este un numar de telefon valid.",
        },
        MOVIE_CARD: {
            FORMAT: "Format",
            RATING: "Rating",
            GENRE: "Gen",
            PREMIERE: "Premiera",
            THREE_D: "3D",
            NORMAL: "Normal",
            TRAILER: "Trailer",
        },
    },
    SCREENS: {
        SM: "768px",
    },
    SERVER: "http://192.168.0.248:4000",
    SERVER_PATHS: {
        LOGIN: "/user/login",
    },
};
export default CONSTANTS;
