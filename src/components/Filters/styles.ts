import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) 24px / var(--unnamed-line-spacing-12)
      Roboto;
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-386071);
    text-align: left;
    font: normal normal normal 24px/12px Roboto;
    letter-spacing: 0px;
    color: #386071;
    opacity: 1;
  }
  div {
    display: flex;
    justify-content: left;
    gap: 1rem;
    padding: 2rem 0;

    button {
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #78849e66;
      border-radius: 20px;
      opacity: 1;
      padding: 0.5rem 1rem;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      color: #78849e;
    }
  }
`;
