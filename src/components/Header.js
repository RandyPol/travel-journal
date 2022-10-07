import React from 'react'
import { FaGlobeAmericas } from "react-icons/fa";

const Header = () => {
  return (
    <header className='topHeader'>
<FaGlobeAmericas className='globeIcon'/> 
<p>My Travel Journal.</p>
    </header>
  )
}

export default Header