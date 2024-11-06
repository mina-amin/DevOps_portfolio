import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <Route path="/login" component={Login} />
      {/* Add other routes like /resources, /logs, etc. */}
    </Router>
  );
};

export default App;
