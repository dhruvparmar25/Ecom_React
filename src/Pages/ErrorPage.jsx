import React from 'react'
import { NavLink } from 'react-router-dom'


function ErrorPage() {
  return (
    <div>
      <div className="conatainer">
        <div className='text-center justify-center overflow-hidden flex flex-col gap-5 h-[70vh]'>
          <h2 className='text-5xl '>404</h2>
          <h2 className='text-5xl '>UH OH! You're lost.</h2>
          <p>The page you are looking for does not exist. how you got here is a mystery. But you can click the button  below  to go back to the homepage.</p>
          <NavLink to="/">
            <button>GO BACK TO HOME</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage