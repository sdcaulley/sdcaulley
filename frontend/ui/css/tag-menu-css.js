import { css } from 'lit-element'

export const menu = css`
  :host {
    position: inherit;
    width: 100%;
  }

  section {
    margin: 0.5em;
    padding: 0;
  }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
    margin: 0.25em;
  }

  li {
    display: inline-block;
    margin: 0;
    padding: 0;
  }

  h4 {
    margin: 0.5em;
    text-align: center;
  }

  @media (min-width: 1000px) {
    ul {
      flex-direction: column;
      justify-content: center;
    }

    h4 {
      text-align: center;
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
