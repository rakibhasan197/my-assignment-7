import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './layout/RootLayout';
import Homepage from './pages/homepage/Homepage';
import TimelinePage from './pages/timeline/TimelinePage';
import Stats from './pages/stats/Stats';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>
      },
       {
    path: '/timeline',
    element: <TimelinePage></TimelinePage>
  },
       {
    path: '/stats',
    element: <Stats></Stats>
  }
    ],
    errorElement: <h2>This Page is Not Found</h2>
  },
 
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>,
)
