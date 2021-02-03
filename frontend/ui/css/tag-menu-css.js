import { css } from 'lit-element'

export const menu = css`
  :host {
    position: inherit;
    width: 100%;
  }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0;
    padding: 0;
  }

  h4 {
    text-align: center;
    margin-top: 0;
  }

  @media (min-width: 1000px) {
    ul {
      flex-direction: column;
      justify-content: center;
    }

    li {
      padding-top: 0.5em;
      text-align: center;
    }

    a {
      font-size: 1em;
    }
  }
`
