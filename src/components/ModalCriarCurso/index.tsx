import React from 'react'
import * as S from './styles'
import { Input } from '../CustomInput'
import { ExitIcon } from '../Icons/ExitIcon'
import SwitchButton from '../SwitchButton'

const ModalCriarCurso: React.FC = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <div className="container">
          <div className="title">Criar novo curso</div>
          <div className="exit-icon">
            <ExitIcon />
          </div>
        </div>
      </S.Wrapper>
      <S.SquareWrapper>
        <button>Clica para adicionar</button>
        <div className="text">Dimensão da Imagem:</div>
        <div className="text">1440x750</div>
      </S.SquareWrapper>
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
        <div className="container">
          <div className="title">Bloquear módulo</div>
          <div className="switch-button">
            <SwitchButton />
          </div>
        </div>
        <span>Ao bloquear um módulo, os alunos não terão acesso</span>
      </S.Wrapper>
    </S.Container>
  )
}

export default ModalCriarCurso
