import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Home from './pages/Home';
import Test from './pages/Test';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} >
      <Route index path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/test" element={<Test />} />
    </Route>
  </Routes>
</BrowserRouter>
);