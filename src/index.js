import React from 'react'
import { createRoot } from 'react-dom/client';

import App from './App'



const container = document.getElementById('root');
const aap = createRoot(container); // createRoot(container!) if you use TypeScript
aap.render(<App />);