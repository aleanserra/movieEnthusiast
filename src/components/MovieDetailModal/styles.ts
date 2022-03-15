import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font: var(--unnamed-font-style-normal) normal 300 32px/38px Roboto;
    letter-spacing: var(--unnamed-character-spacing-0);
    font: normal normal 300 32px/38px Roboto;
    letter-spacing: 0px;
    color: #164e78;
    opacity: 1;
  }
  .close-button {
    position: absolute;
    right: 2rem;
    top: 1.5rem;
    border: 0;
    cursor: pointer;
    p {
      font: var(--unnamed-font-style-normal) normal
        var(--unnamed-font-weight-normal) 8px/16px Roboto;
      text-align: left;
      font: normal normal normal 8px/16px Roboto;
      letter-spacing: 0.64px;
      color: #718fa2;
      opacity: 1;
    }
  }
  h4 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) 14px/17px Roboto;
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal normal 14px/17px Roboto;
    letter-spacing: 0px;
    color: #78849eb9;
    opacity: 1;
    margin-top: 1rem;
  }
  p {
    font: var(--unnamed-font-style-normal) normal medium 16px/19px Roboto;
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal medium 16px/19px Roboto;
    letter-spacing: 0px;
    color: #78849e;
    opacity: 1;
  }

  .cast {
    font: var(--unnamed-font-style-normal) normal medium 16px/19px Roboto;
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal medium 16px/19px Roboto;
    letter-spacing: 0px;
    color: #00baff;
    opacity: 1;
  }
`;
