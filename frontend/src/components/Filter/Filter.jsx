import { useDispatch, useSelector } from 'react-redux'
import './Filter.css'
import { setTitleFilter, selectTitleFilter, resetFilters } from '../../redux/slices/filterSlice';
function Filter() {
  const titleFilter = useSelector(selectTitleFilter);
  const dispatch = useDispatch();

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }

  const handleResetFilters = () => {
    dispatch(resetFilters())
  }
  return (
    <div className='filter-container'>
      <input type="text" value={titleFilter} onChange={handleTitleFilterChange} placeholder='Filter by title...' />
      <button type='button' onClick={handleResetFilters}>Reset filters</button>
    </div>
  )
}

export default Filter