/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense, type ComponentType } from 'react'
import App from '../App'

const Home = lazy(() => import('../pages/Home'))
const Services = lazy(() => import('../pages/Services'))
const ServiceDetail = lazy(() => import('../pages/ServiceDetail'))
const About = lazy(() => import('../pages/About'))
const Projects = lazy(() => import('../pages/Projects'))
const ProjectDetail = lazy(() => import('../pages/ProjectDetail'))
const Contact = lazy(() => import('../pages/Contact'))
const NotFound = lazy(() => import('../pages/NotFound'))

function withSuspense(Component: ComponentType) {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <Component />
    </Suspense>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: withSuspense(Home) },
      { path: 'services', element: withSuspense(Services) },
      { path: 'services/:slug', element: withSuspense(ServiceDetail) },
      { path: 'a-propos', element: withSuspense(About) },
      { path: 'realisations', element: withSuspense(Projects) },
      { path: 'realisations/:slug', element: withSuspense(ProjectDetail) },
      { path: 'contact', element: withSuspense(Contact) },
      { path: '*', element: withSuspense(NotFound) },
    ],
  },
])