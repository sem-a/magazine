import React, { useEffect } from 'react';
import Catalog from './components/Catalog';
import Header from './components/Header';

import './css/null.css';
import './css/style.css';

function App() {
  
  useEffect( () => {
  });

  return (
    <div>
      <Header />
      <Catalog />
    </div>
  );
}

export default App;