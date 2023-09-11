import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  width: 485px;
  height: 790px;
  border-radius: 8px;
  padding: 1rem 0.8rem 2.4rem 2rem;
  position: absolute;
  top: 100px;
  left: 33%;

  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.8);

  .save-button {
    align-self: end;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  margin-top: -5px;

  label {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.2rem;
    font-weight: 400;
  }

  .input-container-descricao {
    position: relative;

    input::placeholder {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  @media (min-width: 768px) {
    width: 45rem;

    label {
      font-size: 1.6rem;
    }
  }
  .save-button {
    width: 150px;
    margin-left: auto;
  }
  .title {
    margin-left: -15px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    size: 16px;
  }
  .container {
    margin-bottom: 15px;
    display: flex;
    flex-direction: row;
  }
  .exit-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    width: 2.8rem;
    height: 2.8rem;
    background-color: none;
    background: rgba(237, 237, 237, 0.2);
    border-radius: 50%;
    cursor: pointer;
  }
  .switch-button {
    margin-left: auto;
  }

  span {
    margin-top: -25px;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #717171;
  }
`

export const SquareWrapper = styled.div`
  width: 195px;
  height: 264px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  background-color: #232832;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  button {
    background-color: none;
    padding: 50px 8px 16px;
    border: none;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.yellow};
    cursor: pointer;
    font-weight: 700;
  }
`
