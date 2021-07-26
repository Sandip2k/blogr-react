import React from "react";
import s from "./BlogrFrontPage.module.scss";
import Navbar from "../Navbar/Navbar";

export default function BlogrFrontPage() {
    return (
        <div className={s.wrapper}>
            <Navbar></Navbar>
            <div className={s.mainContent}>
                <header className={s.centerText}>
                    A modern publishing platform
                </header>
                <p className={s.tagline}>
                    Grow your audience and build your online brand
                </p>
                <div className={s.getStarted}>
                    <div className={s.startForFree}>Start for Free</div>
                    <div className={s.learnMore}>Learn More</div>
                </div>
            </div>
        </div>
    );
}
