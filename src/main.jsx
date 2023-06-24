import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { BrowserRouter } from 'react-router-dom'
import makeServer from "./server.js"
makeServer();

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="822226117564-kcu3eilk1gqqeos8hj9n6o5vk7qh53qb.apps.googleusercontent.com">
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
  ,
)
