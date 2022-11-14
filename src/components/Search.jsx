const Search = ({todos, setSearch, text}) => {

  const handleChange = (e) => {
    const search = e.target.value;
    const filtered = todos.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()));
    setSearch(filtered)
    text(search)
  }
 
  return (
    <nav>
      <div className='conteiner'>
        <input onChange={handleChange} placeholder='Search' className='form-control' type="search" />
      </div>
    </nav>
  )
}

export default Search
