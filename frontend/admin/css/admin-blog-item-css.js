import { css } from 'lit-element';

export const placement = css`
	:host {
		position: relative;
		width: 100%;
	}

	form {
		background-color: rgba(250, 240, 230, 0.7);
		background-image: url('../../css/ricepaper_v3.png');
		border-radius: 1em;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		margin: auto;
		padding: 0.5em;
		width: 80%;
		z-index: 2;
	}

	label {
		display: inline-block;
		vertical-align: top;
	}

	input {
		display: inline-block;
	}

	select {
		display: inline-block;
	}

	section {
		margin: 0.5em;
	}
`;
