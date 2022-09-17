import React from 'react'
import {Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <div>
          <Link to={"/create"}>
            <button type="submit">NEW POST </button>
          </Link>
          <Link to={"/publish"}>
            <button type="submit">PUBLISHED</button>
          </Link>
        </div>
    </div>
  )
}

export default Header
