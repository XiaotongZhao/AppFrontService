import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Home from './pages/Home';
import RedBlackTree from './pages/RedBlackTree';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} >
      <Route index path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/redblacktree" element={<RedBlackTree />} />
    </Route>
  </Routes>
</BrowserRouter>
);