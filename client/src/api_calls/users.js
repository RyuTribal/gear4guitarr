import axios from "axios";

export async function login(email, password) {
  let data = await axios({
    method: "post",
    url: `http://localhost:8080/api/users/login`,
    data: {
      email: email,
      password: password,
    },
  });

  return data;
}

export async function register(email, password, first_name, last_name) {
  let data = await axios({
    method: "post",
    url: `http://localhost:8080/api/users/register`,
    data: {
      email: email,
      password: password,
      first_name: first_name,
      last_name: last_name,
    },
  });

  return data;
}

export async function isLoggedIn() {
  let data = await axios({
    method: "get",
    url: `http://localhost:8080/api/users/is_logged_in`,
  });

  return data;
}

export async function getBasket() {
  let data = await axios({
    method: "get",
    url: `http://localhost:8080/api/basket/get`,
  });

  return data;
}

export async function addBasket(id) {
  let data = await axios({
    method: "post",
    url: `http://localhost:8080/api/basket/add/${id}`,
  });

  return data;
}
