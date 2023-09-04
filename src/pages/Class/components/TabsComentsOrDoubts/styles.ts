import { styled } from 'styled-components'

interface ContainerSelectTabProps {
  selected: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ComentsAndDoubtsButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 4.8rem;
`

export const TabButton = styled.button<ContainerSelectTabProps>`
  display: flex;
  border-bottom: 4px solid
    ${({ theme, selected }) =>
      selected ? theme.colors.white : theme.colors['text-dark']};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  justify-content: center;
  padding-bottom: 1.1rem;
  font-weight: 700;
`

export const NewComment = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`

export const NewDoubt = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
`
