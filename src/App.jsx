import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Main from './components/Main/Main'
import AboutUs from './components/Main/AboutUs'


function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index element={<Main/>} />
            <Route path="/aboutus" element={<AboutUs/> } />
          </Route>
        </Routes>
      </div>
      
    </>
  )
}

export default App
