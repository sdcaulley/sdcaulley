import { observable, decorate } from 'mobx'

class Store {
  constructor () {
    this.blogItems = []
    this.category = 'Home'
    this.resources = []
    this.blogItem = {}
    this.tags = []
    this.resource = {}
    this.quote = {}
    this.quotes = []
  }
}

decorate(Store, {
  blogItems: observable,
  category: observable,
  resources: observable,
  blogItem: observable,
  tags: observable,
  resource: observable,
  quote: observable,
  quotes: observable
})

export const store = new Store()
