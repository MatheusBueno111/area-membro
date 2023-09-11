// CarrousselModal.tsx
import React, { useState } from 'react'
import * as S from './styles'
import { PlusCircleIcon } from '../Icons/PlusCircleIcon'
import { SandwichIcon } from '../Icons/SandwichIcon'
import EditModal from '../EditModal' // Importe o componente EditModal
import NewCarrousselModal from '../NewCarrousselModal'

const CarrousselModal: React.FC = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isNewCarrousselModalOpen, setIsNewCarrousselModalOpen] =
    useState(false)

  const openNewCarrousselModal = () => {
    setIsNewCarrousselModalOpen((value) => !value)
  }

  const closeNewCarrousselModal = () => {
    setIsNewCarrousselModalOpen(false)
  }

  const handleOpenEditModal = () => {
    setIsEditModalOpen((value) => !value)
  }

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false)
  }

  return (
    <S.Container>
      <div className="icon-container" onClick={openNewCarrousselModal}>
        <PlusCircleIcon />
        <p>Novo carrossel</p>
      </div>

      <div className="icon-container" onClick={handleOpenEditModal}>
        <SandwichIcon />
        <p>Editar</p>
      </div>

      {isNewCarrousselModalOpen && (
        <S.ModalContainer>
          <NewCarrousselModal onClose={closeNewCarrousselModal} />
        </S.ModalContainer>
      )}

      {isEditModalOpen && (
        <S.ModalContainer>
          <EditModal onClose={handleCloseEditModal} />
        </S.ModalContainer>
      )}
    </S.Container>
  )
}

export default CarrousselModal
