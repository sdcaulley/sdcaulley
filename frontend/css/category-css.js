import { css } from 'lit-element';

export const placement = css`
	section {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 1em;
	}

	a {
		background-color: rgba(250, 240, 230, 0.7);
		background-image: url('../css/ricepaper_v3.png');
		border-color: grey;
		border-style: outset;
		border-width: 0.25em;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		color: black;
		display: inline-block;
		font-weight: bold;
		margin: 0.25em;
		padding: 10% 0.5em;
		text-align: center;
		text-decoration: none;
		width: 25%;
		z-index: 2;
	}

	@media(min-width: 1000px) {
		section {
			flex-direction: row;
			justify-content: space-between;
		}
	}
`;
