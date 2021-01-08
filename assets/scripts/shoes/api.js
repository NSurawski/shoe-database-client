const config = require('./../config')
const store = require('./../store')

const createShoe = function (data) {
  return $.ajax({
    url: config.apiUrl + '/create',
    method: 'POST',
    data,
    // data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const getAllShoes = function (data) {
  return $.ajax({
    url: config.apiUrl + '/index',
    method: 'GET',
    data,
    headers: {
      Authorization: 'Bearer' + store.user.token
    }
  })
}

const updateShoe = function (data) {
  return $.ajax({
    url: config.apiUrl + '/update',
    method: 'POST',
    data: data
  })
}


const destroyShoe = function (data) {
  return $.ajax({
    url: config.apiUrl + '/destroy',
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
