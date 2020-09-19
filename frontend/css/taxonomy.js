import { css } from 'lit-element';

export const taxonomy = css`
	h1 {
		font-family: "Podkova", serif;
		font-size: 1.802em;
	}

	h2 {
		font-family: "Podkova", serif;
		font-size: 1.602em;
	}

	h3 {
		font-family: "Podkova", serif;
		font-size: 1.424em;
	}

	h4 {
		font-family: "Podkova", serif;
		font-size: 1.266em;
	}

	h5 {
		font-family: "Podkova", serif;
		font-size: 1.125em;
	}

	a, p, input, select, option, button, textarea, label {
		font-family: "Dosis", sans-serif;
		font-size: 1em;
		font-weight: normal;
	}

	a {
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	ul {
		list-style-type: none;
	}

	@media(min-width: 1000px) {
		h1 {
			font-family: "Podkova", serif;
			font-size: 3.052em;
		}

		h2 {
			font-family: "Podkova", serif;
			font-size: 2.441em;
		}

		h3 {
			font-family: "Podkova", serif;
			font-size: 1.953em;
		}

		h4 {
			font-family: "Podkova", serif;
			font-size: 1.5638em;
		}

		h5 {
			font-family: "Podkova", serif;
			font-size: 1.25em;
		}
	}
`;
