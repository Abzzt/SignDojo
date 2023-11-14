import React from "react";

const NavBar = () =>{
    return (
        <nav className="fixed w-full h-24 shadow-xl bg-pale-yellow">
            <div className="flex items-center justify-center h-full w-full px-4 2xl:px-16">
                <div className = "text-3xl">SignDojo</div>
            </div>
        </nav>
    )
}

export default NavBar;