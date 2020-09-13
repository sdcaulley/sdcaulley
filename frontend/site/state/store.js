import {
	observable,
	decorate
} from 'mobx';

class Store {
	constructor () {
		this.blogItems = [];
		this.category = 'Home';
		this.resources = [];
		this.blogItem = {};
		this.tags = [];
	}
}

decorate(Store, {
	blogItems: observable,
	category: observable,
	resources: observable,
	blogItem: observable,
	tags: observable
});

export const store = new Store();
