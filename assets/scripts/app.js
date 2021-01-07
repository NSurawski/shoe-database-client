'use strict'
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const userEvents = require('./shoes/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
$('#signUp').on('submit', userEvents.onSignUp)
$('#signIn').on('submit', userEvents.onSignIn)
$('#changePassword').on('submit', userEvents.onChangePass)
$('#signOutBtn').on('click', userEvents.onSignOut)
$('#createShoe').on('click', userEvents.onCreate)
$('#updateShoe').on('click', userEvents.onUpdate)
$('#getShoes').on('click', userEvents.onIndex)
$('#deleteShoe').on('click', userEvents.onDelete)

})
