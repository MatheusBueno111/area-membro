import React, { useState } from 'react'

import * as S from './styles'
import Header from '../../components/Header'
import { Input } from '../../components/CustomInput'

const Profile: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string>('')

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        setImageSrc(e.target?.result as string)
      }

      reader.readAsDataURL(file)
    }
  }
  return (
    <S.Container>
      <Header />
      <S.ProfileData>
        <h3>Dados básicos</h3>
        <S.ImageContainer>
          <S.ImageWrapper image={imageSrc}>
            {imageSrc ? (
              <img src={imageSrc} alt="user" />
            ) : (
              <S.NoImage className="preview" />
            )}

            <span>Clique para adicionar</span>
            <S.InputFile
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </S.ImageWrapper>
          <span className="delete-image" onClick={() => setImageSrc('')}>
            excluir imagem
          </span>
        </S.ImageContainer>

        <S.Form>
          <S.WrapperInputLabel>
            <label htmlFor="">Nome Completo</label>
            <Input.Root>
              <Input.Control type="text" placeholder="Seu nome" />
            </Input.Root>
          </S.WrapperInputLabel>

          <S.Privace>
            <div>
              <h3>Privacidade</h3>
              <p>Mudar senha</p>
            </div>
            <S.WrapperInputLabel>
              <label htmlFor="">Senha atual</label>
              <Input.Root>
                <Input.Control type="text" placeholder="Senha atual" />
              </Input.Root>
            </S.WrapperInputLabel>

            <S.WrapperInputLabel>
              <label htmlFor="">Nova senha</label>
              <Input.Root>
                <Input.Control type="text" placeholder="Nova senha" />
              </Input.Root>
            </S.WrapperInputLabel>
          </S.Privace>
        </S.Form>
      </S.ProfileData>
    </S.Container>
  )
}

export default Profile
