import { css } from 'lit-element'

export const placement = css`
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
    gap: 1em;
    justify-items: center;
    margin: auto;
    padding: 1em;
  }

  .category-link {
    align-items: center;
    display: grid;
    font-weight: bold;
    min-height: 8em;
    text-align: center;
    min-width: 8em;
  }

  @media (min-width: 1000px) {
    .category-link {
      font-size: 1.5em;
    }
  }
`
