import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from "@nextui-org/react";
import App from './App.jsx'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthProvider } from './context/AuthContext.jsx';
AOS.init();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </AuthProvider>
  </React.StrictMode>,
)
