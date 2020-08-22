import { css } from 'lit-element';

export const placement = css`
	:host {
		position: relative;
		width: 100%;
	}

	article {
		background-color: rgba(250, 240, 230, 0.7);
		background-image: url('../css/ricepaper_v3.png');
		border-radius: 1em;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		margin: 0.5em;
		padding: 0.5em;
		z-index: 2;
	}

	h4 {
		margin: 0;
		padding: 0.25em;
	}

	p {
		margin: 0;
		padding: 0.25em;
	}

	.tags {
		display: inline-block;
		padding: 0.25em;
	}
`;
