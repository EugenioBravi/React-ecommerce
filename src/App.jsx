
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/detail" element={<ItemDetailContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer />}/>
        <Route path="/categoria/:category" element={<ItemListContainer />}/>
      </Routes>
      
    </BrowserRouter>
  );
};
export default App;
