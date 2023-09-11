import React from 'react'
import * as S from './styles'
import { ExitIcon } from '../Icons/ExitIcon'
import { Input } from '../CustomInput'
import { Button } from '../CustomButtom'
import ButtonControl from '../CustomButtom/ButtomControl'

const ModalBannerEdit: React.FC = () => {

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
                <button className="sub-button">Clica para adicionar</button>
                <div className="text">Dimensão da Imagem:</div>
                <div className="text">1440x750</div>
            </S.SquareWrapper>
            <S.Wrapper>
                <label htmlFor="">Título</label>
                <Input.Root className="input-container">
                    <Input.Control
                        type="email"
                        placeholder="Adicione um título para sua vitrine"
                        className="input-titulo"
                    />
                </Input.Root>
            </S.Wrapper>
            <S.Wrapper>
                <label htmlFor="">Descrição</label>
                <Input.Root className="input-container-descricao" height="140px" >
                    <Input.Control
                        type="text"
                        placeholder="Nome descritivo"
                        className="input-descricao"
                    />
                </Input.Root>
            </S.Wrapper>
            <S.Wrapper>
                <div className="container">
                    <Button.Root className="cancel-button">
                        <ButtonControl className="c-cancel-button" type="submit">Cancelar</ButtonControl>
                    </Button.Root>

                    <Button.Root bgcolor="#FFC019" className="save-button">
                        <ButtonControl type="submit">Salvar</ButtonControl>
                    </Button.Root>
                </div>
            </S.Wrapper>
        </S.Container>
    )
}

export default ModalBannerEdit