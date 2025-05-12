import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from 'components/HeaderBar';
import { GamePage } from 'pages/Home';
import 'assets/styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <GamePage />
  </StrictMode>
)
