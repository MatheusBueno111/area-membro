import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { Input } from '../../components/CustomInput'
import { Button } from '../../components/CustomButtom'
import ButtonControl from '../../components/CustomButtom/ButtomControl'

import ModalContent from './RecoverPasswordModal'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

const loginFormSchema = z.object({
  email: z
    .string()
    .nonempty('O e-mail é obrigatório')
    .email('E-mail inválido. Tente novamente.'),
  password: z
    .string()
    .nonempty('A senha é obrigatória')
    .min(1, 'Senha incorreta. Tente novamente.'),
})

type LoginFormData = z.infer<typeof loginFormSchema>

const Login: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalStep, setModalStep] = useState(0)
  const navigate = useNavigate()

  const handleOpenModal = () => {
    setModalOpen((value) => !value)
    setModalStep(1)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const handleRecoverPassword = () => {
    if (modalStep === 3) {
      handleCloseModal()
    } else {
      setModalStep((step) => step + 1)
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  const handleLogin = async (data: LoginFormData) => {
    console.log('data', data)
    navigate('/')
  }

  useEffect(() => {
    console.log(errors)
  }, [errors])

  return (
    <S.Container>
      <div className="container-login-form">
        <S.Logo src="./logo.png" alt="Logo" />

        <S.Form onSubmit={handleSubmit(handleLogin)}>
          <S.Wrapper>
            <label htmlFor="email">Email</label>
            <Input.Root
              error={errors.email?.message}
              className="input-container"
            >
              <Input.Control
                type="email"
                placeholder="email@exemplo.com"
                {...register('email')}
              />
            </Input.Root>
            {errors.email && <span>{errors.email.message}</span>}
          </S.Wrapper>
          <S.Wrapper>
            <label htmlFor="password">Senha</label>
            <Input.Root
              error={errors.password?.message}
              className="input-container"
            >
              <Input.Control
                type="password"
                placeholder="Insira sua senha"
                {...register('password')}
              />
            </Input.Root>
            {errors.password && <span>{errors.password.message}</span>}
          </S.Wrapper>

          <Button.Root bgcolor="#EDEDED" className="login-button">
            <ButtonControl type="submit">Acessar agora</ButtonControl>
          </Button.Root>
        </S.Form>
        <button className="recover-password" onClick={handleOpenModal}>
          Esqueceu a senha?
        </button>
      </div>
      {modalOpen && (
        <ModalContent
          modalStep={modalStep}
          onClose={handleCloseModal}
          onRecoverPassword={handleRecoverPassword}
        />
      )}

      <S.Image src="./marketing.png" alt="" />
    </S.Container>
  )
}

export default Login
