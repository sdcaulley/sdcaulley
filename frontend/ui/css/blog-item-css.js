import { css } from 'lit-element'

export const placement = css`
  :host {
    position: relative;
    width: 100%;
  }

  article {
    margin: 0.5em;
    padding: 0.5em;
  }

  h4 {
    margin: 0;
    padding: 0.25em;
  }

  a {
    display: inline-block;
    margin: 1em;
  }

  .flex-container {
    display: flex;
  }

  .tags {
    display: inline-block;
  }
`
