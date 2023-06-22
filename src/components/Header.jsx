import React from 'react'

const NavContent = () => {
    return <>
        <h2>Tej Pratap</h2>
        <div>
            <a href='#home'>Home</a>
            <a href='#work'>Work</a>
            <a href='#timeline'>Experience</a>
            <a href='#service'>Services</a>
            <a href='#testimonial'>Testimonial</a>
            <a href='#contact'>Contact</a>
        </div>
        <a href='mailto: tejfaster55@gmail.com' target="_top">
            <button>Email</button>
        </a>
    </>
}

const Header = () => {
    return (
        <nav>
            <NavContent />
        </nav>
    )
}

export default Header