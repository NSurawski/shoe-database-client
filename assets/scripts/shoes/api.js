const config = require('./../config')
const store = require('./../store')

const createShoe = function (data) {
  return $.ajax({
    url: config.apiUrl + '/shoes',
    method: 'POST',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const getAllShoes = function () {
  return $.ajax({
    url: config.apiUrl + '/shoes',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateShoe = function (data) {
  // console.log('data is ', data)
  // console.log('id is ', data.shoe.id)
  return $.ajax({
    url: config.apiUrl + '/shoes/' + data.shoe.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const destroyShoe = function (data) {
  // console.log('Shoe is ' + data.shoe.id)
  return $.ajax({
    url: config.apiUrl + '/shoes/' + data.shoe.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

module.exports = {
  createShoe,
  getAllShoes,
  updateShoe,
  destroyShoe
}
