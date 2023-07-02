import CONSTANTS from "../constants";

const get = async (path: string) => {
  return await fetch(`${CONSTANTS.SERVER}${path}`, {
    method: "GET",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "include", // include, *same-origin, omit,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

const post = async (data: any, path: string) => {
  return await fetch(`${CONSTANTS.SERVER}${path}`, {
    method: "POST",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "include", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  });
};

const put = async (data: any, path: string) => {
  return await fetch(`${CONSTANTS.SERVER}${path}`, {
    method: "PUT",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  });
};

const deleteData = async (id: string, path: string) => {
  return await fetch(`${CONSTANTS.SERVER}${path}?id=${id}`, {
    method: "DELETE",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

const api = { get, post, put, deleteData };

export default api;
