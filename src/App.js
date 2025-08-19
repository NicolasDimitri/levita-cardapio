import './App.css';
import { Categorie } from './components/categorie';
import { Items } from './components/Itens';
import { Header } from './components/header';
import { OrderDetails } from './components/OrderDetails';


function App() {
  return (
    // <div className="App">
    //   <Header />
    //   <Categorie />
    //   <Items />
    //   <Categorie />
    //   <Items />
    //   <Categorie />
    //   <Items />
    //   <Categorie />
    //   <Items />
    // </div>
    <OrderDetails />
  );
}

export default App;
