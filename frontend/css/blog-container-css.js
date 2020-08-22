import { css } from 'lit-element';

export const placement = css`
	@media(min-width: 1000px) {
		#right-sidebar {
			float: right;
			width: 25%;
		}

		#main {
			float: left;
			width: 75%;
		}
	}

`;
