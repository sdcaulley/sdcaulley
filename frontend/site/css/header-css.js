import { css } from 'lit-element'

export const placement = css`
  :host {
    margin: auto;
    position: inherit;
    width: 100%;
  }

  .location {
    grid-area: location;
    text-transform: capitalize;
  }

  .tag-line {
    grid-area: tag-line;
    text-align: center;
  }

  .site-heading {
    grid-area: site-heading;
  }

  .main-menu {
    grid-area: main-menu;
  }

  .header {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      'main-menu'
      'site-heading'
      'tag-line'
      'location';
    justify-items: center;
    margin: auto;
    padding: 0.5em;
  }
`
