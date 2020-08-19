import { css } from 'lit-element';

export const menu = css`
	:host {
		position: inherit;
		width: 100%;
	}

	#code {
		color: #385400;
	}

	.code {
		color: #7da134;
	}

	#craft {
		color: #5a0000;
	}

	.craft {
		color: #ad3838;
	}

	#culture {
		color: #003636;
	}

	.culture {
		color: #226868;
	}

	section {
		background-color: rgba(250, 240, 230, 0.7);
		background-image: url('../css/ricepaper_v3.png');
		border-radius: 1em;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		margin: 0.5em;
		padding: 0;
		z-index: 2;
	}

	ul {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 0;
		margin: 0.25em;
	}

	li {
		display: inline-block;
		margin: 0;
		padding: 0;
	}

	h4 {
		margin: 0.5em;
		text-align: center;
	}

	@media(min-width: 1000px) {
		ul {
			flex-direction: column;
			justify-content: center;
		}

		h4 {
			text-align: center;
		}

		li {
			padding-top: 0.5em;
			text-align: center;
		}

		a {
			font-size: 1em;
		}
	}
`;
