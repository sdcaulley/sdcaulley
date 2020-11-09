import { css } from 'lit-element'

export const placement = css`
  :host {
    display: block;
    margin: auto;
    position: inherit;
    width: 100%;
  }

  h1,
  h2,
  h3 {
    margin: auto;
    text-align: center;
  }

  h2 {
    text-transform: capitalize;
  }

  header {
    padding: 0.5em;
  }

  main-menu {
    display: inline-block;
    margin: 0;
  }

  h3 {
    clear: both;
  }

  @media (min-width: 700px) {
    header {
      display: block;
    }

    main-menu {
      dispaly: block;
    }
  }
`
