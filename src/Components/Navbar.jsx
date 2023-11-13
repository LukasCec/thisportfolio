import React, { useEffect } from 'react';

export default function Navbar() {


    useEffect(() => {

        const navItems = document.querySelectorAll('.nav-item');

        navItems.forEach(navItem => {
            const navLine = navItem.querySelector('.nav--line');

            function handleHover() {
                navLine.classList.add('active');
                navItem.classList.add('active--hover');
            }


            function handleLeave() {
                navLine.classList.remove('active');
                navItem.classList.remove('active--hover');
            }

            navItem.addEventListener('mouseover', handleHover);
            navItem.addEventListener('mouseout', handleLeave);


            return () => {
                navItem.removeEventListener('mouseover', handleHover);
                navItem.removeEventListener('mouseout', handleLeave);
            };
        });
    }, []);

    return (
        <>
            <nav className="mt-10" id="navbar">
                <ul>
                    <li className="nav-item">
                        <a href="#projects">
                            01 <div className="nav--line bg-black inline-block mr-2 ml-2 "></div> PROJECTS
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#talks">
                            02 <div className="nav--line bg-black inline-block mr-2 ml-2"></div> TALKS
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#interviews">
                            03 <div className="nav--line bg-black inline-block mr-2 ml-2"></div> INTERVIEWS
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}
