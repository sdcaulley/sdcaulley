import { css } from 'lit-element';

export const menu = css`
	:host {
		display: block;
		margin: auto;
		position: inherit;
		width: 100%;
	}

	nav {
		display: inline-block;
		position: relative;
	}

	section {
		background-image: url('../../css/ricepaper_v3.png');
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		display: none;
		margin: auto;
		min-width: 100px;
		position: absolute;
		z-index: 3;
	}

	a {
		display: block;
		text-align: center;
	}

	nav:hover section {
		display: block;
	}

	img {
		height: 2.5em;
		width: 2.5em;
	}

	@media(min-width: 700px) {
		img {
			display: none;
		}

		nav {
			display: block;
			width: 100%;
		}

		nav:hover section {
			display: flex;
		}

		section {
			box-shadow: none;
			display: flex;
			justify-content: space-around;
			position: relative;
			z-index: 2;
		}

		a {
			display: inline-block;
		}
	}
`;
