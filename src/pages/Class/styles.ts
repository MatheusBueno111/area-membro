import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  width: 100%;
  margin-top: 4.8rem;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 81.5rem;
  width: 100%;
  justify-content: center;
  align-items: center;

  .description-class {
    color: #b2b2b2;
    font-size: 1.6rem;
  }
`

export const VideoClass = styled.div`
  display: flex;
  border-radius: 0.8rem;
  height: 46rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors['text-dark']};
`

export const TitleAndConcludeVideo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-top: 2.4rem;
  margin-bottom: 2rem;

  h3 {
    color: ${({ theme }) => theme.colors.white};
    max-width: 38rem;
    width: 100%;
    font-weight: 700;
    font-size: 2.4rem;
  }
`

export const DescriptionVideoClass = styled.p`
  color: #b2b2b2;
  font-size: 1.6rem;
  text-align: justify;
`

export const ComplementaryMaterial = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 4.3rem;
  gap: 1.2rem;
  margin-bottom: 8.2rem;

  .class-img {
    display: flex;
    border-radius: 0.4rem;
    height: 12rem;
    max-width: 12rem;
    width: 100%;
    background-color: #232832;
  }

  .complementary-material-description {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    p {
      color: ${({ theme }) => theme.colors.yellow};
      font-size: 1.8rem;
      font-weight: 700;
    }

    span {
      color: #b2b2b2;
      font-size: 1.6rem;
      text-align: justify;
    }
  }
`

export const WrapperComents = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 4.8rem;
  }
  p {
    text-align: center;
    color: white;
    width: 100%;
    border-bottom: 1px solid white;
  }

  .new-comment {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 2rem;
  }
`

export const Comments = styled.div`
  display: flex;
  flex-direction: row;
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
    min-width: 48px;
    height: 48px;
    background-color: white;
    border-radius: 9999px;
  }
`
