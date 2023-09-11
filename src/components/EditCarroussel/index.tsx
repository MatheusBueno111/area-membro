// EditCarroussel.tsx

import React, { useState } from 'react';
import * as S from './styles';
import { Button } from '../CustomButtom';
import ButtonControl from '../CustomButtom/ButtomControl';
import { ViewIcon } from '../Icons/ViewIcon';
import { SandwichIcon } from '../Icons/SandwichIcon';
import Header from '../Header';

// Importe os modais aqui
import ModalCreateClass from '../ModalCreateClass';
import ModalEditClass from '../ModalEditClass';
import ModalCriarCurso from '../ModalCriarCurso';

const EditCarroussel: React.FC = () => {
  const [isCreateClassModalOpen, setIsCreateClassModalOpen] = useState(false);
  const [isEditClassModalOpen, setIsEditClassModalOpen] = useState(false);
  const [isModalCriarCurso, setIsModalCriarCurso] = useState(false);
 
  const openModalCriarCurso = () => {
    setIsModalCriarCurso(true);
  };

  const openCreateClassModal = () => {
    setIsCreateClassModalOpen(true);
  };

  const closeCreateClassModal = () => {
    setIsCreateClassModalOpen(false);
  };

  const openEditClassModal = () => {
    // Altere o estado apenas para o modal de edição
    setIsEditClassModalOpen(true);
  };

  const closeEditClassModal = () => {
    // Feche apenas o modal de edição
    setIsEditClassModalOpen(false);
  };

  return (
    <S.Container>
      <Header />
      <div className="container">
        <div className="title">Curso de social media expert</div>
        <div className="buttons">
          <Button.Root bgcolor="#FFC019" className="top-button" onClick={openModalCriarCurso}>
            <ButtonControl className="text-button" type="submit">
              Editar Curso
            </ButtonControl>
          </Button.Root>

          <Button.Root
            bgcolor="#FFC019"
            className="top-button"
             
          >
            <ButtonControl className="text-button" type="submit">
              Ver curso
            </ButtonControl>
            <div className="view-icon">
              <ViewIcon />
            </div>
          </Button.Root>
        </div>
      </div>
      <div className="classes">
        <div className="container">
          <div className="title-2">
            Aulas
            <div className="sub-title">Adicione aulas dentro do seu módulo</div>
          </div>
          <Button.Root bgcolor="#FFC019" className="y-button" onClick={openCreateClassModal}>
            <ButtonControl className="text-2-button" type="submit">
                Adicionar Aula
            </ButtonControl>
          </Button.Root>
        </div>
        <div className="_linecontainer">
          <SandwichIcon />
          <p className="text">Nome da Aula</p>
          <div className="align-right">
            <button
              className="edit-button"
              onClick={openEditClassModal} // Abra o modal de edição ao clicar em "Editar"
            >
              Editar
            </button>
          </div>
        </div>
        <div className="_linecontainer">
          <SandwichIcon />
          <p className="text">Nome da Aula</p>
          <div className="align-right">
            <button
              className="edit-button"
              onClick={openEditClassModal} // Abra o modal de edição ao clicar em "Editar"
            >
              Editar
            </button>
          </div>
        </div>
      </div>

       <div className="modal">
      {isCreateClassModalOpen && <ModalCreateClass  />}
      {isEditClassModalOpen && <ModalEditClass  />}
      {isModalCriarCurso && <ModalCriarCurso  />}
       </div> 
    </S.Container>
  );
};

export default EditCarroussel;
