import Link from 'next/link'
import React from 'react'
import Logo from '@/components/Logo';

const Navbar = () => {
  return <nav>
    <div className="wrapper">
        <div className="brand">
            <Link href="/">
                <Logo />
            </Link>
        </div>
    </div>
  </nav>
}

export default Navbar