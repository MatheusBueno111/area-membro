import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  width: 485px;
  height: 760px;
  border-radius: 8px;
  padding: 1rem 0.8rem 2.4rem 2rem;
  position: absolute;
  top: 100px;
  left: 0%;
  right: 10px;
  margin: auto;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.8);
  .exclude-button {
    width: 50px;
    margin-right: auto;
    margin-left: 10px;
    max-width: 70px;
    background: none;
  }
  .exclude-button-text {
    color: #ff3131;
    font-weight: 400;
  }
  .save-button {
    margin-left: auto;
    max-width: 70px;
  }
  .cancel-button {
    margin-left: auto;
    margin-left: 140px;
    max-width: 150px;
    background: none;
  }
  .c-cancel-button {
    color: #fff;
    font-weight: 400;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  margin-top: 32px;

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

  .button-group {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  .button-with-label {
    display: flex;
    align-items: center;
  }

  .radial-button {
    width: 40px;
    height: 40px;
    border: 2px solid #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
  }

  .radial-button .radial-inner {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
  }

  .radial-button.selected .radial-inner {
    width: 80%;
    height: 80%;
    background-color: #f5d742;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .radial-button.selected {
    border: 2px solid #f5d742; /* Alterado para borda amarela quando selecionado */
  }

  .button-label {
    color: #fff;
    margin-left: 8px;
  }

  .button-label {
    color: #fff;
    margin-left: 8px;
  }

  @media (min-width: 768px) {
    width: 45rem;

    label {
      font-size: 1.6rem;
    }
  }
  .title {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    margin-left: -20px;
  }
  .container {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }

  .switch-button {
    margin-left: auto;
  }

  .add-button {
    width: 140px;
    margin-right: auto;
    max-width: 150px;
    background: #323c4c;
    margin-left: -1px;
  }
  .add-button-text {
    color: #fff;
    font-weight: 400;
  }
`
