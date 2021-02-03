import { css } from 'lit-element'

export const placement = css`
  .blog-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1em;
    width: 100%:
  }

  @media (min-width: 1000px) {
    .col-1: {
      grid-area: 'col-1';
    }

    .col-2 {
      grid-area: 'col-2';
    }

    .blog-container {
      grid-template-columns: 1fr 3fr;
      grid-template-areas:
        'col-1 col-2';
    }
  }
`
