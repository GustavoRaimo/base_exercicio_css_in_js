import { FormEvent, useState } from 'react'
import { StyledForm, Campo, BotaoPesquisar } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <StyledForm as={'form'} onSubmit={aoEnviarForm}>
      <Campo
        as={'input'}
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BotaoPesquisar as={'button'} type="submit">
        Pesquisar
      </BotaoPesquisar>
    </StyledForm>
  )
}

export default FormVagas
