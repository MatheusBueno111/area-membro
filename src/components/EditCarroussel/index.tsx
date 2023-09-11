import { SandwichIcon } from '../Icons/SandwichIcon'
import * as S from './styles'
import { Button } from '../CustomButtom'
import ButtonControl from '../CustomButtom/ButtomControl'
import Header from '../Header'
import { ViewIcon } from '../Icons/ViewIcon'

const EditCarroussel: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <div className="container">
        <div className="title">Curso de social media expert</div>
        <div className="buttons">
          <Button.Root bgcolor="#FFC019" className="top-button">
            <ButtonControl className="text-button" type="submit">
              Editar Curso
            </ButtonControl>
          </Button.Root>

          <Button.Root bgcolor="#FFC019" className="top-button">
            <ButtonControl className="text-button" type="submit">
              Ver curso
            </ButtonControl>
            <div className="view-icon">
              <ViewIcon />
            </div>
          </Button.Root>
        </div>
      </div>
      <div className="classes">
        <div className="container">
          <div className="title-2">
            Aulas
            <div className="sub-title">Adicione aulas dentro do seu módulo</div>
          </div>
          <Button.Root bgcolor="#FFC019" className="y-button">
            <ButtonControl className="text-2-button" type="submit">
              Adicionar Aula
            </ButtonControl>
          </Button.Root>
        </div>
        <div className="_linecontainer">
          <SandwichIcon />
          <p className="text">Nome da Aula</p>
          <div className="align-right">
            <button className="edit-button">Editar</button>
          </div>
        </div>
        <div className="_linecontainer">
          <SandwichIcon />
          <p className="text">Nome da Aula</p>
          <div className="align-right">
            <button className="edit-button">Editar</button>
          </div>
        </div>
      </div>
    </S.Container>
  )
}

export default EditCarroussel
