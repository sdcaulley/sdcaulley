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
	}
}

decorate(Store, {
	blogItems: observable,
	category: observable,
	resources: observable,
	blogItem: observable
});

export const store = new Store();
