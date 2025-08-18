import './App.css';
import { Categorie } from './components/categorie';
import { Items } from './components/Itens';
import { Header } from './components/header';


function App() {
  return (
    <div className="App">
      <Header />
      <Categorie />
      <Items />
    </div>
  );
}

export default App;
