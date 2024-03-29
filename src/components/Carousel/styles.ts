import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  p {
    color: ${({ theme }) => theme.colors.white};
    font-family: 'Inter';
    font-size: 24px;
    font-weight: 700;
    margin-top: 1.2rem;
    margin-bottom: 3rem;
  }

  .button {
    margin-left: auto;
    margin-bottom: -4rem;
    margin-right: 10px;
  }
  .input-button {
    color: text-white;
  }

  .pencil-icon {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 12px;
    width: 2.8rem;
    height: 2.8rem;
    background-color: none;
    background: #323c4d;
    border-radius: 70%;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    p {
      font-size: 1.6rem;
      margin-top: 1.6rem;
    }
  }
`
export const IconContainer = styled.div`
  position: relative;
  display: inline-block;
  margin: 0px;
`

export const ScrollContainer = styled.div`
  overflow-x: auto;
  max-width: 139.2rem;
  width: 100%;
  cursor: pointer;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 160, 0.2) transparent;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 160, 0.2);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent; /* Cor da trilha da barra de rolagem */
  }

  @media (min-width: 768px) {
    max-width: 139.2rem;
  }
`

export const Image = styled.div`
  display: flex;
  min-height: 28rem;
  height: 100%;
  min-width: 20rem;
  background-color: blue;
  border-radius: 0.8rem;

  @media (min-width: 768px) {
    min-width: 24rem;
    width: 100%;
    height: 33.6rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;

  @media (min-width: 768px) {
    gap: 2.4rem;
  }
`
