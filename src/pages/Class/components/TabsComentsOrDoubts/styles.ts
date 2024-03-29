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

  @media (min-width: 768px) {
    &:first-child {
      display: none;
    }
  }
`

export const NewComment = styled.div`
  display: flex;
  flex-direction: column;

  .new-comment {
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 2rem;
    .comment-button {
      align-self: end;
    }
  }

  @media (min-width: 768px) {
    .new-comment {
      display: flex;
      flex-direction: row;
      gap: 2rem;
    }
  }
`

export const NewDoubt = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .button-doubt {
    display: flex;
    flex-direction: row;
    justify-content: end;
  }

  .arquivo-button {
    display: flex;
    flex-direction: row;
  }

  @media (min-width: 768px) {
    div {
      display: flex;
      flex-direction: row;
      gap: 1.2rem;
    }

    .arquivo-button {
      flex-direction: row;
    }
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media (min-width: 768px) {
    display: none;
  }
`
export const Comments = styled.div`
  display: flex;
  flex-direction: row !important;
  justify-content: flex-start;
  align-self: start;
  margin-top: 8.1rem;
  margin-bottom: 12rem;
  gap: 1.2rem;

  .comment {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    padding: 2.4rem;
    background-color: #232832;
    max-width: 59.4rem;
    border-radius: 0.8rem;
  }

  .comment-tiltle {
    display: flex;
    color: white;
    font-weight: 700;
  }

  .comment-content {
    color: #b2b2b2;
  }

  .user {
    max-width: 48px;
    width: 100%;
    height: 48px;
    background-color: white;
    border-radius: 9999px;
  }
`
