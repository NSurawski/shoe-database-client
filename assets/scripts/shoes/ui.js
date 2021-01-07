const store = require('./../store')

const onCreateSuccess = function (userData) {
  $('#message').text('Signed Up Successfully!')
  $('form').trigger('reset')
  $('#authenticated').hide()
}

const onCreateFailure = function (error) {
  $('#message').text('Sign Up Failed with error: ' + error.responseJSON.message)
  $('form').trigger('reset')
  $('#authenticated').hide()
}

const onSignInSuccess = function (userData) {
  $('#message').text('Signed In Successfully!')
  store.user = userData.user
  $('form').trigger('reset')
  $('.authenticated').show()
  $('#unauthenticated').hide()
}

const onSignInFailure = function (error) {
  $('#message').text('Sign in failed with error: ' + error.responseJSON.message)
  $('form').trigger('reset')
  $('#authenticated').hide()
}

const onChangeSuccess = function (userData) {
  $('#message').text('Password Change Successful!')
  $('form').trigger('reset')
  $('authenticated').show()
}

const onChangeFailure = function (error) {
  $('#message').text('Password change failed with error: ' + error.responseJSON.message)
  $('form').trigger('reset')
}

const onSignOutSuccess = function (userData) {
  $('#message').text('Signed Out Successfully!')
  $('.authenticated').hide()
}

const onSignOutFailure = function (error) {
  $('#message').text('Sign Out Failed with error: ' + error.responseJSON.message)
  $('#authenticated').hide()
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangeSuccess,
  onChangeFailure,
  onSignOutSuccess,
  onSignOutFailure
}
