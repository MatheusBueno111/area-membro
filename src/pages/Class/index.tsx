import React from 'react'

import * as S from './styles'
import Header from '../../components/Header'
import { Button } from '../../components/CustomButtom'

import AsideContent from './components/AsideContent'
import TabsComentsOrDoubts from './components/TabsComentsOrDoubts'
import ComplementaryMaterial from './components/ComplementaryMaterial'
import DescriptionVideo from './components/DescriptionVideo'

const Class: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <S.Main>
          <S.VideoClass />

          <S.TitleAndConcludeVideo>
            <h3>Introdução ao Marketing estratégico</h3>
            <Button.Root
              bgcolor="#FFC019;"
              maxwidth="20rem"
              className="conclude-button"
            >
              <Button.Control>CONCLUIR AULA</Button.Control>
            </Button.Root>
          </S.TitleAndConcludeVideo>
          <S.DescriptionVideoClass>
            <DescriptionVideo />
          </S.DescriptionVideoClass>

          <S.ComplementaryMaterial>
            <ComplementaryMaterial />
          </S.ComplementaryMaterial>

          <TabsComentsOrDoubts />
        </S.Main>

        <AsideContent />
      </S.Wrapper>
    </S.Container>
  )
}

export default Class
