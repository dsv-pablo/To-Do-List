import { useState, KeyboardEvent } from 'react'
import * as C from './styles'

type Props = {
  onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {
  const [inputText, setinputText] = useState('')

  /* Monitoramento das teclas digitadas */
  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && inputText !== '') {
      onEnter(inputText)
      setinputText('')
    }
  }

  return (
    <C.Container>
      <div className="plusImage">➕</div>
      <input
        type="text"
        placeholder='Adcione uma tarefa'
        value={inputText}
        onChange={e => setinputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  )
}