import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
//import './assets/styles/bootstrap.custom.css';
//import './assets/styles/index.css';
import './App.css';
import App from './App';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './store';
import PrivateRoute from './componets/PrivateRoute';
import ProductScreem from './screens/ProductScreem';
import ProductGridScreen from './screens/ProductGridScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import CartScreen from './screens/CartScreen';
import ShippingScreen from './screens/ShippingScreen';
import ConfirmOrder from './screens/ConfirmOrder';

const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path="/" element = { <App />}>
      <Route  index = {true} path="/" element = { <Home />} />
      <Route  path="/product/:id" element = { <ProductScreem />} />
      <Route path="/all-product" element={< ProductGridScreen/>}/>
      <Route path="/login" element={< LoginScreen/>}/>
      <Route path="/register" element={< RegisterScreen/>}/>
      <Route path='/cart' element= { <CartScreen/>}/>
      <Route path='' element = {<PrivateRoute/>}>
      <Route path='/shipping' element= {<ShippingScreen/>}/>
      <Route path='/confirm' element ={<ConfirmOrder/>}/>
      </Route>
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

