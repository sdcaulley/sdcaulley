import { css } from 'lit-element'

export const placement = css`
  section {
    display: grid;
    grid-auto-rows: minmax(5em auto);
    gap: 1em;
    margin: auto;
    padding: 1em;
    width: 50%;
  }

  .category-link {
    align-items: center;
    display: grid;
    font-weight: bold;
    min-height: 3em;
    text-align: center;
  }

  @media (min-width: 500px) {
    section {
      grid-template-columns: repeat(3, minmax(5em, 1fr));
      width: 90%;
    }

    .category-link {
      font-size: 1.5em;
      min-height: 5em;
    }
  }
`
