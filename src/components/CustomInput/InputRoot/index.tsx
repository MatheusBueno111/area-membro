import React, { ComponentProps, ReactNode } from 'react'
import * as S from './styles'

interface InputRootProps extends ComponentProps<'div'> {
  children: ReactNode
  width?: string
  height?: string
  error?: string
}

const InputRoot: React.FC<InputRootProps> = ({
  children,
  width = '38rem',
  height = '4.8rem',
  error,
  ...rest
}) => {
  return (
    <S.Container error={error} width={width} height={height} {...rest}>
      {children}
    </S.Container>
  )
}

export default InputRoot
