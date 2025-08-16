import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from './Router'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { injectSpeedInsights } from '@vercel/speed-insights';

injectSpeedInsights();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)