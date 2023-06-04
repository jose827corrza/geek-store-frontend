
import { BrowserRouter, useRoutes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import MyOrders from './pages/MyOrders';
import MyOrder from './pages/MyOrder';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import { ShoppingCartProvider } from './context/context';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home />},
    { path: '/my-orders', element: <MyOrders />},
    { path: '/my-order', element: <MyOrder />},
    { path: '/signin', element: <SignIn />},
    { path: '/*', element: <NotFound />},
  ])
  return routes;
}

const App= () => {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ShoppingCartProvider>
    
  )
}

export default App
