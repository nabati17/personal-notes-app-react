import React from 'react';
import { MdOutlineArchive } from 'react-icons/md';
import { FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <h1>
        <Link to="/">
          {' '}
          <FiHome />
        </Link>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/archive">
              <MdOutlineArchive />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
