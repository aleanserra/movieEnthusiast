import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      font: var(--unnamed-font-style-normal) normal
        var(--unnamed-font-weight-bold) var(--unnamed-font-size-10) / 20px
        Roboto;
      letter-spacing: var(--unnamed-character-spacing-0);
      text-align: left;
      font: normal normal bold 10px/20px Roboto;
      letter-spacing: 0px;
      color: #0b749b;
      opacity: 1;
      border-bottom: 1px solid #0b749b;
      padding: 0 2rem;

      &:first-child {
        text-align: center;
      }
    }
    td {
      font: var(--unnamed-font-style-normal) normal
        var(--unnamed-font-weight-normal) 16px/20px Roboto;
      letter-spacing: var(--unnamed-character-spacing-0);
      text-align: left;
      font: normal normal normal 16px/20px Roboto;
      letter-spacing: 0px;
      color: #536b7a;
      opacity: 1;
      border-bottom: 1px solid #9aaebb;

      padding: 1rem 2rem;
      &:first-child {
        text-align: center;
      }
      img {
        cursor: pointer;
      }
    }
  }
`;
