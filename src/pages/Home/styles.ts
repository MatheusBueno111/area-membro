import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  .carousel {
    margin-top: 36.9rem;
    margin-left: 2.5rem;
  }

  @media (min-width: 768px) {
    .carousel {
      margin-top: 56.1rem;
      margin-left: 4.9rem;
    }
  }
`

export const BackgroundImage = styled.div`
  min-width: 10rem;
  width: 100%;
  height: 64rem;
  background-image: url('./mobileBackground.png');
  background-size: cover;
  background-position: top;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  @media (min-width: 768px) {
    min-height: 10rem;
    height: 84.3rem;
    background-position: unset;
    background-image: url('./desktopBackground.png');
  }
`
