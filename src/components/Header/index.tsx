import React, { ComponentProps, useState } from 'react'
import * as S from './styles'
import { SandwichIcon } from '../Icons/SandwichIcon'
import { SearchIcon } from '../Icons/SearchIcon'

import { UserIcon } from '../Icons/UserIcon'
import UserModal from '../UserModal'
import CarrousselModal from '../CarrousselModal'
import { CarrousselIcon } from '../Icons/CarrousselIcon'
import { GalleryIcon } from '../Icons/GalleryIcon'
import { PencilIcon } from '../Icons/PencilIcon'
import ModalBannerEdit from '../ModalBannerEdit'

interface HeaderProps extends ComponentProps<'header'> {}

enum ModalType {
  None,
  User,
  Carroussel,
  Banner,
}

const Header: React.FC<HeaderProps> = ({ ...rest }) => {
  const [activeModal, setActiveModal] = useState(ModalType.None)

  const toggleModal = (modalType: ModalType) => {
    setActiveModal((prevModal) =>
      prevModal === modalType ? ModalType.None : modalType,
    )
  }

  const isUserModalOpen = activeModal === ModalType.User
  const isCarrousselModalOpen = activeModal === ModalType.Carroussel
  const isBannerModalOpen = activeModal === ModalType.Banner

  return (
    <S.Container {...rest}>
      <div
        className="sandwich-icon"
        onClick={() => toggleModal(ModalType.User)}
      >
        <SandwichIcon />
      </div>

      <img src="./logo.png" alt="" />
      <S.Wrapper>
        <div
          className="carroussel-icon"
          onClick={() => toggleModal(ModalType.Banner)}
        >
          <PencilIcon />
        </div>
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
      {isBannerModalOpen && <ModalBannerEdit />}
    </S.Container>
  )
}

export default Header
