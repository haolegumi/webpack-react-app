import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Error404 from '@pages/error/404'
import Home from '@pages/home'
import Login from '@pages/login'
import Default from '@layouts/default'

const routers = [
  {
    id: 1,
    path: '/',
    element: <Default />,
    routes: [
      {
        id: 12,
        path: '',
        loader: () => {
          return null
        },
        errorElement: <Error404 />,
        children: [
          {
            id: 13,
            path: '',
            element: <Home />,
            loader: () => {
              return ''
            },
            index: true,
            errorElement: <Error404 />
          }
        ]
      },
      {
        id: 14,
        path: '/login',
        loader: () => {
          return null
        },
        errorElement: <Error404 />,
        children: [
          {
            id: 13,
            path: '',
            element: <Login />,
            loader: () => {
              return ''
            },
            index: true,
            errorElement: <Error404 />
          }
        ]
      }
    ]
  },
  {
    id: 2,
    path: '*',
    element: <Error404 />
  }
]

const ListRouters = routers.map((route) => (
  <Route key={route.id} path={route.path} element={route.element}>
    {route.routes
      ? route.routes.map((item) => (
          <Route key={item.id} path={item.path}>
            {item.children
              ? item.children.map((child) => (
                  <Route key={child.id} index={child.index} path={child.path} element={child.element} />
                ))
              : null}
          </Route>
        ))
      : null}
  </Route>
))

const router = createBrowserRouter(createRoutesFromElements(ListRouters))

export default router
