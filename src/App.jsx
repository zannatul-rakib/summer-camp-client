
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './routes/Router'
import AuthProvider from './provider/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>

      </AuthProvider>
    </>
  )
}

export default App
