import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';


const rootElem = document.getElementById('root');
createRoot(rootElem).render(<App />)