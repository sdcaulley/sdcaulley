async function findAllDocuments (collection) {
  return await collection.find()
}

async function findOneDocument (collection, search) {
  return await collection.find(search)
}

async function updateDocument (collection, id, data) {
  return await collection.findByIdAndUpdate(id, data, { new: true })
}

async function deleteDocument (collection, id) {
  return await collection.findOneAndDelete({ _id: id })
}

function splitUrl (url) {
  const array = url.split('/')
  const id = array[2]
  return id
}

module.exports = {
  findAllDocuments,
  findOneDocument,
  updateDocument,
  deleteDocument,
  splitUrl
}
