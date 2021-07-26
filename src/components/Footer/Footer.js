import React from "react";
import s from "./Footer.module.scss";

export default function Footer() {
    return (
        <div className={s.wrapper}>
            <div className={s.brand}>Blogr</div>
            <div>
                <header>Product</header>
                <p>Overview</p>
                <p>Pricing</p>
                <p>Marketplace</p>
                <p>Features</p>
                <p>Integrations</p>
            </div>
            <div>
                <header>Company</header>
                <p>About</p>
                <p>Team</p>
                <p>Blog</p>
                <p>Careers</p>
            </div>
            <div>
                <header>Connect</header>
                <p>Contact</p>
                <p>Newsletter</p>
                <p>LinkedIn</p>
            </div>
        </div>
    );
}
