import React from "react";
import s from "./Navbar.module.scss";
import NavLink from "./NavLink/NavLink";

export default function Navbar() {
    return (
        <>
            <nav className={s.navBar}>
                <div className={s.navItems}>
                    <div className={s.brand}>Blogr</div>
                    <div className={s.navMenu}>
                        <NavLink
                            name={"Product"}
                            options={{
                                1: "Mjolnir",
                                2: "Aerondight",
                                3: "Quantum",
                            }}
                        />
                        <NavLink
                            name={"Company"}
                            options={{ 1: "About", 2: "Teams", 3: "Careers" }}
                        />
                        <NavLink
                            name="Connect"
                            options={{
                                1: "Contact",
                                2: "Newsletter",
                                3: "LinkedIn",
                            }}
                        />
                    </div>
                </div>
                <div className={s.authAction}>
                    <div>Login</div>
                    <div className={s.signUp}>Sign&nbsp;Up</div>
                </div>
            </nav>
        </>
    );
}
