import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import ThemeProvider from './providers/ThemeProvider'
import WebsiteLayout from './layouts/WebsiteLayout'
import HomePage from './pages/HomePage'
import CarrelloPage from './pages/CarrelloPage'
import BigliettiPage from './pages/BigliettiPage'
import MerchandisingPage from './pages/MerchandisingPage'
import BigliettoPage from './pages/BigliettoPage'
import MerchSingolPage from './pages/MerchSingolPage'
import Chisiamo from './pages/Chisiamo'
import GuestLayout from './layouts/GuestLayout'
import MerchSingolWrapper from './components/MerchSingolWrapper'
import ShopProvider from './providers/ShopProvider'
import ContattiPage from './pages/ContattiPage'
import PagamentoPage from './pages/PagamentoPage'




const router = createBrowserRouter([
  {
    path: '/',
    element: <GuestLayout/>,
    children: [
      {
        path:'/:id',
        element: <BigliettoPage />
      },
      {
        path: '/carrello',
        element: <CarrelloPage />
      },
      {
        path: '/biglietti',
        element: <BigliettiPage />
      },
      {
        path: '/biglietto',
        element: <BigliettoPage />
      },
      {
        path: '/merch',
        element: <MerchandisingPage />
      },
      {
        path: '/merch/:id',
        element: <MerchSingolWrapper/>,
        children: [
          {
            index: true,
            element: <MerchSingolPage />
          }
        ]
      },
      {
        path: '/checkout',
        element: <PagamentoPage />
      },
      {
        path: '/chisono',
        element: <Chisiamo />
      },
      {
        path: '/contatti',
        element: <ContattiPage />
      },
    ]
  },
  {
    path: '/',
    element: <WebsiteLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ShopProvider>
        <NextUIProvider>
          <RouterProvider router={router}/>
        </NextUIProvider>
      </ShopProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
