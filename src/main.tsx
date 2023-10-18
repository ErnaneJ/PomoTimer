import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import * as ServiceWorkerRegistration from './serviceWorker'
import './i18n.ts';

import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

ServiceWorkerRegistration.register();