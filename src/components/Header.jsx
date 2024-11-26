import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className='headers'>
        <Link as={Link} to="home">
          Home
        </Link>
        ||
        <Link as={Link} to="signup">
          Signup
        </Link>{" "}
        ||
        <Link as={Link} to="login">
          Login
        </Link>
        <br />
      </div>
    </>
  );
}

export default Header