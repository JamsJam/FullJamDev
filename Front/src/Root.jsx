import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Contact from './shared/Contact/Contact'
import Footer from './components/Footer/Footer'


export default function Root() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Contact/>
        <Footer/>
    </>
  )
}
