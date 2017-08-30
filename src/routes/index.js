import CoreLayout from 'layouts/CoreLayout'
import App from './App'

const routes = [
  {
    component: CoreLayout,
    routes: [
      {
        path: '/app',
        exact: true,
        component: App
      },
      {
        path: '/app/:id',
        exact: true,
        component: App
      }
    ]
  }
]

export default routes
