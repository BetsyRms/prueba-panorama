import './Cards.css'
import ModalCard from './ModalCard'
import Spinner from 'react-bootstrap/Spinner';

const Cards = ({state}) => {
  const { todos, filtered, searchText } = state;

  if (!todos.length) // Entra si NO hay todos
    return (<div className='conteiner-main'>
    <div className='spinner'>
    <Spinner animation="border" variant="primary" /></div>
    </div>)

  if (!filtered.length && !searchText) // entra si NO hay filtered
    return (<div className='conteiner-main'>
    {todos.map(todo => <ModalCard key={todo.id} todo={todo} />)}
    </div>);  
  
  if (!filtered.length && searchText) 
    return 'No results found...'


  return (
    <div className='conteiner-main'>
      {filtered.map(todo => <ModalCard key={todo.id} todo={todo} />)}
    </div>
  )
}

export default Cards
