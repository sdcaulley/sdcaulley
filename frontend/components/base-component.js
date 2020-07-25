import { LitElement } from 'lit-element';
import Store from '../state-management/store.js';

export default class Component extends LitElement {
	constructor (props = {}) {
		super();
		let self = this;

		this.render = this.render || function () {};

		if (props.store instanceof Store) {
			props.store.events.subscribe('stateChange', () => self.render());
		}

		if (props.hasOwnProperty('element')) {
			this.element = props.element;
		}
	}
}
