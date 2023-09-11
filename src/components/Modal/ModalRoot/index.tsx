import React, { ComponentProps, ReactNode } from 'react'

import * as S from './styles'

interface ModalRootProps extends ComponentProps<'div'> {
  children: ReactNode
  onCloseOverlay: () => void
}
const ModalRoot: React.FC<ModalRootProps> = ({
  onCloseOverlay,
  children,
  ...rest
}) => {
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onCloseOverlay()
    }
  }
  return (
    <S.Overlay onClick={handleOverlayClick}>
      <S.Container {...rest}>{children}</S.Container>
    </S.Overlay>
  )
}

export default ModalRoot
