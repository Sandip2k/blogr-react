import React from "react";
import phones from "./../../../images/illustration-phones.svg";
import s from "./SOTA.module.scss";

export default function SOTAMobile() {
    return (
        <div className={s.wrapper}>
            <img src={phones} className={s.image} alt="" />
            <div className={s.textWrapper}>
                <header>
                    <h1>State of the Art Infrastructure</h1>
                </header>
                <p>
                    With reliability and speed in mind, worldwide data centers
                    provide the backbone for ultra-fast connectivity. This
                    ensures that your site will load instantly, no matter where
                    your readers are, keeping your site competitive.
                </p>
            </div>
        </div>
    );
}
