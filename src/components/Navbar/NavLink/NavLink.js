import React, { useState } from "react";
import s from "./NavLink.module.scss";

export default function NavLink(props) {
    const { name, options } = props;
    console.log(options);
    const [show, setShow] = useState(false);
    const handleClick = () => {
        if (show) {
            console.log("hello");
        } else {
            console.log("bye");
        }
        setShow(!show);
    };
    return (
        <>
            <div className={s.buttonWrap}>
                <button className={s.button} onClick={() => handleClick()}>
                    <span className={s.buttonText}>{name}</span>{" "}
                    {!show ? (
                        <span className={s.dropdown}>
                            <i className="fas fa-chevron-down fa-xs"></i>
                        </span>
                    ) : (
                        <span className={s.dropdown}>
                            <i className="fas fa-chevron-up dropdown fa-xs"></i>
                        </span>
                    )}
                </button>

                {show && (
                    <div className={s.dropdownItems}>
                        {Object.entries(options).map(([k, v]) => {
                            return (
                                <p key={k} className={s.hoverLink}>
                                    {v}
                                </p>
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
}
