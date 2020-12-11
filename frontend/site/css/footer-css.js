import { css } from 'lit-element'

export const footer = css`
  :host {
    display: block;
    margin: auto;
    position: inherit;
    width: 100%;
  }

  .footer {
    display: grid;
    margin: auto;
    min-height: 5em;
  }

  .copy-right {
    align-self: center;
    margin: 0.25em;
  }
`
