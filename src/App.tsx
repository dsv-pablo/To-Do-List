import { useState } from 'react'
import { ListItem } from './components/ListItem'
import { AddArea } from './components/AddArea'
/** Importando componentes de estilização */
import * as C from './App.styles'

/** Importando tipagens dos itens da lista de tarefas */
import { Item } from './Item'


/* Componente principal -> Tela */
const App = () => {
  /** State para a lista de tarefas */
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Ler por 30 min', done: false },
    { id: 2, name: 'Treinamento de postura', done: true }
  ])

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list]
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done
      }
    }
    setList(newList)
  }

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }

  return (
    <C.Container>
      <C.appArea>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />

        {/* Listando itens da lista de tarefas */}
        {list.map((item, index) => (
          <ListItem key={index} item={item} onChange={handleTaskChange} />
        ))}
      </C.appArea>
    </C.Container>
  )
}

export default App