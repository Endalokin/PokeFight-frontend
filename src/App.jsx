import { useState } from 'react'
import './App.css'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './components/root'
import PokeList from './components/PokeList'
import PokeDetail from './components/PokeDetail'
import PokeInfo from './components/PokeInfo'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route path="/" element={<PokeList />} >
      <Route path="/pokemon/:id" element={<PokeDetail />} />
    </Route>
    <Route path="/pokemon/:id/:info" element={<PokeInfo />} />
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
