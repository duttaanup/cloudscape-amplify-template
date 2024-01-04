import '@aws-amplify/ui-react/styles.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home';
import Page1 from './routes/page1';
import Page2 from './routes/page2';

function App({ signOut, user }) {
  return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
  );
}

export default App;
