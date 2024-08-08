
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Quiz from './pages/Quiz';

import LandinPage from './pages/Land';

const App: React.FC = () => {

  return (
  
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<LandinPage />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </div>
      </Router>

  );
};

export default App;
