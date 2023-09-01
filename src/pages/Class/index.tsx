import React from 'react'

import * as S from './styles'
import Header from '../../components/Header'
import { Button } from '../../components/CustomButtom'
import { Input } from '../../components/CustomInput'

const Class: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <S.Warpper>
        <S.Main>
          <S.ImageClass />
          <S.VideoTitle>
            <h3>Introdução ao Marketing estratégico</h3>
            <Button.Root bgcolor="#FFC019;" maxwidth="20rem">
              <Button.Control>CONCLUIR AULA</Button.Control>
            </Button.Root>
          </S.VideoTitle>
          <p className="description-class">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>

          <S.ComplementMaterial>
            <div className="class-img" />
            <div className="content">
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
          </S.ComplementMaterial>

          <S.WrapperComents>
            <div>
              <p>Comentarios</p>
              <p>Dúvidas</p>
            </div>

            <div className="new-comment">
              <Input.Root>
                <Input.Control placeholder="Deixar um comentário" type="text" />
              </Input.Root>

              <Button.Root bgcolor="#FFC019">
                <Button.Control>Enviar</Button.Control>
              </Button.Root>
            </div>
          </S.WrapperComents>

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

        <S.Aside>
          <S.ContentAside>
            <S.AsideImageClass />
            <div>
              <p>Titulo aula do conteúdo a seguir</p>
              <span>Texto descritivo da aula a seguir para saber mais....</span>
            </div>
          </S.ContentAside>
          <S.ContentAside>
            <S.AsideImageClass />
            <div>
              <p>Titulo aula do conteúdo a seguir</p>
              <span>Texto descritivo da aula a seguir para saber mais....</span>
            </div>
          </S.ContentAside>
          <S.ContentAside>
            <S.AsideImageClass />
            <div>
              <p>Titulo aula do conteúdo a seguir</p>
              <span>Texto descritivo da aula a seguir para saber mais....</span>
            </div>
          </S.ContentAside>
          <S.ContentAside>
            <S.AsideImageClass />
            <div>
              <p>Titulo aula do conteúdo a seguir</p>
              <span>Texto descritivo da aula a seguir para saber mais....</span>
            </div>
          </S.ContentAside>
          <S.ContentAside>
            <S.AsideImageClass />
            <div>
              <p>Titulo aula do conteúdo a seguir</p>
              <span>Texto descritivo da aula a seguir para saber mais....</span>
            </div>
          </S.ContentAside>
          <S.ContentAside>
            <S.AsideImageClass />
            <div>
              <p>Titulo aula do conteúdo a seguir</p>
              <span>Texto descritivo da aula a seguir para saber mais....</span>
            </div>
          </S.ContentAside>
        </S.Aside>
      </S.Warpper>
    </S.Container>
  )
}

export default Class
