import { styled } from 'styled-components'

interface ContainerProps {
  width?: string
  height?: string
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  padding: 1.2rem 2.4rem;
  gap: 1rem;
  width: 100%;
  height: ${({ height }) => height};
  background-color: ${({ theme }) => theme.colors.bgInput};
  border-radius: 0.4rem;

  @media (min-width: 768px) {
    background: rgba(237, 237, 237, 0.1);
  }
`
