
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ShopCategory from './Pages/ShopCategory';
import ProductPage from './Pages/ProductPage';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assert/banner1..jpg';
import women_banner from './Components/Assert/banner2.avif';
import kids_banner from './Components/Assert/banner3.png';
import electronic_banner from './Components/Assert/banner4.png';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />}/>
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />}/>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids"/>}/>
        <Route path='/electronics' element={<ShopCategory banner={electronic_banner} category="electronics"/>}/>
        <Route path='/product' element={<ProductPage />}>
          <Route path=':productId' element={<ProductPage/>}/>
        </Route>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/login' element={<Login />}/>
        
      
      </Routes>
      <Footer />
      </BrowserRouter>

      
    
    </div>
  );
}

export default App;
