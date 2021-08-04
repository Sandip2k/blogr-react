import React from "react";
import s from "./Laptop.module.scss";
import laptop from "./../../../images/illustration-laptop-mobile.svg";

export default function Laptop() {
    return (
        <div className={s.wrapper}>
            <img src={laptop} className={s.image} alt="" />
            <h2>Free, open, simple</h2>
            <p>
                Blogr is a free and open source application backed by a
                community of helpful developers. It supports features such as
                coe syntax highlighting, RSS feeds, social media integration,
                third-party commenting tools, and works seamlessly with Google
                Analytics. The architecture is clean and relatively easy to
                learn.
            </p>
            <h2>Powerful tooling</h2>
            <p>
                Batteries included. We built a simple and straightforward CLI
                tool that makes customization and deployment a breeze, but
                capable of producing even the most complicated sites.
            </p>
        </div>
    );
}
