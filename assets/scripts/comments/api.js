const config = require('./../config')
const store = require('./../store')

const createComment = function (data) {
  return $.ajax({
    url: config.apiUrl + '/shoes',
    method: 'POST',
    data: data,
    headers: {
      Authorization: 'Bearer' + store.user.token
    }
  })
}

const destroyComment = function (data) {
  return $.ajax({
    url: config.apiUrl + '/shoes',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer' + store.user.token
    },
    data: data
  })
}

module.exports = {
  createComment,
  destroyComment
}
