import React from 'react';

function Navbar() {
  return (
    <>
    <nav className="flex items-center justify-between  items-center p-4 p-4 bg-gray-800">
  <ul className="nav flex space-x-30 satisfy-regular text-3xl">
    <li><a href="/" className="text-white hover:text-gray-400">Home</a></li>
    <li><a href="/Tributes" className="text-white hover:text-gray-400">Tributes</a></li>
    <li><a href="/Services" className="text-white hover:text-gray-400">Services</a></li>
    <li><a href="/Photos" className="text-white hover:text-gray-400">Photos</a></li>
    <li><a href="/Life" className="text-white hover:text-gray-400">Life</a></li>
    <li><a href="/Places" className="text-white hover:text-gray-400">Places</a></li>
    <li><a href="/Organization" className="text-white hover:text-gray-400">Organization</a></li>
  </ul>
</nav>
</>
  );
}

export default Navbar;
