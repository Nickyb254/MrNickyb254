import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";

const MyNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <nav className='sticky top-0 z-50 shadow-md px-16 py-2 text-white bg-gradient-to-r from-[#1f2a21] to-[#230426]'>
        <div className='sm:flex sm:justify-between max-w-[90vw] m-auto'>
        <p className='py-4 font-bold text-xl  md:text-4xl'>PORTFOLIO</p>
        <div className='flex  '>
          <a href='#about'>
            <button className='my-btn hidden md:flex'>About</button>
          </a>
          <a href='#projects'>
            <button className='my-btn hidden md:flex ' >Projects</button>
          </a>
          <a href="#contact" className='pt-2 hidden sm:flex' >
            <button className='btn '>Contact</button>
          </a>
        </div>
        </div>
        
    </nav>
  )
}

export default MyNavbar