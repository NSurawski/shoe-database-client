const store = require('./../store')

const onCreateSuccess = function (response) {
  $('#message').text('Shoe Created Successfully!')
  store.shoe = response.shoe
  $('form').trigger('reset')
}

const onCreateFailure = function (error) {
  $('#message').text('Shoe Create failed: ' + error.responseJSON.message)
  $('form').trigger('reset')
}

const onUpdateSuccess = function (response) {
  $('#message').text('Shoe Updated Successfully!')
  $('form').trigger('reset')
}

const onUpdateFailure = function (error) {
  $('#message').text('Shoe Update failed: ' + error.responseJSON.message)
  $('form').trigger('reset')
}

const onGetSuccess = function (response) {
  $('#message').text('Got Your Shoes List Successfully!')
  $('form').trigger('reset')
  $('.shoeDisplay').show()

  const shoesList = response.shoes
  let shoesHtml = ''
  shoesList.forEach(shoes => {
    let shoeHtml = (`
  <div>
  <h3>Brand: ${shoes.brand}</h3>
  <h5>Style Name: ${shoes.style}</h5>
  <h5>Type: ${shoes.type}</h5>
  <h5>ID: ${shoes._id}</h5>
  <h6>Comments:</h6>
`)
    shoeHtml += shoes.comments.map(function (comment) {
      return (`

      <p>${comment.author}</p>
      <p>${comment.content}</p>
      <p>${comment._id}</p>
      </div>
      `)
    })
    shoesHtml += shoeHtml
  })
  $('#shoes').html(shoesHtml)
}

const onGetFailure = function (error) {
  $('#message').text('Shoe List failed: ' + error.responseJSON.message)
  $('form').trigger('reset')
}

const onDestroySuccess = function (reponse) {
  $('#message').text('Deleted Shoe Successfully!')
  $('form').trigger('reset')
  $('.authenticated').show()
  $('.unauthenticated').hide()
  $('.crudActions').show()
}

const onDestroyFailure = function (error) {
  $('#message').text('Delete Shoe failed: ' + error.responseJSON.message)
  $('form').trigger('reset')
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
