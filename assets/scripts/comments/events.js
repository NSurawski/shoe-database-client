const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onCreateComment = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.createComment(data)
    .then(ui.onCommentSuccess)
    .catch(ui.onCommentFailure)
}

const onDestroyComment = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.destroyComment(data)
    .then(ui.onDestroyCommentSuccess)
    .catch(ui.onDestroyCommentFailure)
}

module.exports = {
  onCreateComment,
  onDestroyComment
}
