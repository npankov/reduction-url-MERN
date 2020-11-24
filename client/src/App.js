import React from 'react';
import { useRoutes } from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import 'materialize-css';



function App() {
  const routes = useRoutes(false);
  return (
    <div className="container">
      <Router>
        {routes}
      </Router>
    </div>
  );
}

export default App;
