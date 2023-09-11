import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  width: 485px;
  height: 780px;
  border-radius: 8px;
  padding: 1rem 0.8rem 2.4rem 2rem;
  position: absolute;
  top: 700px;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.8);
  align-items: center;
  z-index: 999;
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

  @media (min-width: 768px) {
    width: 45rem;

    label {
      font-size: 1.6rem;
    }
  }
  .title {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    size: 16px;
  }
  .container {
    margin-bottom: 20px;
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
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #717171;
  }
  .save-button {
    margin-left: auto;
    max-width: 150px;
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

export const SquareWrapper = styled.div`
  width: 455px;
  height: 264px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  background-color: #232832;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  .sub-button {
    background-color: none;
    padding: 90px 8px 16px;
    border: none;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.yellow};
    cursor: pointer;
    font-weight: 700;
  }
`
