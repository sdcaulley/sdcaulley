import { html } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { store } from '../../site/state/store.js'
import { taxonomy } from '../../css/taxonomy.js'
import { colors } from '../../css/color.js'
import { menu } from '../css/tag-menu-css.js'
import { paper } from '../../css/paper-effect.js'

export default class TagMenu extends MobxLitElement {
  static get properties () {
    return {
      tags: { type: Array }
    }
  }

  static get styles () {
    return [colors, taxonomy, menu, paper]
  }

  constructor () {
    super()
    this.tags = []
  }

  tagsMenu () {
    this.tags = []

    const concatArray = store.blogList.reduce((acc, curr) => {
      return acc.concat(curr.tag)
    }, [])

    const map = concatArray.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1
      return acc
    }, {})

    for (const key in map) {
      this.tags.push({ tag: key, number: map[key] })
    }
  }

  render () {
    if (store.blogList.length > 0) {
      return html`
        <section id="tag-menu" class="paper">
          <h4 class="${store.category}-header">Categories</h4>
          <ul>
            ${this.tagsMenu()}
            ${this.tags.map(item => {
              return html`<li><a class=${store.category}-link href=/${item.tag}/blog>${item.tag} (${item.number})</a></li>`
            })}
          </ul>
        </section>
      `
    }
  }
}

customElements.define('tag-menu', TagMenu)
