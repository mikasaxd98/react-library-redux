import { useDispatch, useSelector } from 'react-redux'
import './Filter.css'
import { setTitleFilter, selectTitleFilter, resetFilters, setAuthorFilter, selectAuthorFilter } from '../../redux/slices/filterSlice';
function Filter() {
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const dispatch = useDispatch();

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }

  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value))
  }

  const handleResetFilters = () => {
    dispatch(resetFilters())
  }
  return (
    <div className='filter-container'>
      <input type="text" value={titleFilter} onChange={handleTitleFilterChange} placeholder='Filter by title...' />
      <input type="text" value={authorFilter} onChange={handleAuthorFilterChange} placeholder='Filter by author...' />
      <button type='button'  onClick={handleResetFilters}>Reset filters</button>
    </div>
  )
}

export default Filter