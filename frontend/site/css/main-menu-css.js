import { css } from 'lit-element'

export const menu = css`
  :host {
    position: inherit;
    width: 100%;
  }

  nav {
    display: grid;
    align-items: center;
    gap: 1em;
    grid-template-columns: repeat(auto-fit, minmax(4em, 1fr));
  }

  a {
    text-align: center;
  }
`
