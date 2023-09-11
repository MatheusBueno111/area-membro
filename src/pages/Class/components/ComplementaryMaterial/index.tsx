import React from 'react'

import * as S from './styles'

const ComplementaryMaterial: React.FC = () => {
  return (
    <S.Container>
      <div className="class-img" />
      <div className="complementary-material-description">
        <p> Material complementar</p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </span>
      </div>
    </S.Container>
  )
}

export default ComplementaryMaterial
