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
  padding: 1.6rem;
  .description-class {
    color: #b2b2b2;
    font-size: 1.6rem;
  }

  @media (min-width: 768px) {
    padding: unset;
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
    max-width: 19.8rem;
    width: 100%;
    font-weight: 700;
    font-size: 1.6rem;
  }

  div {
    max-width: 10rem;
    width: 100%;
  }
  .conclude-button {
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  @media (min-width: 768px) {
    h3 {
      font-size: 2.4rem;
      max-width: 38rem;
    }
    div {
      max-width: 20rem;
      width: 100%;
    }

    .conclude-button {
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`

export const DescriptionVideoClass = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const ComplementaryMaterial = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
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
