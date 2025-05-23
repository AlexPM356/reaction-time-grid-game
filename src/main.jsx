import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SidebarArea } from 'components/ui/Sidebar';
import { GamePage } from 'pages/Home';
import 'assets/styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SidebarArea />
    <GamePage />
  </StrictMode>
)
