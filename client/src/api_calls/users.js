import axios from "axios";

const DOMAIN = process.env.REACT_APP_DOMAIN;

export async function login(email, password) {
  let data = await axios({
    method: "post",
    url: `http://157.245.68.252:8080/api/users/login`,
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
    url: `http://157.245.68.252:8080/api/users/register`,
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
    url: `http://157.245.68.252:8080/api/users/is_logged_in`,
  });

  return data;
}

export async function getUser() {
  let data = await axios({
    method: "get",
    url: `http://157.245.68.252:8080/api/users/get_user`,
  });

  return data;
}

export async function getBasket() {
  let data = await axios({
    method: "get",
    url: `http://157.245.68.252:8080/api/basket/get`,
  });

  return data;
}

export async function addBasket(id, quantity) {
  let data = await axios({
    method: "post",
    url: `http://157.245.68.252:8080/api/basket/add/${id}`,
    data: {
      quantity: quantity,
    },
  });

  return data;
}

export async function removeBasket(id) {
  let data = await axios({
    method: "post",
    url: `http://157.245.68.252:8080/api/basket/delete/${id}`,
  });
  return data;
}

export async function getAddress() {
  let data = await axios({
    method: "get",
    url: `http://157.245.68.252:8080/api/basket/address`,
  });

  return data;
}

export async function completeOrder(user, address, cart) {
  let data = await axios({
    method: "post",
    url: `http://157.245.68.252:8080/api/basket/completeorder`,
    data: {
      user: user,
      address: address,
      cart: cart,
    },
  });

  return data;
}

export async function getOrders() {
  let data = await axios({
    method: "get",
    url: `http://157.245.68.252:8080/api/users/get_orders`,
  });

  return data;
}

export async function updateUser(user) {
  let data = await axios({
    method: "post",
    url: `http://157.245.68.252:8080/api/users/edit_creds`,
    data: {
      user: user,
    },
  });

  return data;
}
