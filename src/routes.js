import { lazy } from 'react'
import { v4 as uuid } from 'uuid'

const routes = [
  {
    key: uuid(),
    exact: true,
    path: '/',
    // path: `${match.url}`,
    component: lazy(() => import('./App')),
    private: true,
    restricted: true,
  },
  {
    key: uuid(),
    exact: true,
    path: '/contacts',
    // path: `${match.url}`,
    component: lazy(() => import('./components/ContactList/ContactList')),
    private: true,
    restricted: true,
  },
  {
    key: uuid(),
    exact: true,
    path: '/addcontact',
    // path: `${match.url}`,
    component: lazy(() => import('./components/ContactForm/ContactForm')),
    private: true,
    restricted: true,
  },
]
export default routes
