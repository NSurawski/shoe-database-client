const store = require('./../store')

const onCommentSuccess = function (response) {
  $('#message').text('Comment Created Successfully!')
  store.comment = response.comment
  $('form').trigger('reset')
  $('.authenticated').show()
  $('.unauthenticated').hide()
  $('.crudActions').show()
  // should line 18 be shoes._id? tried but got linter error
  const commentShow = response.comments
  let commentsHtml = ''
  commentShow.forEach(comment => {
    const commentHtml = (`
  <div>
  <h5>Author: ${comment.author}</h5>
  <h5>Comment: ${comment.content}</h5>
  <h5>ID: ${comment._id}</h5>
  </div>
  `)
    commentsHtml += commentHtml
  })
  $('#comments').html(commentsHtml)
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
