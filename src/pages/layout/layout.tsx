import React from 'react';

import Footer from './footer';
import Header from './header';


const Layout: React.FC = ({ children }) => {
  return (
    <div className='mt-5 p-5' >
      <Header />
        {children}
      <Footer />
    </div>
  );
};

export default Layout;