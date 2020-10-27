import { css } from 'lit-element'

export const paper = css`
  .paper {
    background-color: rgba(250, 240, 230, 0.7);
    background-image: url('./css/ricepaper_v3.png');
    border-radius: 1em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    z-index: 2;
  }

  .paper_nav {
    background-color: rgba(250, 240, 230, 0.7);
    background-image: url('./css/ricepaper_v3.png');
    border-radius: 1em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    z-index: 3;
  }

  @media (min-width: 700px) {
    .paper_nav {
      box-shadow: none;
      z-index: 2;
    }
  }
`
