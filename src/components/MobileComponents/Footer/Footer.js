import React from "react";
import s from "./Footer.module.scss";

export default function FooterMobile() {
    return (
        <div className={s.wrapper}>
            <h1>Blogr</h1>
            <section>
                <p className={s.subheading}>Product</p>
                <div className={s.links}>
                    <p>Overview</p>
                    <p>Pricing</p>
                    <p>Marketplace</p>
                    <p>Features</p>
                    <p>Integrations</p>
                </div>
            </section>
            <section>
                <p className={s.subheading}>Company</p>
                <div className={s.links}>
                    <p>About</p>
                    <p>Team</p>
                    <p>Blog</p>
                    <p>Careers</p>
                </div>
            </section>
            <section>
                <p className={s.subheading}>Connect</p>
                <div className={s.links}>
                    <p>Contact</p>
                    <p>Newsletter</p>
                    <p>LinkedIn</p>
                </div>
            </section>
        </div>
    );
}
