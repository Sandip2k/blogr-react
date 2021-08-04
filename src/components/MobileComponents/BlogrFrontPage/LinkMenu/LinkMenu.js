import React from "react";
import s from "./LinkMenu.module.scss";

const LinkMenu = (props) => {
    const { header, items, openList, num, setOpenList } = props;

    const handleClick = () => {
        setOpenList(openList.map((e, i) => (i !== num ? false : !e)));
    };
    return (
        <div className={s.wrapper}>
            <div className={s.linkOuter}>
                {header}
                <button
                    className={s.linkMenuChevron}
                    onClick={() => handleClick()}
                >
                    {!openList[num] ? (
                        <i className="fas fa-chevron-down"></i>
                    ) : (
                        <i className="fas fa-chevron-up"></i>
                    )}
                </button>
            </div>
            {!openList[num] ? (
                ""
            ) : (
                <div className={s.scrollArea}>
                    <div className={s.dropLinks}>
                        {items.map((item) => (
                            <p>{item}</p>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LinkMenu;
