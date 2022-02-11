import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from 'wouter';

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Mi App</h1>
        <Link to='/gif/panda'>Ver gifs de Pandas</Link>
        <Link to='/gif/argentina'>Ver gifs de Argentina</Link>
        <Link to='/gif/year'>Ver gifs de Año nuevo</Link>
        <Route 
          component={ListOfGifs} 
           path='/gif/:keyword' />
      </section>
    </div>
  );
}
