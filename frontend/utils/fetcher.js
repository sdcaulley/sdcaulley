export default function fetcher (options) {
  const { method, path, body, token } = options
  return fetch(`http://localhost:5000${path}`, {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token
    },
    body: JSON.stringify(body)
  })
    .then(res => {
      if (!res.ok) {
        throw Error(res.statusText)
      }
      return res
    })
    .then(res => {
      return res.json()
    })
}
