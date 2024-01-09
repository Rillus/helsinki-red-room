import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Tickets from './pages/Tickets'
import Collection from './pages/Collection'
import collectionData from "./data/collection";

export default function Root() {
  const collectionRoutes = collectionData.collection.map((item) => (
    <Route path={`collection/${item.id}`} key={item.id} element={<Collection id={item.id}/>} />
  ))
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="tickets" element={<Home />} />
          <Route path="tickets/new-york" element={<Tickets location="New York"/>} />
          <Route path="tickets/san-diego" element={<Tickets location="San Diego"/>} />
          <Route path={`collection`} element={<Home />} />
          {collectionRoutes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
