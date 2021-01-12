const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onCreate = function (event) {
  event.preventDefault()
  // using event.target as the form
  const form = event.target
  const data = getFormFields(form)

  api.createShoe(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onIndex = function (event) {
  event.preventDefault()

  api.getAllShoes()
    .then(ui.onGetSuccess)
    .catch(ui.onGetFailure)
}

const onUpdate = function (event) {
  event.preventDefault()
  // using event.target as the form
  const form = event.target
  const updatedData = getFormFields(form)

  api.updateShoe(updatedData)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const onDestroy = function (event) {
  event.preventDefault()
  // using event.target as the form
  const form = event.target
  const data = getFormFields(form)

  api.destroyShoe(data)
    .then(ui.onDestroySuccess)
    .catch(ui.onDestroyFailure)
}

module.exports = {
  onCreate,
  onIndex,
  onUpdate,
  onDestroy
}
