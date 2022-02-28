import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './app.css'
import Home from './pages/home/Home';

const App = () => {
  return (
    <>
      <Topbar />
      <div className='app_container'>
        <Sidebar />
        <Home />
      </div>
    </>
  )
}

export default App