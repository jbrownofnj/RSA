import { createRoot } from 'react-dom/client';
import React from 'react';
import SuperApp from "./SuperApp"


const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <React.StrictMode>
 <SuperApp/>
  </React.StrictMode>
)