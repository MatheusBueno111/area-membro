import React from 'react'
import * as S from './styles'
import { Input } from '../../components/CustomInput'
import { Button } from '../../components/CustomButtom'
import ButtonControl from '../../components/CustomButtom/ButtomControl'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate('/')
  }

  return (
    <S.Container>
      <div className="container-login-form">
        <S.Logo src="./logo.png" alt="Logo" />

        <S.Form onSubmit={handleSubmit}>
          <S.Wrapper>
            <label htmlFor="">Email</label>
            <Input.Root className="input-container">
              <Input.Control
                type="email"
                placeholder="email@exemplo.com"
                className="input-login"
              />
            </Input.Root>
          </S.Wrapper>
          <S.Wrapper>
            <label htmlFor="">Senha</label>
            <Input.Root>
              <Input.Control type="password" placeholder="Insira sua senha" />
            </Input.Root>
          </S.Wrapper>

          <Button.Root bgcolor="#EDEDED" className="login-button">
            <ButtonControl type="submit">Acessar agora</ButtonControl>
          </Button.Root>
          <a href="/">Esqueceu a senha?</a>
        </S.Form>
      </div>

      <S.Image src="./marketing.png" alt="" />
    </S.Container>
  )
}

export default Login
