import Item from "./componentes/Item"
import Card from "./componentes/Item/card"

const App = () => {
  return(
    <>
    <h1>Primeira aplicação com React</h1>
    <ul>
      <Item texto = 'Item 1'/>
      <Item texto = 'Item 2'/>
      <Item texto = 'Item 3'/>
    </ul>
    <Card/>
    </>
  )
}

export default App


/*export default function App(){
*  return(
*   <h1>Hello Word</h1>
*   )
* }
*/