import { css } from 'lit-element'

export const placement = css`
  view-base {
    display: block;
    position: inherit;
    margin: auto;
    width: 100vw;
  }

  .header {
    grid-area: header;
  }

  .content {
    grid-area: content;
  }

  .footer {
    grid-area: footer;
  }

  .wrapper {
    display: grid;
    width: 90%;
    margin: 0 auto 0 auto;
    gap: 1em;
    grid-template-areas:
      'header header'
      'content content'
      'footer footer';
  }
`
