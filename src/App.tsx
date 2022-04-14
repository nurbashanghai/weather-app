import React from 'react';

import './app.css';
import Layout from './pages/layout/layout';
import MainPage from './pages/main-page/main-page';

function App() {
  return (
    <Layout>
      <MainPage />
    </Layout>
  );
}

export default App;
