const config = require('./../config')
const store = require('./../store')

const createShoe = function (data) {
  return $.ajax({
    url: config.apiUrl + '/shoes',
    method: 'POST',
    data,
    // data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const getAllShoes = function () {
  // using event.target as the form
  return $.ajax({
    url: config.apiUrl + '/shoes',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateShoe = function (data) {
  return $.ajax({
    url: config.apiUrl + '/shoes' + data.shoe.id,
    method: 'POST',
    data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const destroyShoe = function (data) {
  return $.ajax({
    url: config.apiUrl + '/shoes' + data.shoe.id,
    method: 'POST',
    data: data
  })
}

module.exports = {
  createShoe,
  getAllShoes,
  updateShoe,
  destroyShoe
}
