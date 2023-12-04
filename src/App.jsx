import './App.css'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './components/root'
import PokeList from './components/PokeList/PokeList'
import PokeDetail from './components/PokeList/PokeDetail'
import PokeInfo from './components/PokeList/PokeInfo'
import Battle from "./components/Battle/Battle"
import "tailwindcss/tailwind.css"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route path="/" element={<PokeList />} >
      <Route path="/pokemon/:id" element={<PokeDetail />} />
    </Route>
    <Route path="/pokemon/:id/:info" element={<PokeInfo />} />
    <Route path="/battle" element={<Battle />} />
  </Route>
  
))


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
