import { css } from 'lit-element'

export const menu = css`
  :host {
    display: block;
    margin: auto;
    position: inherit;
    width: 100%;
  }

  nav {
    position: relative;
  }

  section {
    display: none;
    margin: auto;
    min-width: 100px;
    position: absolute;
  }

  a {
    display: block;
    text-align: center;
  }

  nav:hover section {
    display: block;
  }

  img {
    height: 2.5em;
    width: 2.5em;
  }

  @media (min-width: 700px) {
    img {
      display: none;
    }

    nav {
      display: block;
      width: 100%;
    }

    nav:hover section {
      display: flex;
    }

    section {
      display: flex;
      justify-content: space-around;
      position: relative;
    }

    a {
      display: inline-block;
      font-size: 1.5em;
    }
  }
`
