import { css } from 'lit-element'

export const placement = css`
  :host {
    position: relative;
    width: 100%;
  }

  form {
    margin: auto;
    padding: 0.5em;
    width: 80%;
  }

  label {
    display: inline-block;
    vertical-align: top;
  }

  input {
    display: inline-block;
  }

  select {
    display: inline-block;
  }

  section {
    margin: 0.5em;
  }

  fieldset {
    border: none;
  }
`
