import React, { ComponentProps, useState } from 'react'
import * as S from './styles'
import { SandwichIcon } from '../Icons/SandwichIcon'
import { SearchIcon } from '../Icons/SearchIcon'
import { Input } from '../CustomInput'
import { UserIcon } from '../Icons/UserIcon'
import UserModal from '../UserModal'
import CarrousselModal from '../CarrousselModal'
import { CarrousselIcon } from '../Icons/CarrousselIcon'
import { GalleryIcon } from '../Icons/GalleryIcon'



interface HeaderProps extends ComponentProps<'header'> {
  showsearchbar?: boolean
}

enum ModalType {
  None,
  User,
  Carroussel,
}

const Header: React.FC<HeaderProps> = ({ showsearchbar = true, ...rest }) => {
  const [activeModal, setActiveModal] = useState(ModalType.None)

  const toggleModal = (modalType: ModalType) => {
    setActiveModal((prevModal) =>
      prevModal === modalType ? ModalType.None : modalType,
    )
  }

  const isUserModalOpen = activeModal === ModalType.User
  const isCarrousselModalOpen = activeModal === ModalType.Carroussel

  return (
    <S.Container {...rest}>
      <div
        className="sandwich-icon"
        onClick={() => toggleModal(ModalType.User)}
      >
        <SandwichIcon />
      </div>
      <S.SearchBar showsearchbar={showsearchbar}>
        <Input.Root className="search-bar">
          <Input.Prefix>
            <SearchIcon />
          </Input.Prefix>
          <Input.Control placeholder="Pesquisar" />
        </Input.Root>
      </S.SearchBar>

      <img src="./logo.png" alt="" />
      <S.Wrapper>
        <div className="gallery-icon">
          <GalleryIcon />
        </div>
        <div
          className="carroussel-icon"
          onClick={() => toggleModal(ModalType.Carroussel)}
        >
          <CarrousselIcon />
        </div>
        <div className="search-icon">
          <SearchIcon />
        </div>
        <div className="user-icon" onClick={() => toggleModal(ModalType.User)}>
          <UserIcon />
        </div>
      </S.Wrapper>
      {isUserModalOpen && <UserModal />}
      {isCarrousselModalOpen && <CarrousselModal />}
    </S.Container>
  )
}

export default Header
