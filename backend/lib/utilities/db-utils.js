function findAllDocuments (collection) {
  return collection.find()
}

function findOneDocument (collection, search) {
  return collection.find(search)
}

function makeNewDocument (collection, item) {
  const newItem = new collection(item)
  return newItem.save()
}

function updateDocument (collection, id, data) {
  return collection.findByIdAndUpdate(id, data, { new: true })
}

async function deleteDocument (collection, id) {
  return collection.findOneAndDelete({ _id: id })
}

function splitUrl (url) {
  const array = url.split('/')
  const id = array[2]
  return id
}

module.exports = {
  findAllDocuments,
  findOneDocument,
  makeNewDocument,
  updateDocument,
  deleteDocument,
  splitUrl
}
