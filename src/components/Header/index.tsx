import React, { ComponentProps, useState } from 'react'
import * as S from './styles'
import { SandwichIcon } from '../Icons/SandwichIcon'
import { SearchIcon } from '../Icons/SearchIcon'
import { Input } from '../CustomInput'
import { UserIcon } from '../Icons/UserIcon'
import UserModal from '../UserModal'

interface HeaderProps extends ComponentProps<'header'> {
  showsearchbar?: boolean
}

const Header: React.FC<HeaderProps> = ({ showsearchbar = true, ...rest }) => {
  const [isUserModalOpen, setUserModalOpen] = useState(false)

  const handleUserIconClick = () => {
    setUserModalOpen((value) => !value)
  }

  return (
    <S.Container {...rest}>
      <div className="sandwich-icon" onClick={handleUserIconClick}>
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
