import React, { useState } from "react";
import s from "./BlogrFrontMobile.module.scss";
import ham from "./../../../images/icon-hamburger.svg";
import close from "./../../../images/icon-close.svg";
import LinkMenu from "./LinkMenu/LinkMenu";

export default function BlogrFrontMobile() {
    const [menuClicked, setMenuClicked] = useState(false);

    const handleClick = () => {
        setMenuClicked(!menuClicked);
    };

    const [openList, setOpenList] = useState([false, false, false]);
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.head}>
                    <h1>Blogr</h1>
                    <button onClick={() => handleClick()}>
                        {!menuClicked ? (
                            <img src={ham} alt="" />
                        ) : (
                            <img src={close} alt="" />
                        )}
                    </button>
                </div>
                <div className={s.hero}>
                    <h1>A modern publishing platform</h1>
                    <h3>Grow your audience and build your online brand</h3>
                </div>
                <div className={s.getStarted}>
                    <div className={s.startForFree}>Start for Free</div>
                    <div className={s.learnMore}>Learn More</div>
                </div>
            </div>
            {!menuClicked ? (
                ""
            ) : (
                <div className={s.menu}>
                    <div>
                        <LinkMenu
                            header="Product"
                            items={[
                                "Overview",
                                "Pricing",
                                "Marketplace",
                                "Features",
                                "Integrations",
                            ]}
                            openList={openList}
                            setOpenList={setOpenList}
                            num={0}
                        ></LinkMenu>
                        <LinkMenu
                            header="Company"
                            items={["About", "Team", "Blog", "Careers"]}
                            openList={openList}
                            setOpenList={setOpenList}
                            num={1}
                        ></LinkMenu>
                        <LinkMenu
                            header="Connect"
                            items={["Contact", "Newsletter", "LinkedIn"]}
                            openList={openList}
                            setOpenList={setOpenList}
                            num={2}
                        ></LinkMenu>
                    </div>
                    <div>
                        <hr />
                    </div>
                    <div className={s.auth}>
                        <p>Login</p>
                        <p className={s.signUp}>Sign Up</p>
                    </div>
                </div>
            )}
        </>
    );
}
