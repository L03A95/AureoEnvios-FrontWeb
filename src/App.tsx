import './App.css'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login/:userType" element={<Login/>}/>

        </Routes>
      </div>
    </Router>
  )
}

export default App
