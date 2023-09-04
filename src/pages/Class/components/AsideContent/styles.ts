import { styled } from 'styled-components'

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  max-width: 40.1rem;
  width: 100%;
`

export const ContentAside = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1.2rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;
    flex: 1;
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    font-weight: 700;
  }

  span {
    color: #b2b2b2;
  }
`

export const AsideVideoClass = styled.div`
  max-width: 16.8rem;
  width: 100%;
  height: 9.5rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors['text-dark']};
`
