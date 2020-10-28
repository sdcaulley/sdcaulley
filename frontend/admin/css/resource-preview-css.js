import { css } from 'lit-element'

export const placement = css`
  :host {
    position: relative;
    width: 100%;
  }

  article {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: auto;
    padding: 0.5em;
  }

  h4 {
    margin: 0;
    padding: 0.25em;
  }

  p {
    margin: 0;
    padding: 0.25em;
  }

  .type {
    display: inline-block;
    margin-right: 0.5em;
    margin-top: 0.5em;
  }
`
