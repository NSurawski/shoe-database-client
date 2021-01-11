'use strict'
const store = require('./../store')

const onSignUpSuccess = function (userData) {
  $('#message').text('Signed Up Successfully!')
  $('form').trigger('reset')
  $('.unauthenticated').hide()
  $('.unauthenticated2').show()
  $('.authenticated3').hide()
  $('.authenticated4').hide()
}

const onSignUpFailure = function (error) {
  $('#message').text('Sign Up Failed with error: ' + error.responseJSON.message)
  $('form').trigger('reset')
  $('.authenticated').hide()
  $('.authenticated2').hide()
  $('.authenticated3').hide()
  $('.authenticated4').hide()
}

const onSignInSuccess = function (userData) {
  $('#message').text('Signed In Successfully!')
  store.user = userData.user
  $('form').trigger('reset')
  $('.authenticated').show()
  $('.authenticated2').show()
  $('.authenticated3').show()
  $('.authenticated4').show()
  $('.unauthenticated').hide()
  $('.unauthenticated2').hide()
  $('.crudActions').show()
  $('.shoeDisplay').show()
}

const onSignInFailure = function (error) {
  $('#message').text('Sign in failed with error: ' + error.responseJSON.message)
  $('form').trigger('reset')
  $('.authenticated').hide()
  $('.authenticated2').hide()
  $('.authenticated3').hide()
  $('.authenticated4').hide()
}

const onChangeSuccess = function (userData) {
  $('#message').text('Password Change Successful!')
  $('form').trigger('reset')
  $('.authenticated').show()
  $('.authenticated2').show()
  $('.authenticated3').show()
  $('.authenticated4').show()
  $('.unauthenticated').hide()
  $('.unauthenticated2').hide()
}

const onChangeFailure = function (error) {
  $('#message').text('Password change failed with error: ' + error.responseJSON.message)
  $('form').trigger('reset')
}

const onSignOutSuccess = function (userData) {
  $('#message').text('Signed Out Successfully!')
  $('.unauthenticated').show()
  $('.unauthenticated2').show()
  $('.authenticated').hide()
  $('.authenticated2').hide()
  $('.authenticated3').hide()
  $('.authenticated4').hide()
  $('#createShoe').hide()
  $('#updateShoe').hide()
  $('#createShoe').hide()
  $('#getShoesBtn').hide()
  $('#deleteShoe').hide()
  $('#shoes').hide()

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
