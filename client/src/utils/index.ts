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

export const formatDate = (date: Date) => {
  const showZeroDay = date.getDate() < 10;
  const showZeroMonth = date.getMonth() + 1 < 10;
  const newDate = `${date.getFullYear()}-${showZeroMonth ? "0" : ""}${
    date.getMonth() + 1
  }-${showZeroDay ? "0" : ""}${date.getDate()}`;
  return newDate;
};

export const checkDays = (date: Date) => {
  const today = new Date();
  if (date.getFullYear() !== today.getFullYear()) {
    return `${formatDate(date)}`;
  }
  if (date.getMonth() + 1 !== today.getMonth() + 1) {
    return `${formatDate(date)}`;
  }

  const days = [
    "Duminica",
    "Luni",
    "Marti",
    "Miercuri",
    "Joi",
    "Vineri",
    "Sambata",
  ];
  let weekDay = "";

  if (date.getDay() === today.getDay() && date.getDate() === today.getDate()) {
    weekDay = "Astazi";
  } else if (
    date.getDay() === today.getDay() + 1 &&
    date.getDate() === today.getDate()
  ) {
    weekDay = "Maine";
  } else {
    for (let i = 0; i < days.length; i++) {
      if (i === date.getDay()) {
        weekDay = `${days[i]}`;
        break;
      }
    }
  }
  return `${weekDay}: ${formatDate(date)}`;
};

export const eliminateSpaces = (a: string) => {
  return a.replace(" ", "");
};

export const getPriceForDateHour = (
  is3D: boolean,
  isAfterHour: boolean,
  isWeekend: boolean
) => {
  let priceList = [20, 25, 28, 30];
  if (is3D) {
    priceList = [22, 27, 30, 32];
  }
  if (isWeekend) {
    if (isAfterHour) {
      return priceList[3];
    } else {
      return priceList[2];
    }
  } else {
    if (isAfterHour) {
      return priceList[1];
    } else {
      return priceList[0];
    }
  }
};
