import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from "@nextui-org/react";
import App from './App.jsx'
import './index.css'
import StickyProvider from './context/StickyProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StickyProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </StickyProvider>
  </React.StrictMode>,
)
