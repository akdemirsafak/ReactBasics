import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigations from './Navigations'

export default function Layout() {
  return (
    <div>
        <Navigations/>
      Layout
      <Outlet/>
    </div>
  )
}
