'use strict'
const store = require('./../store')

const onSignUpSuccess = function (userData) {
  $('#message').text('Signed Up Successfully!')
  $('form').trigger('reset')
  $('#signIn').show()
  $('.authenticated').hide()
  // $('.').hide()
}

const onSignUpFailure = function (error) {
  $('#message').text('Sign Up Failed with error: ' + error.responseJSON.message)
  $('form').trigger('reset')
  $('.authenticated').hide()
  $('.authenticated2').hide()
}

const onSignInSuccess = function (userData) {
  $('#message').text('Signed In Successfully!')
  store.user = userData.user
  $('form').trigger('reset')
  $('.authenticated').show()
  $('.unauthenticated').hide()
  $('.crudActions').show()
}

const onSignInFailure = function (error) {
  $('#message').text('Sign in failed with error: ' + error.responseJSON.message)
  $('form').trigger('reset')
  $('.authenticated').hide()
}

const onChangeSuccess = function (userData) {
  $('#message').text('Password Change Successful!')
  $('form').trigger('reset')
  $('.authenticated').show()
  $('.unauthenticated').hide()
}

const onChangeFailure = function (error) {
  $('#message').text('Password change failed with error: ' + error.responseJSON.message)
  $('form').trigger('reset')
}

const onSignOutSuccess = function (userData) {
  $('#message').text('Signed Out Successfully!')
  $('.unauthenticated').show()
  $('.authenticated').hide()
  $('.crudActions').hide()
  $('.shoeDisplay').hide()

  store.user = null
}

const onSignOutFailure = function (error) {
  $('#message').text('Sign Out Failed with error: ' + error.responseJSON.message)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangeSuccess,
  onChangeFailure,
  onSignOutSuccess,
  onSignOutFailure
}
