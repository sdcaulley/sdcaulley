import { css } from 'lit-element'

export const placement = css`
  :host {
    position: relative;
    width: 100%;
  }

  .list-container {
    display: grid;
    grid-template-colmuns: 1fr;
    gap: 1em;
    width: 100%;
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
`
