import React from 'react'

import * as S from './styles'
import Header from '../../components/Header'
import { Button } from '../../components/CustomButtom'

import AsideContent from './components/AsideContent'
import TabsComentsOrDoubts from './components/TabsComentsOrDoubts'

const Class: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <S.Main>
          <S.VideoClass />

          <S.TitleAndConcludeVideo>
            <h3>Introdução ao Marketing estratégico</h3>
            <Button.Root bgcolor="#FFC019;" maxwidth="20rem">
              <Button.Control>CONCLUIR AULA</Button.Control>
            </Button.Root>
          </S.TitleAndConcludeVideo>
          <S.DescriptionVideoClass>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </S.DescriptionVideoClass>

          <S.ComplementaryMaterial>
            <div className="class-img" />
            <div className="complementary-material-description">
              <p> Material complementar</p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </span>
            </div>
          </S.ComplementaryMaterial>

          <TabsComentsOrDoubts />

          <S.Comments>
            <div className="user" />
            <div className="comment">
              <p className="comment-tiltle">Nome do aluno</p>
              <span className="comment-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </span>
            </div>
          </S.Comments>
        </S.Main>

        <AsideContent />
      </S.Wrapper>
    </S.Container>
  )
}

export default Class
