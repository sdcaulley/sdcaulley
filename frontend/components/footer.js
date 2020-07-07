import { LitElement, html } from 'lit-element';

export default class Footer extends LitElement {
	render () {
		return html`
			<footer>made by sdcaulley &#169 2020
		`;
	}
}

customElements.define('site-footer', Footer);
