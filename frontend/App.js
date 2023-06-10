import React from 'react'
import Maincomp from './comp/Maincomp'
import {BrowserRouter} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'

export default function App() {
  return (
    <BrowserRouter>
    <ToastContainer theme="colored" />
    <Maincomp />
    </BrowserRouter>
  )
}

