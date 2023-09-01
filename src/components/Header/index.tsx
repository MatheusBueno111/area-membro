import React, { useState } from 'react'
import * as S from './styles'
import { SandwichIcon } from '../Icons/SandwichIcon'
import { SearchIcon } from '../Icons/SearchIcon'
import { Input } from '../CustomInput'
import { UserIcon } from '../Icons/UserIcon'
import UserModal from '../UserModal'

const Header: React.FC = () => {
  const [isUserModalOpen, setUserModalOpen] = useState(false) // Estado para controlar a visibilidade do modal

  const handleUserIconClick = () => {
    setUserModalOpen((value) => !value) // Abre o modal quando o ícone do usuário é clicado
  }

  return (
    <S.Container>
      <div className="sandwich-icon" onClick={handleUserIconClick}>
        <SandwichIcon />
      </div>
      <Input.Root className="search-bar">
        <Input.Prefix>
          <SearchIcon />
        </Input.Prefix>
        <Input.Control placeholder="Pesquisar" />
      </Input.Root>
      <img src="./logo.png" alt="" />
      <S.Wrapper>
        <div className="search-icon">
          <SearchIcon />
        </div>
        <div className="user-icon" onClick={handleUserIconClick}>
          <UserIcon />
        </div>
      </S.Wrapper>
      {isUserModalOpen && <UserModal />}
    </S.Container>
  )
}

export default Header
