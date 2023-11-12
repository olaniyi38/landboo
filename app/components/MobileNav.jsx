import React from 'react'
import { LINKS } from './Header'
import Link from 'next/link'
import Button from './Button'



const MobileNav = ({ isActive }) => {
    return (
        <nav className={`mobile-nav-transition fixed top-[3rem] z-[5] bg-white text-black w-full shadow-md  origin-top ${isActive ? "active" : ""}`}>
            <div className='p-6 py-12 flex flex-col gap-y-6 capitalize'>
                {
                    LINKS.map(({ title, url }) => (
                        <Link key={"mobile" + title + url} className='nav-link hover:text-darkPurple transition-colors overflow-hidden' href={url}>
                            <span>{title}</span>
                        </Link>
                    ))
                }
                <Link href="#" className='overflow-hidden'>
                    <Button>
                        Sign Up
                    </Button>
                </Link>
            </div>
        </nav>
    )
}

export default MobileNav