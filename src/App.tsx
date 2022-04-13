import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import './app.css';
import Layout from './pages/layout/layout';
import MainPage from './pages/main-page/main-page';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
