
const onCreateSuccess = function (response) {
  $('#message').text('Shoe Created Successfully!')
  $('form').trigger('reset')

  const shoeHtml = `
  <h3>${response.shoe.style}</h3>
  <h4>Designed by: ${response.shoe.brand}</h4>
`

  $('.shoe-display').html(shoeHtml)
}

const onCreateFailure = function (error) {
  $('#message').text('Shoe Create failed: ' + error.responseJSON.message)
}

const onUpdateSuccess = function (response) {
  $('#message').text('Shoe Updated Successfully!')
  $('form').trigger('reset')
}

const onUpdateFailure = function (error) {
  $('#message').text('Shoe Update failed: ' + error.responseJSON.message)
}

const onGetSuccess = function (response) {
  $('#message').text('Got Shoes List Successfully!')
  $('form').trigger('reset')
}

const onGetFailure = function (error) {
  $('#message').text('Shoe List failed: ' + error.responseJSON.message)
}

const onDestroySuccess = function (reponse) {
  $('#message').text('Deleted Shoe Successfully!')
  $('form').trigger('reset')
}

const onDestroyFailure = function (error) {
  $('#message').text('Delete Shoe failed: ' + error.responseJSON.message)
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onUpdateSuccess,
  onUpdateFailure,
  onGetSuccess,
  onGetFailure,
  onDestroySuccess,
  onDestroyFailure
}
