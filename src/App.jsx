import { useEffect, useState } from "react";
import Header from "./components/Header";
import Produts from "./components/Produtos";
import Showcase from "./components/Showcase";
function App() {
  const [produtosList, setProdutsList] = useState([]);
  const [cartProduts, setCartProduts]  = useState([]);
  const [filter, setFilter] = useState("");
  const produtsFilter = !filter ? produtosList : produtosList?.filter((produto)=> produto.name.includes(filter))
  
  useEffect(()=> {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
    .then((response)=> response?.json())
    .then((response)=> setProdutsList(response))
    .catch((erro)=> console.log(erro))
  },[])
  return (
    <div className="App">
      <Header setFilter={setFilter}/>
      <Showcase cartProduts={cartProduts} setCartProduts={setCartProduts}><Produts produtsList={produtsFilter} setCartProduts={setCartProduts} cartProduts={cartProduts}/></Showcase>
    </div>
  );
}

export default App;
