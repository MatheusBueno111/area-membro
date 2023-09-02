import React, { ComponentProps } from 'react'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'

interface CarouselProps extends ComponentProps<'div'> {}

const Carousel: React.FC<CarouselProps> = ({ ...rest }) => {
  const navigate = useNavigate()

  const handleWatchClass = () => {
    navigate('/class')
  }

  return (
    <S.Container {...rest}>
      <p>Cursos e módulos</p>
      <S.ScrollContainer onClick={handleWatchClass}>
        <S.Wrapper>
          <S.Image />
          <S.Image />
          <S.Image />
          <S.Image />
          <S.Image />
          <S.Image />
          <S.Image />
          <S.Image />
          <S.Image />
          <S.Image />
          <S.Image />
          <S.Image />
        </S.Wrapper>
      </S.ScrollContainer>

      <p>Cursos e módulos</p>
      <S.ScrollContainer>
        <S.Wrapper>
          <S.Image />
          <S.Image />
          <S.Image />
          <S.Image />
          <S.Image />
          <S.Image />
          <S.Image />
          <S.Image />
          <S.Image />
          <S.Image />
          <S.Image />
          <S.Image />
        </S.Wrapper>
      </S.ScrollContainer>
    </S.Container>
  )
}

export default Carousel
