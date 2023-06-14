import React from 'react';
import { Footer } from '../features';
import Navbar from '../features/navbar/Navbar';
import AppRoutes from './AppRoutes';

const App = () => {
  return (
    <div className="mainContentContainer">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
