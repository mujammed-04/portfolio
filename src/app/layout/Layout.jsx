import React from 'react';
import Header from '../../widgets/header';
import Footer from '../../widgets/footer';

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </>
);

export default Layout;
