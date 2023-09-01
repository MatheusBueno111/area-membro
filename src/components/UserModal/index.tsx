import React from 'react'

import * as S from './styles'
import { UserIcon } from '../Icons/UserIcon'
import { HouseIcon } from '../Icons/HouseIcon'
import { UserCircleIcon } from '../Icons/UserCircleIcon'
import { CertificationIcon } from '../Icons/CertificationIcon'
import { GearIcon } from '../Icons/GearIcon'
import { QuestionIcon } from '../Icons/QuestionIcon'
import { Link } from 'react-router-dom'

const links = [
  { linkName: 'Inicio', icon: <HouseIcon />, path: '/' },
  { linkName: 'Minha conta', icon: <UserCircleIcon />, path: '/' },
  {
    linkName: 'Central de notificações',
    icon: <CertificationIcon />,
    path: '/',
  },
  {
    linkName: 'Configurações',
    icon: <GearIcon />,
    path: '/',
  },
  {
    linkName: 'Suporte',
    icon: <QuestionIcon />,
    path: '/',
  },
]

const UserModal: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <div className="user-icon">
          <UserIcon />
        </div>
        <p>Nome do usuario grande para teste</p>
      </S.Header>

      <S.ProgressWrapper>
        <span>Seu progresso</span>
        <S.ProgressBar progress={'33%'} />
      </S.ProgressWrapper>
      <S.Nav>
        {links.map((link) => (
          <S.NavButton to={link.path} key={link.linkName}>
            <div className="link-icon">{link.icon}</div>
            <span>{link.linkName}</span>
          </S.NavButton>
        ))}
        <Link to="/" className="sign-out">
          Sair
        </Link>
      </S.Nav>
    </S.Container>
  )
}

export default UserModal
