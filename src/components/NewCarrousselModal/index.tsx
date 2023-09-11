import React, { useState } from 'react'
import * as S from './styles'
import { ExitIcon } from '../Icons/ExitIcon'
import { Input } from '../CustomInput'
import { Button } from '../CustomButtom'
import ButtonControl from '../CustomButtom/ButtomControl'

interface NewCarrousselModalProps {
  onClose: () => void
}

const NewCarrousselModal: React.FC<NewCarrousselModalProps> = ({ onClose }) => {
  const [carouselName, setCarouselName] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(true)

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleCarouselNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCarouselName(event.target.value)
  }

  return (
    <>
      {isModalOpen ? (
        <S.Container>
          <div className="container">
            <div className="title">Novo Carrossel</div>
            <div className="exit-icon" onClick={onClose}>
              <ExitIcon />
            </div>
          </div>
          <Input.Root className="input-container">
            <Input.Control
              type="text"
              placeholder="Nome do carrossel"
              className={`carroussel-input ${carouselName ? 'filled' : ''}`}
              value={carouselName}
              onChange={handleCarouselNameChange}
            />
          </Input.Root>
          <Button.Root
            className={`salvar-button ${carouselName ? 'yellow' : 'gray'}`}
          >
            <ButtonControl type="submit">Salvar</ButtonControl>
          </Button.Root>
        </S.Container>
      ) : null}
    </>
  )
}

export default NewCarrousselModal
