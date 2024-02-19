import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Contact from './shared/Contact/Contact'
import Footer from './components/Footer/Footer'
import { ScrollRestoration } from "react-router-dom";
import { fetchList } from './redux/Slices/ProjectSlice'


export default function Root() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchList())
  }, [])
  
  return (
    <>
        <Header/>
        <Outlet/>
        <Contact/>
        <Footer/>
        <ScrollRestoration/>
    </>
    
  )
}
