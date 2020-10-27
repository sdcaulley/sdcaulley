import { css } from 'lit-element'

export const placement = css`
  :host {
    display: block;
    margin: auto;
    position: inherit;
    width: 100%;
  }

  #headings {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 90%;
  }

  #menu {
    display: flex;
    width: 10%;
  }

  h1,
  h2,
  h3 {
    margin: 0.25em;
    text-align: center;
  }

  h2 {
    text-transform: capitalize;
  }

  header {
    display: flex;
    margin: 0.5em;
    padding: 0.5em;
  }

  main-menu {
    display: inline-block;
    margin: 0;
  }

  @media (min-width: 700px) {
    #headings {
      display: block;
      width: 100%;
    }

    #menu {
      display: block;
      width: 100%;
    }

    header {
      display: block;
    }

    main-menu {
      dispaly: block;
    }
  }
`
