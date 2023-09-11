import React, { useState } from 'react'

import * as S from './styles'
import { Input } from '../../../../components/CustomInput'
import { Button } from '../../../../components/CustomButtom'
import { PaperClipIcon } from '../../../../components/Icons/PaperClip.Icon'
import DescriptionVideo from '../DescriptionVideo'
import ComplementaryMaterial from '../ComplementaryMaterial'

const TabsComentsOrDoubts: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<
    'comment' | 'doubt' | 'description'
  >('comment')

  const handleTabClick = (tab: 'comment' | 'doubt' | 'description') => {
    setSelectedTab(tab)
  }

  return (
    <S.Container>
      <S.ComentsAndDoubtsButtons>
        <S.TabButton
          onClick={() => handleTabClick('description')}
          selected={selectedTab === 'description'}
        >
          Descrição
        </S.TabButton>
        <S.TabButton
          onClick={() => handleTabClick('comment')}
          selected={selectedTab === 'comment'}
        >
          Comentários
        </S.TabButton>
        <S.TabButton
          onClick={() => handleTabClick('doubt')}
          selected={selectedTab === 'doubt'}
        >
          Dúvidas
        </S.TabButton>
      </S.ComentsAndDoubtsButtons>

      {selectedTab === 'comment' ? (
        <S.NewComment>
          <div className="new-comment">
            <Input.Root width="59.4rem">
              <Input.Control placeholder="Deixar um comentário" type="text" />
            </Input.Root>

            <Button.Root
              maxwidth="20.1rem"
              bgcolor="#FFC019"
              className="comment-button"
            >
              <Button.Control>Enviar</Button.Control>
            </Button.Root>
          </div>

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
        </S.NewComment>
      ) : selectedTab === 'doubt' ? (
        <S.NewDoubt>
          <div>
            <Input.Root>
              <Input.Control placeholder="Deixar uma dúvida" type="text" />
            </Input.Root>

            <div className="button-doubt">
              <Button.Root
                maxwidth="11rem"
                bgcolor="#FFFFFF"
                className="arquivo-button"
              >
                <Button.Control>Arquivo</Button.Control>
                <Button.Icon icon={PaperClipIcon} />
              </Button.Root>

              <Button.Root maxwidth="11rem" bgcolor="#FFC019">
                <Button.Control>Enviar</Button.Control>
              </Button.Root>
            </div>
          </div>
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
        </S.NewDoubt>
      ) : selectedTab === 'description' ? (
        <S.Description>
          <DescriptionVideo />
          <ComplementaryMaterial />
        </S.Description>
      ) : null}
    </S.Container>
  )
}

export default TabsComentsOrDoubts
