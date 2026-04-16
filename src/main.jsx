import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './layout/RootLayout';
import Homepage from './pages/homepage/Homepage';
import TimelinePage from './pages/timeline/TimelinePage';
import Stats from './pages/stats/Stats';
import FriendsDetailsPage from './pages/friendsDetails/FriendsDetailsPage';
import FriendsContextProvider from './context/FriendsContextProvider';
import ErrorElementPage from './pages/ErrorPage/ErrorElementPage';


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
       path: '/friend/:id',
       element: <FriendsDetailsPage></FriendsDetailsPage>
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
    errorElement: <ErrorElementPage></ErrorElementPage>
  },
 
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <FriendsContextProvider>
    <RouterProvider router={router} />
  </FriendsContextProvider>

  </StrictMode>,
)
