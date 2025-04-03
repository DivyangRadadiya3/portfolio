import { Home,Profile } from '@/pages';
import React from 'react'

export function Main() {
  return (
    <>
      <Home />
      <Profile />
    </>
  )
}

Main.displayName = "/src/widgets/layout/main.jsx";


export default Main;
