import React from 'react'
import notfound from '../Images/404.png'
import '../Style/404.css'

export default function Pagenotfound () {
  return (
    <>
    <div className="notfoundpage">
        <img src={notfound} alt="Not Found" />
    </div>
    </>
  )
}
