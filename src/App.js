import './App.css';
import Categorie from './components/Categorie';
import Items from './components/Itens';
import Header from './components/Header';
import OrderDetails from './components/OrderDetails';
import NavBar from './components/NavBar';
import MainBar from './components/MainBar';

function App() {
  return (
    <>
      {/* <div className="App"> */}
      {/* <Header /> */}
      <Categorie />
        <Items />
        <Categorie />
        <Items />
        <Categorie />
        <Items />
        <Categorie />
        <Items />
      {/* </div> */}
      {/* <OrderDetails /> */}
      {/* <NavBar />
      <MainBar /> */}
    </>
  );
}

export default App;
