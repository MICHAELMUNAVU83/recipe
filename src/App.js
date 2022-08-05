import './App.css';
import Pages from './pages/Pages';
import Categories from './components/Categories';
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div >
       <BrowserRouter>
      <h1>RECIPE</h1>
      <Categories />
      <Pages/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
