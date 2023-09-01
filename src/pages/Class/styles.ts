import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
`

export const Warpper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  width: 100%;
  margin-top: 4.8rem;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

  .description-class {
    color: #b2b2b2;
    font-size: 1.6rem;
  }
`

export const ComplementMaterial = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 4.3rem;
  gap: 1.2rem;
  .class-img {
    display: flex;
    border-radius: 0.4rem;
    height: 12rem;
    min-width: 12rem;
    background-color: #232832;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    p {
      color: #ffc019;
      font-size: 1.8rem;
      font-weight: 700;
    }

    span {
      color: #b2b2b2;
      font-size: 1.6rem;
      font-style: normal;
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

export const ImageClass = styled.div`
  display: flex;
  border-radius: 0.8rem;

  min-width: 46rem;
  height: 81.5rem;
  width: 100%;

  background-color: ${({ theme }) => theme.colors['text-dark']};
`
export const VideoTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;

  h3 {
    color: ${({ theme }) => theme.colors.white};
    max-width: 38rem;
    width: 100%;
    font-weight: 700;
  }
`

export const ContentAside = styled.div`
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.white};
  gap: 1.2rem;
  div {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
  p {
    font-size: 16px;
    font-weight: 700;
  }

  span {
    color: #b2b2b2;
  }
`

export const AsideImageClass = styled.div`
  max-width: 9.5rem;
  max-height: 16.8rem;
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors['text-dark']};
`

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`
