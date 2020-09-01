import {
	observable,
	decorate
} from 'mobx';

class Store {
	constructor () {
		this.blogItems = [];
		this.category = 'Home';
		this.resources = [];
	}
}

decorate(Store, {
	blogItems: observable,
	category: observable,
	resources: observable
});

export const store = new Store();
