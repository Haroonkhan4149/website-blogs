import { BrowserRouter as Router, Route,Routes, Outlet } from 'react-router-dom'
import './App.css'
import Blog from './pages/Blog'
import Home from './pages/Home'
const App = () => {
  return (
    <div className="container">     
        <Outlet/>  
    </div>
  )
}

export default App
