import React, { useState } from 'react'
import * as S from './styles'
import { Input } from '../CustomInput'
import { Button } from '../CustomButtom'
import ButtonControl from '../CustomButtom/ButtomControl'

const ModalEditClass: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null)

  const handleButtonClick = (index: number) => {
    setSelectedButton(index)
  }

  return (
    <S.Container>
      <S.Wrapper>
        <div className="container">
          <div className="title">Criar aula</div>
        </div>
        <div className="button-group">
          <div className="button-with-label">
            <button
              className={`radial-button ${
                selectedButton === 0 ? 'selected' : ''
              }`}
              onClick={() => handleButtonClick(0)}
            >
              <div className="radial-inner">
                {selectedButton === 0 && <div className="fill"></div>}
              </div>
              <div className="border"></div>
            </button>
            <span className="button-label">Link</span>
          </div>
          <div className="button-with-label">
            <button
              className={`radial-button ${
                selectedButton === 1 ? 'selected' : ''
              }`}
              onClick={() => handleButtonClick(1)}
            >
              <div className="radial-inner">
                {selectedButton === 1 && <div className="fill"></div>}
              </div>
              <div className="border"></div>
            </button>
            <span className="button-label">Adicionar video</span>
          </div>
        </div>
        <Button.Root bgcolor="#FFC019" className="add-button">
          <ButtonControl className="add-button-text" type="submit">
            Adicionar
          </ButtonControl>
        </Button.Root>
      </S.Wrapper>

      <S.Wrapper>
        <label htmlFor="">Nome</label>
        <Input.Root className="input-container">
          <Input.Control
            type="email"
            placeholder="Titulo do curso"
            className="input-titulo"
          />
        </Input.Root>
      </S.Wrapper>
      <S.Wrapper>
        <label htmlFor="">Descrição</label>
        <Input.Root className="input-container-descricao" height="140px">
          <Input.Control
            type="text"
            placeholder="Descrição do curso"
            className="input-descricao"
          />
        </Input.Root>
      </S.Wrapper>
      <S.Wrapper>
        <label htmlFor="">Material Complementar</label>
        <Input.Root className="input-container">
          <Input.Control
            type="email"
            placeholder="Descrição da aula"
            className="input-titulo"
          />
        </Input.Root>
      </S.Wrapper>
      <div className="container">
        <Button.Root bgcolor="#FFC019" className="exclude-button">
          <ButtonControl className="exclude-button-text" type="submit">
            Excluir
          </ButtonControl>
        </Button.Root>
        <Button.Root className="cancel-button">
          <ButtonControl className="c-cancel-button" type="submit">
            Cancelar
          </ButtonControl>
        </Button.Root>

        <Button.Root bgcolor="#FFC019" className="save-button">
          <ButtonControl type="submit">Salvar</ButtonControl>
        </Button.Root>
      </div>
    </S.Container>
  )
}

export default ModalEditClass
