import React from 'react'
import * as S from './styles'
import { Input } from '../CustomInput'
import { ExitIcon } from '../Icons/ExitIcon'
import SwitchButton from '../SwitchButton'
import { Button } from '../CustomButtom'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { v4 as uuidv4 } from 'uuid'

const criarCursoFormSchema = z.object({
  title: z.string(),
  description: z.string(),
})

type CriarCursoFormData = z.infer<typeof criarCursoFormSchema>

interface Curso {
  id: string
  title: string
  description: string
}

interface ModalCriarCursoProps {
  setCursos: React.Dispatch<React.SetStateAction<Curso[]>>
  onClose: () => void
}

const ModalCriarCurso: React.FC<ModalCriarCursoProps> = ({
  setCursos,
  onClose,
}) => {
  const { register, reset, handleSubmit } = useForm<CriarCursoFormData>({
    resolver: zodResolver(criarCursoFormSchema),
  })

  const handleNewCurso = async ({ title, description }: CriarCursoFormData) => {
    const newCurso = {
      id: uuidv4(),
      title,
      description,
    }
    setCursos((preState) => [...preState, newCurso])
    onClose()
    reset()
  }
  return (
    <S.Container>
      <S.Wrapper>
        <div className="container">
          <div className="title">Criar novo curso</div>
          <div className="exit-icon" onClick={onClose}>
            <ExitIcon />
          </div>
        </div>
      </S.Wrapper>
      <S.SquareWrapper>
        <button>Clica para adicionar</button>
        <div className="text">Dimensão da Imagem:</div>
        <div className="text">1440x750</div>
      </S.SquareWrapper>
      <form onSubmit={handleSubmit(handleNewCurso)} id="form-new-curso">
        <S.Wrapper>
          <label htmlFor="">Nome</label>
          <Input.Root className="input-container">
            <Input.Control
              type="text"
              placeholder="Titulo do curso"
              className="input-titulo"
              {...register('title')}
            />
          </Input.Root>
        </S.Wrapper>
        <S.Wrapper>
          <label htmlFor="">Descrição</label>
          <Input.Root className="input-container-descricao" height="140px">
            <Input.Control
              type="text"
              placeholder="Descrição do curso"
              className="input-descricao"
              {...register('description')}
            />
          </Input.Root>
        </S.Wrapper>
        <S.Wrapper>
          <div className="container">
            <div className="title">Bloquear módulo</div>
            <div className="switch-button">
              <SwitchButton />
            </div>
          </div>
          <span>Ao bloquear um módulo, os alunos não terão acesso</span>
        </S.Wrapper>
      </form>
      <Button.Root bgcolor="#FFC019" className="save-button" maxwidth="11.9rem">
        <Button.Control type="submit" form="form-new-curso">
          Salvar
        </Button.Control>
      </Button.Root>
    </S.Container>
  )
}

export default ModalCriarCurso
