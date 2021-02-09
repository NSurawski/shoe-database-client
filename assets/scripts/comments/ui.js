const store = require('./../store')

const onCommentSuccess = function (response) {
  $('#message').text('Comment Created Successfully!')
  store.comment = response.comment
  $('form').trigger('reset')
  $('.authenticated').show()
  $('.unauthenticated').hide()
  $('.crudActions').show()
}

const onCommentFailure = function (error) {
  $('#message').text('Comment Create failed: ' + error.responseJSON.message)
  $('form').trigger('reset')
}

const onDestroyCommentSuccess = function (reponse) {
  $('#message').text('Deleted Comment Successfully!')
  $('form').trigger('reset')
  $('.authenticated').show()
  $('.unauthenticated').hide()
  $('.crudActions').show()
}

const onDestroyCommentFailure = function (error) {
  $('#message').text('Delete Comment failed: ' + error.responseJSON.message)
  $('form').trigger('reset')
}

module.exports = {
  onCommentSuccess,
  onCommentFailure,
  onDestroyCommentSuccess,
  onDestroyCommentFailure
}
