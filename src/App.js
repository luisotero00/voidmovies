//Libraries
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import List from './components/List/List';
import Login from "./components/Login/Login";
import Detail from "./components/Detail/Detail";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

//Styles
import "./App.css";


function App() {
  return (
    <>
    <div className="container">

      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/List' element={<List />} />
          <Route path='/Detail/:id' element={<Detail />} />
          {<Route path='/Navbar' element={<NavBar />} />}
        </Routes>

        <Footer />
      </BrowserRouter>

    </div>
    </>
  );
}

export default App;
