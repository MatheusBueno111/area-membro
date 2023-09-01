import React from 'react'

import * as S from './styles'
import Header from '../../components/Header'
import Carousel from '../../components/Carousel'

const Home: React.FC = () => {
  return (
    <S.Container>
      <S.BackgroundImage />
      <Header />
      <Carousel className="carousel" />
    </S.Container>
  )
}

export default Home
