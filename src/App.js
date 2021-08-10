import Item from './components/Item';

const App = () => {
  return(
    <>
    <h1>Minha primeira aplicação com React!</h1>
    <ul>
      <Item texto='Item 1'/>
      <Item texto='Item2' />
      <Item>Item 3</Item>
    </ul>
    </>
  )
}

export default App;