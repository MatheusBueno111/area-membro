import React, { ComponentProps, useState } from 'react'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'
import { Button } from '../CustomButtom'
import ButtonControl from '../CustomButtom/ButtomControl'
import { PencilIcon } from '../Icons/PencilIcon'
import ModalCreateClass from '../ModalCreateClass'

interface CarouselProps extends ComponentProps<'div'> {}

const Carousel: React.FC<CarouselProps> = ({ ...rest }) => {
  const [modalCreateClassOpen, setModalCreateClassOpen] = useState(false)
  const navigate = useNavigate()

  const handleWatchClass = () => {
    navigate('/class')
  }

  const handleEdit = () => {
    navigate('/edit-carroussel')
  }

  const handleOpenModal = () => {
    setModalCreateClassOpen(true)
  }

  return (
    <S.Container {...rest}>
      <div className="button">
        <Button.Root bgcolor="#323C4C" className="input-button">
          <ButtonControl style={{ color: 'white' }} onClick={handleOpenModal}>
            Criar curso
          </ButtonControl>
        </Button.Root>
      </div>
      <p>Cursos e módulos</p>
      <S.ScrollContainer>
        <S.Wrapper>
          <S.IconContainer>
            <div className="pencil-icon" onClick={handleEdit}>
              <PencilIcon />
            </div>
            <S.Image onClick={handleWatchClass} />
          </S.IconContainer>
        </S.Wrapper>
      </S.ScrollContainer>

      <div className="button">
        <Button.Root bgcolor="#323C4C" className="input-button">
          <ButtonControl style={{ color: 'white' }} type="submit">
            Criar curso
          </ButtonControl>
        </Button.Root>
      </div>
      <p>Cursos e módulos</p>
      <S.ScrollContainer>
        <S.Wrapper>
          <S.IconContainer>
            <div className="pencil-icon">
              <PencilIcon />
            </div>
            <S.Image />
          </S.IconContainer>
          <S.IconContainer>
            <div className="pencil-icon">
              <PencilIcon />
            </div>
            <S.Image />
          </S.IconContainer>
          <S.IconContainer>
            <div className="pencil-icon">
              <PencilIcon />
            </div>
            <S.Image />
          </S.IconContainer>
          <S.IconContainer>
            <div className="pencil-icon">
              <PencilIcon />
            </div>
            <S.Image />
          </S.IconContainer>
          <S.IconContainer>
            <div className="pencil-icon">
              <PencilIcon />
            </div>
            <S.Image />
          </S.IconContainer>
          <S.IconContainer>
            <div className="pencil-icon">
              <PencilIcon />
            </div>
            <S.Image />
          </S.IconContainer>
          <S.IconContainer>
            <div className="pencil-icon">
              <PencilIcon />
            </div>
            <S.Image />
          </S.IconContainer>
          <S.IconContainer>
            <div className="pencil-icon">
              <PencilIcon />
            </div>
            <S.Image />
          </S.IconContainer>
          <S.IconContainer>
            <div className="pencil-icon">
              <PencilIcon />
            </div>
            <S.Image />
          </S.IconContainer>
          <S.IconContainer>
            <div className="pencil-icon">
              <PencilIcon />
            </div>
            <S.Image />
          </S.IconContainer>
          <S.IconContainer>
            <div className="pencil-icon">
              <PencilIcon />
            </div>
            <S.Image />
          </S.IconContainer>
          <S.IconContainer>
            <div className="pencil-icon">
              <PencilIcon />
            </div>
            <S.Image />
          </S.IconContainer>
        </S.Wrapper>
      </S.ScrollContainer>

      {modalCreateClassOpen && <ModalCreateClass />}
    </S.Container>
  )
}

export default Carousel
