'use strict'
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const userEvents = require('./user/events')
const shoeEvents = require('./shoes/events')
// use require without a reference to ensure a file is bundled

$(() => {
  // your JS code goes here
  $('#signUp').on('submit', userEvents.onSignUp)
  $('#signIn').on('submit', userEvents.onSignIn)
  $('#changePassword').on('submit', userEvents.onChangePass)
  $('#signOutBtn').on('click', userEvents.onSignOut)
  $('#createShoe').on('submit', shoeEvents.onCreate)
  $('#updateShoe').on('submit', shoeEvents.onUpdate)
  $('#getShoesBtn').on('click', shoeEvents.onIndex)
  $('#deleteShoe').on('submit', shoeEvents.onDestroy)
})
