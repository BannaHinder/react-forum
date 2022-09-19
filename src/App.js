import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Post from "./pages/Post";
import PageNotFound from './pages/PageNotFound'
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {


  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route  path='/post/:id' element={<Post/>}/> 
        <Route path='/*' element={<PageNotFound/>}/> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
