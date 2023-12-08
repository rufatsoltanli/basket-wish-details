import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Mainlayout from './layout/Mainlayout';
import HomePage from './pages/Home';
import DetailsPage from './pages/Details';
import BasketPage from './pages/Basket';
import WishListPage from './pages/WishList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Mainlayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
            <Route path="/basket/" element={<BasketPage />} />
            <Route path="/wishList/" element={<WishListPage />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
