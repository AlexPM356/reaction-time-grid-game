import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GamePage } from 'pages/Index';
import 'assets/styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GamePage />
  </StrictMode>
)
