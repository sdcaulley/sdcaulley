import { observable, decorate } from 'mobx'

class Store {
  constructor () {
    this.blogItem = {}
    this.blogList = []
    this.category = ''
    this.categoryList = []
    this.formState = ''
    this.location = ''
    this.quoteItem = {}
    this.quoteList = []
    this.resourceItem = {}
    this.resourceList = []
    this.tags = []
  }
}

decorate(Store, {
  blogItem: observable,
  blogList: observable,
  category: observable,
  categoryList: observable,
  formState: observable,
  location: observable,
  quoteItem: observable,
  quoteList: observable,
  resourceItem: observable,
  resourceList: observable,
  tags: observable
})

export const store = new Store()
