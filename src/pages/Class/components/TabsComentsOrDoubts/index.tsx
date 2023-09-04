import React, { useState } from 'react'

import * as S from './styles'
import { Input } from '../../../../components/CustomInput'
import { Button } from '../../../../components/CustomButtom'
import { PaperClipIcon } from '../../../../components/Icons/PaperClip.Icon'

const TabsComentsOrDoubts: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'comment' | 'doubt'>('comment')

  const handleTabClick = (tab: 'comment' | 'doubt') => {
    setSelectedTab(tab)
  }

  return (
    <S.Container>
      <S.ComentsAndDoubtsButtons>
        <S.TabButton
          onClick={() => handleTabClick('comment')}
          selected={selectedTab === 'comment'} // Aplica estilo se selecionado
        >
          Comentários
        </S.TabButton>
        <S.TabButton
          onClick={() => handleTabClick('doubt')}
          selected={selectedTab === 'doubt'} // Aplica estilo se selecionado
        >
          Dúvidas
        </S.TabButton>
      </S.ComentsAndDoubtsButtons>

      {selectedTab === 'comment' ? (
        <S.NewComment>
          <Input.Root width="59.4rem">
            <Input.Control placeholder="Deixar um comentário" type="text" />
          </Input.Root>

          <Button.Root maxwidth="20.1rem" bgcolor="#FFC019">
            <Button.Control>Enviar</Button.Control>
          </Button.Root>
        </S.NewComment>
      ) : (
        <S.NewDoubt>
          <Input.Root>
            <Input.Control placeholder="Deixar um comentário" type="text" />
          </Input.Root>

          <Button.Root maxwidth="11rem" bgcolor="#FFFFFF">
            <Button.Control>Enviar</Button.Control>
            <Button.Icon icon={PaperClipIcon} />
          </Button.Root>

          <Button.Root maxwidth="11rem" bgcolor="#FFC019">
            <Button.Control>Enviar</Button.Control>
          </Button.Root>
        </S.NewDoubt>
      )}
    </S.Container>
  )
}

export default TabsComentsOrDoubts
