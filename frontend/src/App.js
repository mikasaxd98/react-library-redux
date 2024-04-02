import './App.css';
import BookForm from './components/BookForm/BookForm';
import BookList from './components/BookList/BookList';
import Error from './components/Error/Error';
import Filter from './components/Filter/Filter';

function App() {
  return (
    <div className="app">
      <header className='app-header'>
        <h1>Book app 222</h1>
      </header>
      <main>
        <div className='left-column'>
          <BookForm/>
        </div>

        <div className='right-column'>
          <Filter/>
          <BookList/>
        </div>
      </main>
      <Error/>
    </div>
  );
}

export default App;
