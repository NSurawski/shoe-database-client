
const onCreateSuccess = function (response) {
  $('#message').text('Shoe Created Successfully!')
  $('form').trigger('reset')
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
  $('.shoeDisplay').show()

  const shoesList = response.shoes
  let shoesHtml = ''
  shoesList.forEach(shoes => {
    const shoeHtml = (`
  <div>
  <h3>Brand: ${response.shoes.brand}</h3>
  <h4>Style Name: ${response.shoes.style}</h4>
  <h4>ID: ${response.shoes._id}</h4>
  </div>
`)
    shoesHtml += shoeHtml
  })
  $('#shoes').html(shoesHtml)
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
