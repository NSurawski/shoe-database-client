const config = require('./../config')
const store = require('./../store')

const createComment = function (data) {
  return $.ajax({
    url: config.apiUrl + '/comments',
    method: 'POST',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const destroyComment = function (data) {
  return $.ajax({
    url: config.apiUrl + '/comments/' + data.comment.id,
    method: 'DELETE',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }

  })
}

module.exports = {
  createComment,
  destroyComment
}
