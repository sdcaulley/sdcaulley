import { css } from 'lit-element';

export const placement = css`
	:host {
		display: block;
		margin: auto;
		position: inherit;
		width: 100%;
	}

	#headings {
		display: flex;
		flex-direction: column;
		margin: auto;
		width: 90%;
	}

	#menu {
		display: flex;
		width: 10%;
	}

	#code {
		color: #385400;
	}

	#craft {
		color: #5a0000;
	}

	#culture {
		color: #003636;
	}

	h1, h2, h3 {
		margin: 0.25em;
		text-align: center;
	}

	h2 {
		text-transform: capitalize;
	}

	header {
		background-color: rgba(250, 240, 230, 0.7);
		background-image: url('../css/ricepaper_v3.png');
		border-radius: 1em;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		display: flex;
		margin: 0.5em;
		padding: 0.5em;
		z-index: 2;
	}

	main-menu {
		display: inline-block;
		margin: 0;
	}

	@media(min-width: 700px) {
		#headings {
			display: block;
			width: 100%;
		}

		#menu {
			display: block;
			width: 100%;
		}

		header {
			display: block;
		}

		main-menu {
			dispaly: block;
		}
	}
`;
