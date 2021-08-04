import React from "react";
import s from "./Future.module.scss";
import editor from "./../../../images/illustration-editor-mobile.svg";

export default function Future() {
    return (
        <div className={s.wrapper}>
            <h1>Designed for the future</h1>
            <img src={editor} className={s.image} alt="" />
            <h2 className={s.heading}>Introducing an extensible editor</h2>
            <p>
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
            </p>
            <h2>Robust Content Management</h2>
            <p>
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blogs by adding customized
                categories, sections, format or flow. With this functionality,
                you're in full control.
            </p>
        </div>
    );
}
