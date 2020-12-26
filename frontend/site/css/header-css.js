import { css } from 'lit-element'

export const placement = css`
  :host {
    display: block;
    margin: auto;
    position: inherit;
    width: 100%;
  }

  .location {
    grid-area: location;
    justify-self: center;
    margin: 0.25em;
    text-transform: capitalize;
  }

  .tag-line {
    grid-area: tag-line;
    justify-self: center;
    margin: 0.25em;
    text-align: center;
  }

  .site-heading {
    grid-area: site-heading;
    justify-self: center;
    margin: 0.25em;
  }

  .main-menu {
    grid-area: main-menu;
    justify-self: center;
    margin: 0.25em;
  }

  .header {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      'main-menu site-heading'
      'tag-line tag-line'
      'location location';
    margin: auto;
  }

  @media (min-width: 700px) {
    .header {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-areas:
        'main-menu'
        'site-heading'
        'tag-line'
        'location';
      margin: auto;
    }

    .main-menu {
      dispaly: block;
    }
  }
`
