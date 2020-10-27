import { css } from 'lit-element'

export const placement = css`
  section {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1em;
  }

  a {
    color: black;
    display: inline-block;
    font-weight: bold;
    margin: 0.25em;
    padding: 10% 0.5em;
    text-align: center;
    text-decoration: none;
    width: 30%;
  }

  @media (min-width: 500px) {
    section {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`
