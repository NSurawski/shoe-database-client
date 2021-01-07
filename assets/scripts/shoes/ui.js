const store = require('./../store')


const onCreateSuccess = function (response) {
  $('#message').text('Shoe Created Successfully!')
  $('form').trigger('reset')

  const shoeHtml = `
  <h3>${response.shoe.brand}</h3>
  <h4>Directed by: ${response.shoe.style}</h4>
`

$('.movie-display').html(shoeHtml)
}

const onCreateFailure = function (error) {
  $('#message').text('Shoe create failed: ' + error.responseJSON.message)
}

const onUpdateSuccess = function (response) {
  $('#message').text('Shoe Updated Successfully!')
  $('form').trigger('reset')
}

const onUpdateFailure = function (error) {
  $('#message').text('Shoe update failed: ' + error.responseJSON.message)
}

const onGetSuccess = function (response) {
  $('#message').text('Indexed Shoes Successfully!')
  $('form').trigger('reset')
}

const onGetFailure = function (error) {
  $('#message').text('Shoe index failed: ' + error.responseJSON.message)
}

const onDestroySuccess = function (reponse) {
  $('#message').text('Indexed Shoes Successfully!')
  $('form').trigger('reset')
}

const onDestroyFailure = function (error) {
  $('#message').text('Shoe index failed: ' + error.responseJSON.message)
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
