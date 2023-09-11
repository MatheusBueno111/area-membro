import { SandwichIcon } from '../Icons/SandwichIcon'
import React from 'react'
import * as S from './styles'
import { Button } from '../CustomButtom'
import ButtonControl from '../CustomButtom/ButtomControl'
import { ExitIcon } from '../Icons/ExitIcon'

interface EditModalProps {
  onClose: () => void
}

const EditModal: React.FC<EditModalProps> = ({ onClose }) => {
  return (
    <S.Container>
      <div className="container">
        <div className="title">Ordenar carrocéis</div>
        <div className="exit-icon" onClick={onClose}>
          <ExitIcon />
        </div>
      </div>
      <div className="container">
        <SandwichIcon />
        <p className="text">Carroussel1</p>
        <div className="align-right">
          <button className="edit-button">Editar</button>
          <button className="exclude-button">Excluir</button>
        </div>
      </div>
      <div className="container">
        <SandwichIcon />
        <p className="text">Carroussel2</p>
        <div className="align-right">
          <button className="edit-button">Editar</button>
          <button className="exclude-button">Excluir</button>
        </div>
      </div>
      <Button.Root bgcolor="#FFC019" className="login-button">
        <ButtonControl type="submit">Salvar</ButtonControl>
      </Button.Root>
    </S.Container>
  )
}

export default EditModal
