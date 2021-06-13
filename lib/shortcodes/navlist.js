// generates a page navigation list
const listType = 'ul'
const elementActive = 'strong'
const classActive = 'active'
const classOpen = 'open'

// pass in collections.all | eleventyNavigation, (current) page, and maximum depth level
module.exports = (pageNav, page, maxLevel = 999) => {
  function navRecurse (entry, level = 1) {
    let childPages = ''

    if (level < maxLevel) {
      for (const child of entry.children) {
        childPages += navRecurse(child, level++)
      }
    }

    const colorClass = entry.parentKey
      ? `${entry.parentKey}-link`
      : `${entry.key}-link`
    const dropClass = entry.parentKey ? '' : 'dropdown'
    const topClass = entry.parentKey ? 'child' : 'parent'
    const active = entry.url === page.url
    const classList = []

    if ((active && childPages) || childPages.includes(`<${elementActive}>`)) {
      classList.push(classOpen)
    }
    if (active) classList.push(classActive)
    if (dropClass) classList.push(dropClass)
    if (topClass) classList.push(topClass)

    return (
      '<li' +
      (classList.length ? ` class="${classList.join(' ')}"` : '') +
      '>' +
      (active
        ? `<${elementActive} class="${colorClass}">`
        : `<a class="${colorClass}" href="${entry.url}">`) +
      entry.title +
      (active ? `</${elementActive}>` : '</a>') +
      (childPages
        ? `<${listType} class="dropdown-content">${childPages}</${listType}>`
        : '') +
      '</li>'
    )
  }

  let nav = ''
  for (const entry of pageNav) {
    nav += navRecurse(entry)
  }

  return `<${listType} class="main-nav-container">${nav}</${listType}>`
}
