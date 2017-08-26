import React from 'react'
import { renderRoutes } from 'react-router-config'

const CoreLayout = ({ route }) =>
  <div>
    <h2>CoreLayout</h2>
    {renderRoutes(route.routes)}
  </div>

export default CoreLayout
