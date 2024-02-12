import Header from './components/Header/Header'
import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import Footer from './components/Footer/Footer'
import Contact from './shared/Contact/Contact'
import ProjetListPage from './Pages/ProjetsListPage/ProjetListPage'
import ProjetPage from './Pages/ProjetPage/ProjetPage'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from './Root'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      children :[
        {
          path: '/',
          element: <HomePage/>
        },
        {
          path: '/mesprojets/',
          element: <ProjetListPage/>
        },
        {
          path: '/projet/:id',
          element: <ProjetPage/>
        },
      ]
    },
    
  ])

  return (
    <>
    
      

      <RouterProvider router={router} />

      

      {/* <HomePage/> */}

      


    </>
  )
}

export default App
