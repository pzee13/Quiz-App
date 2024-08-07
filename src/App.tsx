// src/App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './app/store';
import Quiz from './pages/Quiz';
import Landing from './pages/Landing';
import ComponentName from './pages/Land';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/app" element={<ComponentName />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
