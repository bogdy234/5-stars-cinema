const CONSTANTS = {
  TEXT: {
    VIEW_RUNNING_TIMES: {
      HALL_NUMBER: "Numar sala",
      DELETE: "Sterge",
    },
    ADMIN_RESERVATIONS: {
      RESERVATION_ID: "Id-ul rezervarii",
      SEARCH: "Cauta",
      ID_ERROR: "Id-ul rezervarii este invalid.",
      DELETE: "Sterge rezervarea",
      NOT_FOUND: "Nu a fost gasita nicio rezervare cu aceste date.",
      EDIT: "Modifica",
      FIRST_NAME: "Prenume",
      LAST_NAME: "Nume",

<<<<<<< Updated upstream
      OPTIONS: ["Cauta dupa nume", "Cauta dupa id"],
    },
    EDIT_MOVIE_MODAL: {
      TITLE: "Titlu:",
      DESCRIPTION: "Descriere:",
      LENGTH: "Durata (minute):",
      COVER_IMAGE: "Imagine (url):",
      TRAILER_URL: "Trailer (url):",
      RATING: "Rating:",
      GENRE: "Gen:",
      PRODUCTION_YEAR: "Anul aparitiei:",
      PRODUCER: "Producator:",
      DIRECTION: "Regizor:",
      ACTORS: "Actori:",
      IS_3D: "3D:",
      IS_PREMIERE: "Premiera:",
      CONFIRM: "Confirma",
    },
    ADD_TIME_MODAL: {
      CHOOSE_DATE: "Alege data:",
      CONFIRM: "Confirma",
      CHOOSE_HALL: "Alege sala:",
    },
    ADD_MOVIE_MODAL: {
      TITLE: "Titlu:",
      DESCRIPTION: "Descriere:",
      LENGTH: "Durata (minute):",
      COVER_IMAGE: "Imagine (url):",
      TRAILER_URL: "Trailer (url):",
      RATING: "Rating:",
      GENRE: "Gen:",
      PRODUCTION_YEAR: "Anul aparitiei:",
      PRODUCER: "Producator:",
      DIRECTION: "Regizor:",
      ACTORS: "Actori:",
      IS_3D: "3D:",
      IS_PREMIERE: "Premiera:",
      CONFIRM: "Confirma",
    },
    MOVIES_TABLE: {
      TITLE: "Titlu",
      POSTER: "Poster",
      YEAR: "An",
      DELETE: "Sterge",
      EDIT: "Modifica",
      ADD_MOVIE: "Adauga film",
      RUNNING_TIME: "Timp rulare",
      ADD: "Adauga",
      VIEW: "Vezi rularile curente",
    },
    ADMIN_NAV: {
      MOVIES: "Filme",
      RESERVATIONS: "Rezervari",
    },
    MY_RESERVATIONS: {
      NO_RESERVATIONS: "Nu aveti rezervari inregistrate.",
      DELETE: "Sterge rezervare",
    },
    RESERVATION_CARD: {
      RESERVATION: "Rezervare",
      RESERVATION_ID: "Rezervare ",
      HALL: "Sala",
      SEATS: "Locuri: ",
      NORMAL_TICKETS: "Bilet intreg:",
      REDUCED_TICKETS: "Bilet Copii/Elevi/Studenti:",
      TOTAL_PRICE: "Pret total:",
    },
    SEATS_PAGE: {
      HALL: "Sala",
      NORMAL_TICKETS: "Bilet intreg",
      REDUCED_TICKETS: "Bilet Copii/Elevi/Studenti",
      ERROR_NO_SEATS: "Trebuie sa selectezi un numar de locuri mai mare de 0.",
      ERROR_TYPES:
        "Trebuie sa selectezi ce tipuri de bilete doresti pentru toate locurile.",
      ERROR_NOT_ENOUGH:
        "Numarul de locuri selectate este mai mic decat cel de tipuri de bilete.",
      TOTAL: "Total",
    },
    PRICES_PAGE: {
      TITLE: "Tarife",
      FIRST_PARAGRAPH:
        "Pretul unui bilet la film difera in functie de zi, ora de rulare, formatul acestuia si categoria biletului achizitionat. Pentru proiectiile 3D sunt necesari ochelarii 3D. In cazul in care nu aveti, acestia se pot achizitiona de la casele de bilete, costa 5 lei/perechea si sunt disponibili in 2 dimensiuni, pentru copii si adulti. Ochelarii pot fi refolositi la urmatoarele filme 3D vizionate.",
      PROJECTION: "Proiectie",
      MOVIE_2D: "Film 2D",
      MOVIE_3D: "Film 3D",
      TABLE_PROJECTION: [
        "Luni - Joi pana la ora 17:00",
        "Luni - Joi dupa 17:00",
        "Vineri - Duminica pana la ora 17:00",
        "Vineri - Duminica dupa 17:00",
      ],
      PRICES_2D: ["20 lei", "25 lei", "28 lei", "30 lei"],
      PRICES_3D: ["22 lei", "27 lei", "30 lei", "32 lei"],
      SECOND_PARAGRAPH:
        "Copiii, elevii si studentii beneficiaza de 20% reducere.",
    },
    BURGER_MENU: {
      OPTIONS: ["Acasa", "Tarife", "Contul meu"],
    },
    CHANGE_PASS: {
      CURRENT_PASSWORD: "Parola curenta",
      NEW_PASSWORD: "Parola noua",
      CONFIRM_NEW_PASSWORD: "Confirma parola noua",
      CHANGE_PASSWORD: "Schimba parola",
      SAVE: "Salveaza",
      FILL_FIELD: "Acest camp trebuie completat.",
    },
    MY_ACCOUNT_DATA: {
      PERSONAL_DATA: "Date personale",
      FIRST_NAME: "Prenume",
      LAST_NAME: "Nume",
      PHONE_NUMBER: "Numar de telefon",
      SAVE: "Salveaza",
    },
    MY_ACCOUNT_PAGE: {
      MY_ACCOUNT: "Contul meu",
      PERSONAL_DATA: "Date personale",
      MY_RESERVATIONS: "Rezervarile mele",
      CHANGE_PASS: "Schimba parola",
      LOGOUT: "Logout",
    },
    SEATS: {
      CONFIRM: "Confirma",
      SUCCESS: "Rezervarea a fost realizata cu succes.",
    },
    RESERVATION_MODAL: {
      CONFIRM: "Confirma",
      PLEASE_SELECT: "Selecteaza data si ora:",
    },
    SEATS_AREA: {
      SCREEN: "Ecran",
      UNAVAILABLE: "Indisponibil",
      AVAILABLE: "Disponibil",
      SELECTED: "Selectat",
      SELECTED_SEATS: "Locuri selectate:",
      MAX_SEATS: "*Poti selecta un numar maxim de 5 locuri.",
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
      SEND: "Trimite",
      EMPTY: "Acest camp trebuie completat.",
      EMAIL_ERROR: "Acesta nu este un email valid.",
    },
    SUCCESS_MODAL: {
      CONTACT_MESSAGE: "Mesajul tau a fost trimis cu succes!",
      REGISTER: "Contul tau a fost creeat cu succes!",
      CLOSE: "Inchide",
      DELETE_RESERVATION_SUCCESS: "Rezervarea a fost stearsa cu succes!",
    },
    ERROR_MODAL: {
      MESSAGE: "A aparut o eroare. Te rog incearca mai tarziu!",
      CLOSE: "Inchide",
    },
    LOGIN_MODAL: {
      LOGIN: "Autentificare",
      EMAIL: "Email",
      PASSWORD: "Parola",
      SUBMIT: "Submit",
      NO_MATCH: "Email-ul si parola nu se potrivesc.",
      MATCH: "Te-ai autentificat cu succes!",
      NO_ACCOUNT_YET: "Nu ai cont inca? Inregistreaza-te",
    },
    NAVBAR: {
      LOGIN: "Autentificare",
      MY_ACCOUNT: "Contul meu",
      HOME: "Acasa",
      PRICES: "Tarife",
      ADMIN: "Admin",
    },
    REGISTER: {
      EMAIL: "Email",
      FIRST_NAME: "Prenume",
      LAST_NAME: "Nume",
      PASSWORD: "Parola",
      PHONE_NUMBER: "Numar telefon",
      REGISTER: "Inregistreaza-te",
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
=======
            OPTIONS: ["Cauta dupa nume", "Cauta dupa id"],
        },
        EDIT_MOVIE_MODAL: {
            TITLE: "Titlu:",
            DESCRIPTION: "Descriere:",
            LENGTH: "Durata (minute):",
            COVER_IMAGE: "Imagine (url):",
            TRAILER_URL: "Trailer (url):",
            RATING: "Rating:",
            GENRE: "Gen:",
            PRODUCTION_YEAR: "Anul aparitiei:",
            PRODUCER: "Producator:",
            DIRECTION: "Regizor:",
            ACTORS: "Actori:",
            IS_3D: "3D:",
            IS_PREMIERE: "Premiera:",
            CONFIRM: "Confirma",
        },
        ADD_TIME_MODAL: {
            CHOOSE_DATE: "Alege data:",
            CONFIRM: "Confirma",
            CHOOSE_HALL: "Alege sala:",
        },
        ADD_MOVIE_MODAL: {
            TITLE: "Titlu:",
            DESCRIPTION: "Descriere:",
            LENGTH: "Durata (minute):",
            COVER_IMAGE: "Imagine (url):",
            TRAILER_URL: "Trailer (url):",
            RATING: "Rating:",
            GENRE: "Gen:",
            PRODUCTION_YEAR: "Anul aparitiei:",
            PRODUCER: "Producator:",
            DIRECTION: "Regizor:",
            ACTORS: "Actori:",
            IS_3D: "3D:",
            IS_PREMIERE: "Premiera:",
            CONFIRM: "Confirma",
            SUCCESS: "Filmul a fost adăugat cu succes.",
        },
        MOVIES_TABLE: {
            TITLE: "Titlu",
            POSTER: "Poster",
            YEAR: "An",
            DELETE: "Sterge",
            EDIT: "Modifica",
            ADD_MOVIE: "Adauga film",
            RUNNING_TIME: "Timp rulare",
            ADD: "Adauga",
            VIEW: "Vezi rularile curente",
        },
        ADMIN_NAV: {
            MOVIES: "Filme",
            RESERVATIONS: "Rezervari",
        },
        MY_RESERVATIONS: {
            NO_RESERVATIONS: "Nu aveti rezervari inregistrate.",
            DELETE: "Sterge rezervare",
        },
        RESERVATION_CARD: {
            RESERVATION: "Rezervare",
            RESERVATION_ID: "Rezervare ",
            HALL: "Sala",
            SEATS: "Locuri: ",
            NORMAL_TICKETS: "Bilet intreg:",
            REDUCED_TICKETS: "Bilet Copii/Elevi/Studenti:",
            TOTAL_PRICE: "Pret total:",
        },
        SEATS_PAGE: {
            HALL: "Sala",
            NORMAL_TICKETS: "Bilet intreg",
            REDUCED_TICKETS: "Bilet Copii/Elevi/Studenti",
            ERROR_NO_SEATS:
                "Trebuie sa selectezi un numar de locuri mai mare de 0.",
            ERROR_TYPES:
                "Trebuie sa selectezi ce tipuri de bilete doresti pentru toate locurile.",
            ERROR_NOT_ENOUGH:
                "Numarul de locuri selectate este mai mic decat cel de tipuri de bilete.",
            TOTAL: "Total",
        },
        PRICES_PAGE: {
            TITLE: "Tarife",
            FIRST_PARAGRAPH:
                "Pretul unui bilet la film difera in functie de zi, ora de rulare, formatul acestuia si categoria biletului achizitionat. Pentru proiectiile 3D sunt necesari ochelarii 3D. In cazul in care nu aveti, acestia se pot achizitiona de la casele de bilete, costa 5 lei/perechea si sunt disponibili in 2 dimensiuni, pentru copii si adulti. Ochelarii pot fi refolositi la urmatoarele filme 3D vizionate.",
            PROJECTION: "Proiectie",
            MOVIE_2D: "Film 2D",
            MOVIE_3D: "Film 3D",
            TABLE_PROJECTION: [
                "Luni - Joi pana la ora 17:00",
                "Luni - Joi dupa 17:00",
                "Vineri - Duminica pana la ora 17:00",
                "Vineri - Duminica dupa 17:00",
            ],
            PRICES_2D: ["20 lei", "25 lei", "28 lei", "30 lei"],
            PRICES_3D: ["22 lei", "27 lei", "30 lei", "32 lei"],
            SECOND_PARAGRAPH:
                "Copiii, elevii si studentii beneficiaza de 20% reducere.",
        },
        BURGER_MENU: {
            OPTIONS: ["Acasa", "Tarife", "Contul meu"],
        },
        CHANGE_PASS: {
            CURRENT_PASSWORD: "Parola curenta",
            NEW_PASSWORD: "Parola noua",
            CONFIRM_NEW_PASSWORD: "Confirma parola noua",
            CHANGE_PASSWORD: "Schimba parola",
            SAVE: "Salveaza",
            FILL_FIELD: "Acest camp trebuie completat.",
        },
        MY_ACCOUNT_DATA: {
            PERSONAL_DATA: "Date personale",
            FIRST_NAME: "Prenume",
            LAST_NAME: "Nume",
            PHONE_NUMBER: "Numar de telefon",
            SAVE: "Salveaza",
        },
        MY_ACCOUNT_PAGE: {
            MY_ACCOUNT: "Contul meu",
            PERSONAL_DATA: "Date personale",
            MY_RESERVATIONS: "Rezervarile mele",
            CHANGE_PASS: "Schimba parola",
            LOGOUT: "Logout",
        },
        SEATS: {
            CONFIRM: "Confirma",
            SUCCESS: "Rezervarea a fost realizata cu succes.",
        },
        RESERVATION_MODAL: {
            CONFIRM: "Confirma",
            PLEASE_SELECT: "Selecteaza data si ora:",
        },
        SEATS_AREA: {
            SCREEN: "Ecran",
            UNAVAILABLE: "Indisponibil",
            AVAILABLE: "Disponibil",
            SELECTED: "Selectat",
            SELECTED_SEATS: "Locuri selectate:",
            MAX_SEATS: "*Poti selecta un numar maxim de 5 locuri.",
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
            CONTACT_MESSAGE: "Mesajul tau a fost trimis cu succes!",
            REGISTER: "Contul tau a fost creeat cu succes!",
            CLOSE: "Inchide",
            DELETE_RESERVATION_SUCCESS: "Rezervarea a fost stearsa cu succes!",
        },
        ERROR_MODAL: {
            MESSAGE: "A aparut o eroare. Te rog incearca mai tarziu!",
            CLOSE: "Inchide",
        },
        LOGIN_MODAL: {
            LOGIN: "Autentificare",
            EMAIL: "Email",
            PASSWORD: "Parola",
            SUBMIT: "Submit",
            NO_MATCH: "Email-ul si parola nu se potrivesc.",
            MATCH: "Te-ai autentificat cu succes!",
            NO_ACCOUNT_YET: "Nu ai cont inca? Inregistreaza-te",
        },
        NAVBAR: {
            LOGIN: "Autentificare",
            MY_ACCOUNT: "Contul meu",
            HOME: "Acasa",
            PRICES: "Tarife",
            ADMIN: "Admin",
        },
        REGISTER: {
            EMAIL: "Email",
            FIRST_NAME: "Prenume",
            LAST_NAME: "Nume",
            PASSWORD: "Parola",
            PHONE_NUMBER: "Numar telefon",
            REGISTER: "Inregistreaza-te",
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
    // SERVER: "http://192.168.0.248:4000",
    // SERVER: "http://localhost:4000",
    SERVER: "https://five-stars-cinema.herokuapp.com",
    SERVER_PATHS: {
        LOGIN: "/user/login",
        USER: "/user",
    },
    ROUTES: {
        MY_ACCOUNT: "/my-account",
>>>>>>> Stashed changes
    },
  },
  SCREENS: {
    SM: "768px",
  },
  // SERVER: "http://192.168.0.248:4000",
  // SERVER: "http://localhost:4000",
  SERVER: "https://five-stars-cinema.herokuapp.com",
  SERVER_PATHS: {
    LOGIN: "/user/login",
    USER: "/user",
  },
  ROUTES: {
    MY_ACCOUNT: "/my-account",
  },
};
export default CONSTANTS;
