import { css } from 'lit-element'

export const placement = css`
  :host {
    position: relative;
    width: 100%;
  }

  article {
    margin: 0.25em 0;
    width: 90%;
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
