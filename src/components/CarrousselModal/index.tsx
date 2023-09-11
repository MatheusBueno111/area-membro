// CarrousselModal.tsx
import React, { useState } from 'react';
import * as S from './styles';
import { PlusCircleIcon } from '../Icons/PlusCircleIcon';
import { SandwichIcon } from '../Icons/SandwichIcon';
import EditModal from '../EditModal'; // Importe o componente EditModal
import NewCarrousselModal from '../NewCarrousselModal';

const CarrousselModal: React.FC = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isNewCarrousselModalOpen, setIsNewCarrousselModalOpen] = useState(false);

  const openNewCarrousselModal = () => {
    setIsNewCarrousselModalOpen(true);
  };


  // Função para abrir o modal de edição
  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  return (
    <S.Container>
      <div className="icon-container">
        <PlusCircleIcon />
        <p onClick={openNewCarrousselModal}>Novo carrossel</p>
      </div>

      <div className="icon-container">
        <SandwichIcon />
        <p onClick={handleOpenEditModal}>Editar</p> {/* Chame a função ao clicar no botão */}
      </div>

      {isNewCarrousselModalOpen && (
        <S.ModalContainer>
          <NewCarrousselModal/>
        </S.ModalContainer> 
        )}

      {isEditModalOpen && (
        <S.ModalContainer>
          <EditModal/>
        </S.ModalContainer>
      )}
    </S.Container>
  );
};

export default CarrousselModal;
