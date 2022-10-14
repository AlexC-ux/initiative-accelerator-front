import React from 'react';
import { createRoot } from "react-dom/client"
import "./normalize.css";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import MainPage from './Pages/index';
import CabinetPage from './Pages/cabinet';
import "./index.css";
import { GlobalUserStateContextProvider } from './Modules/User/User';
import AddPrivateInitiativePage from "./Pages/addPrivateInitiative";
import Header from './Modules/header';
import Footer from './Modules/footer';
import RatingPage from "./Pages/rating";
import AuthPage from './Pages/auth';
import RegPage from './Pages/register';
import ListInitiativesResultsPage from './Pages/listInitiativesResults';
import CheckInitiativePage from './Pages/checkInitiative';
import AddPublicInitiativePage from './Pages/addPublicInitiative';
import EditShopPage from './Pages/editShop';
import ShopPage from './Pages/shopPage';
import MyShopLogsPage from './Pages/MyShopLogsPage';

function Index() {

  return <>

    <BrowserRouter>
      <GlobalUserStateContextProvider>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<MainPage />}></Route>
            <Route path='/auth' element={<AuthPage />}></Route>
            <Route path='/register' element={<RegPage />}></Route>
            <Route path='/cab' element={<CabinetPage />}></Route>
            <Route path='/rating' element={<RatingPage />}></Route>
            <Route path='/shop' element={<ShopPage />}></Route>
            <Route path='/shop/story' element={<MyShopLogsPage />}></Route>
            <Route path='/shop/edit' element={<EditShopPage />}></Route>
            <Route path='/initiatives/results' element={<ListInitiativesResultsPage />}></Route>
            <Route path='/initiatives/check/:initiative_id' element={<CheckInitiativePage />}></Route>
            <Route path='/addPrivateInitiative' element={<AddPrivateInitiativePage />}></Route>
            <Route path='/addPublicInitiative' element={<AddPublicInitiativePage />}></Route>
          </Routes>
        </div>
        <Footer />
      </GlobalUserStateContextProvider>
    </BrowserRouter>

  </>
}

let rootElement = createRoot(document.getElementById('root')!);

rootElement.render(<Index />);
