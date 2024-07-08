import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100 z-50 relative">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Virtual Database</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/create">Create Post</Link></li>
            <li><Link to="/">All Posts</Link></li>
            <li><Link to="/display">Display</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
        <div className="dropdown navbar-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50">
            <li><Link to="/create">Create Post</Link></li>
            <li><Link to="/">All Posts</Link></li>
            <li><Link to="/display">Display</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
