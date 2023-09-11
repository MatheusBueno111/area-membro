import React, { ReactNode } from 'react'

import { Input } from '../../../components/CustomInput'
import { Button } from '../../../components/CustomButtom'
import { Modal } from '../../../components/Modal'

interface ModalContentProps {
  modalStep: number
  onClose: () => void
  onRecoverPassword: () => void
}

interface ModalData {
  [key: number]: {
    title: string
    content: ReactNode
  }
}

const ModalContent: React.FC<ModalContentProps> = ({
  modalStep,
  onClose,
  onRecoverPassword,
}) => {
  const modalData: ModalData = {
    1: {
      title: 'Digite seu e-mail para receber o código de recuperação',
      content: (
        <>
          <Input.Root>
            <Input.Control placeholder="email@exemplo.com" />
          </Input.Root>
          <Button.Root maxwidth="37.4rem" bgcolor="#FFC019">
            <Button.Control onClick={onRecoverPassword}>Enviar</Button.Control>
          </Button.Root>
        </>
      ),
    },
    2: {
      title: 'Digite o código de recuperação',
      content: (
        <>
          <Input.Root>
            <Input.Control placeholder="12345" />
          </Input.Root>
          <Button.Root maxwidth="37.4rem" bgcolor="#FFC019">
            <Button.Control onClick={onRecoverPassword}>Enviar</Button.Control>
          </Button.Root>
        </>
      ),
    },
    3: {
      title: 'Digite sua nova senha',
      content: (
        <>
          <Input.Root>
            <Input.Control type="password" placeholder="Nova senha" />
          </Input.Root>
          <Input.Root>
            <Input.Control type="password" placeholder="Confirmar nova senha" />
          </Input.Root>
          <Button.Root maxwidth="37.4rem" bgcolor="#FFC019">
            <Button.Control onClick={onRecoverPassword}>Enviar</Button.Control>
          </Button.Root>
        </>
      ),
    },
  }

  return (
    <Modal.Root onCloseOverlay={onClose}>
      <Modal.Title>{modalData[modalStep].title}</Modal.Title>
      {modalData[modalStep].content}
    </Modal.Root>
  )
}

export default ModalContent
