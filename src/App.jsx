
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './routes/Router'
import AuthProvider from './provider/AuthProvider'

function App() {


  return (
    <>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </>
  )
}

export default App
