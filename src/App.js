import {Routes,Route} from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Delete from "./Pages/Delete/Delete";
import Get from "./Pages/Get/Get";
import Post from "./Pages/Post/Post";
import Update from "./Pages/Update/Update";


function App() {
  return (
    <div>
      <Navbar/>
      <div className="content">
        <Routes>
            <Route path="/" index element={<Get/>}/>
            <Route path="/Post" element={<Post/>}/>
            <Route path="/Update" element={<Update/>}/>
            <Route path="/Delete" element={<Delete/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;
