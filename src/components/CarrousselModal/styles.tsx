import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  width: 210px;
  height: 115px;
  border-radius: 8px;
  padding: 3.2rem 2.4rem;
  position: absolute;
  top: 80px;
  right: 10px;
  margin: auto;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.8);

  .icon-container {
    margin-bottom:20px;
    display:flex;
    flex-direction: row;
  }

  @media (min-width: 768px) {
    top: 104px;
    right: 15px;
    left: 49.2%;
  }
  p {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    size: 16px;
    margin-left: 15px;
  }
`
export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px; /* Largura do modal (ajuste conforme sua necessidade) */
  height: 300px; /* Altura do modal (ajuste conforme sua necessidade) */
  border-radius: 8px;
  z-index: 999; /* Certifique-se de que o modal esteja acima de outros elementos */
`;