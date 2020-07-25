import { html } from 'lit-element';
import Component from './base-component.js';
import { taxonomy } from '../css/taxonomy';

export default class Footer extends Component {
	static get styles () {
		return [ taxonomy ];
	}

	render () {
		return html`
			<footer><p>made by sdcaulley &#169 2020</p></footer>
		`;
	}
}

customElements.define('site-footer', Footer);
