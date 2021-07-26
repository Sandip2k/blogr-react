import React from "react";
import s from "./SOTA.module.scss";
import phones from "./../../images/illustration-phones.svg";

export default function SOTA() {
    return (
        <div className={s.wrapper}>
            <img src={phones} alt="Phones" className={s.phones} />
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
