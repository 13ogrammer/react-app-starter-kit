import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom'
import CoreLayout from 'layouts/CoreLayout'

const Home = () =>
  <div>
    <Link to="/home">Home</Link>
  </div>

const SecondHome = ({ route }) =>
  <div>
    <Link to="/home/room">Room</Link>
    <Link to="/home/secondroom">Second Home</Link>
    {renderRoutes(route.routes)}
  </div>

const Room = () => <div>Room</div>
const SecondRoom = () => <div>SecondRoom</div>

const routes = [
  {
    component: CoreLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/home',
        component: SecondHome,
        routes: [
          {
            path: '/home/room',
            component: Room
          },
          {
            path: '/home/secondroom',
            component: SecondRoom
          }
        ]
      }
    ]
  }
]

export default routes
