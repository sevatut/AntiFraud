import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createRouter, createRootRoute, createRoute } from '@tanstack/react-router'
import Dashboard from './pages/Dashboard/Dashboard.tsx';
import Reports from './pages/Reports/Reports.tsx';
import Transactions from './pages/Transactions/Transactions.tsx';

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: App,
})

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: Dashboard,
})

const reportsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Reports,
})

const transactionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/transactions',
  component: Transactions,
})

const routeTree = rootRoute.addChildren([dashboardRoute, reportsRoute, transactionsRoute])
const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
