import React from 'react'
import { NavLink } from 'react-router-dom'

function PageNavigation({title}) {
  return (
    <div className='pageNavigation p-2 bg-zinc-300 fixed w-full'>
        <NavLink to="/">Home  </NavLink> / {title}
    </div>
  )
}

export default PageNavigation