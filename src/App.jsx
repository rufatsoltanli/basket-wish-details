import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Mainlayout from './layout/Mainlayout';
import HomePage from './pages/Home';
import DetailsPage from './pages/Details';
import BasketPage from './pages/Basket';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Mainlayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/details/" element={<DetailsPage />} />
            <Route path="/basket/" element={<BasketPage />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
