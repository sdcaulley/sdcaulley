module.exports = (postlist, location) => {
  const tagCloud = postlist.reduce((acc, curr) => {
    curr.data.tags.forEach(tag => {
      if (acc.hasOwnProperty(tag)) {
        acc[tag]++
      } else {
        acc[tag] = 1
      }
    })
    return acc
  }, {})

  let nav = ''

  for (const key in tagCloud) {
    nav += `<li class="blog-tag-item">
        <a class="${location}-link" href="/tags/${key}">
          ${key} (${tagCloud[key]})
        </a>
      </li>`
  }

  return `
    <nav class="blog-tag-nav">
      <p>Tags: </p>
      <ul class="blog-tag-container">${nav}</ul>
    </nav>`
}
