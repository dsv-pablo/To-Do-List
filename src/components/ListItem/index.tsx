import * as C from './styles'
import { Item } from '../../Item'
import { useState } from 'react'

/* Definindo tipagem das props do componente */
type Props = {
  item: Item,
  onChange: (id: number, done: boolean) => void
}

export const ListItem = ({ item, onChange }: Props) => {
  /* State para controle da checkbox */
  const [isChecked, setIsChecked] = useState(item.done)

  return (
    <C.Container done={item.done}>
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={item.done}
        onChange={e => onChange(item.id, e.target.checked)}
      />
      {/* tarefas */}
      <label>{item.name}</label>
    </C.Container>
  )
}