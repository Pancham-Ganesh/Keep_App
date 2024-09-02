import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className='footer_yellow'>
                <p>copyright © { year } Pancham Ganesh</p>
            </footer>
        </>
    )
}

export default Footer