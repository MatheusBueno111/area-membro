import React from 'react'
import { ChangeEvent, useState } from "react";
import * as S from './styles'


const SwitchButton: React.FC = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)
  return (
    <S.Label>
      <span>{checked ? "on" : "off"}</span>
      <S.Input checked={checked} type="checkbox" onChange={handleChange} />
      <S.Switch />
    </S.Label>
  )
}

export default SwitchButton
