import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout({children}) {
  return (
    <div classNam>
      <Navbar/>
      <div className="content">
        {children}
      </div>
      <footer>
        <p>Copyright 2023 yasczzn on GitHub</p>
      </footer>
    </div>
  )
}
