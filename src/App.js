import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Search from "./components/Search";

const epmptyState = {
  todos: [], //100
  filtered: [], //10
  searchText: null
}

function App() {
  const [state, setState] = useState(epmptyState)

  const urlPanorama = 'https://gnk.onm.mybluehost.me/products_api/'

  const showData = async (url) => {
    fetch(url)
    .then(response => response.json())
    .then(todos => setState((state) => ({ ...state, todos })))
    .catch(error => console.error(error))
  }
  useEffect(() => {
    showData(urlPanorama)
  }, [])

  const setSearch = (filtered) => {
    setState((state) => ({ ...state, filtered}))
  }
  const text = (searchText) => {
    setState((state) => ({ ...state, searchText}))

  }
  return (
    <>
      <Search todos={state.todos} setSearch={setSearch} text={text}/>
      <Cards state={state} />
    </>
  );
}

export default App;
