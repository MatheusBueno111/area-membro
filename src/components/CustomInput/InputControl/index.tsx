import React, { ComponentProps } from 'react'

import * as S from './styles'

interface InputProps extends ComponentProps<'input'> {}

const InputControl: React.FC<InputProps> = ({ ...rest }) => {
  return <S.Container {...rest} />
}

export default InputControl
