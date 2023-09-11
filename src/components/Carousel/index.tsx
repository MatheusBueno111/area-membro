import React, { ComponentProps, useState } from 'react'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'
import { Button } from '../CustomButtom'
import ButtonControl from '../CustomButtom/ButtomControl'
import { PencilIcon } from '../Icons/PencilIcon'
import ModalCriarCurso from '../ModalCriarCurso'
import { UseCurso } from '../../hooks/useCurso'

interface CarouselProps extends ComponentProps<'div'> {}

const Carousel: React.FC<CarouselProps> = ({ ...rest }) => {
  const [modalCreateClassOpen, setModalCreateClassOpen] = useState(false)
  const { cursos, setCursos } = UseCurso()
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

  const handleCloseModal = () => {
    setModalCreateClassOpen(false)
  }

  return (
    <S.Container {...rest}>
      <div className="button">
        <Button.Root
          bgcolor="#323C4C"
          className="input-button"
          onClick={handleOpenModal}
        >
          <ButtonControl style={{ color: 'white' }}>Criar curso</ButtonControl>
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
          <S.IconContainer>
            <div className="pencil-icon" onClick={handleEdit}>
              <PencilIcon />
            </div>
            <S.Image onClick={handleWatchClass} />
          </S.IconContainer>
          <S.IconContainer>
            <div className="pencil-icon" onClick={handleEdit}>
              <PencilIcon />
            </div>
            <S.Image onClick={handleWatchClass} />
          </S.IconContainer>
          <S.IconContainer>
            <div className="pencil-icon" onClick={handleEdit}>
              <PencilIcon />
            </div>
            <S.Image onClick={handleWatchClass} />
          </S.IconContainer>
          <S.IconContainer>
            <div className="pencil-icon" onClick={handleEdit}>
              <PencilIcon />
            </div>
            <S.Image onClick={handleWatchClass} />
          </S.IconContainer>
          <S.IconContainer>
            <div className="pencil-icon" onClick={handleEdit}>
              <PencilIcon />
            </div>
            <S.Image onClick={handleWatchClass} />
          </S.IconContainer>
          {cursos.length > 0
            ? cursos.map((curso) => {
                return (
                  <S.IconContainer key={curso.id}>
                    <div className="pencil-icon" onClick={handleEdit}>
                      <PencilIcon />
                    </div>

                    <S.Image onClick={handleWatchClass} />
                  </S.IconContainer>
                )
              })
            : null}
        </S.Wrapper>
      </S.ScrollContainer>
      <div className="button">
        <Button.Root
          bgcolor="#323C4C"
          className="input-button"
          onClick={handleOpenModal}
        >
          <ButtonControl style={{ color: 'white' }}>Criar curso</ButtonControl>
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
          <S.IconContainer>
            <div className="pencil-icon" onClick={handleEdit}>
              <PencilIcon />
            </div>
            <S.Image onClick={handleWatchClass} />
          </S.IconContainer>
          <S.IconContainer>
            <div className="pencil-icon" onClick={handleEdit}>
              <PencilIcon />
            </div>
            <S.Image onClick={handleWatchClass} />
          </S.IconContainer>
          <S.IconContainer>
            <div className="pencil-icon" onClick={handleEdit}>
              <PencilIcon />
            </div>
            <S.Image onClick={handleWatchClass} />
          </S.IconContainer>
          <S.IconContainer>
            <div className="pencil-icon" onClick={handleEdit}>
              <PencilIcon />
            </div>
            <S.Image onClick={handleWatchClass} />
          </S.IconContainer>
          {cursos.length > 0
            ? cursos.map((curso) => {
                return (
                  <S.IconContainer key={curso.id}>
                    <div className="pencil-icon" onClick={handleEdit}>
                      <PencilIcon />
                    </div>

                    <S.Image onClick={handleWatchClass} />
                  </S.IconContainer>
                )
              })
            : null}
        </S.Wrapper>
      </S.ScrollContainer>

      {modalCreateClassOpen && (
        <ModalCriarCurso setCursos={setCursos} onClose={handleCloseModal} />
      )}
    </S.Container>
  )
}

export default Carousel
