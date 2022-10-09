import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <Link to="/" >Home</Link>
        <Link to="/create" >Create</Link>

    </div>
  )
}

export default NavBar