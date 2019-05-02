var recipes = {}

function updateObjectWithKeyAndValue (object, key, value) {
  var newRecipes = Object.assign({}, object, { [key]: value })
  return newRecipes
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey (object, key){
}

function destructivelyDeleteFromObjectByKey (object, key) {
  delete object.key
  return object}
