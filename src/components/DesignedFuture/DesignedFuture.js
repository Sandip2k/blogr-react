import React from "react";
import s from "./DesignedFuture.module.scss";

export default function DesignedFuture() {
    return (
        <div className={s.designedWrapper}>
            <h1 className={s.header}>Designed For The Future</h1>
            <div className={s.textWrapper}>
                <h2>Introducing an extensible editor</h2>
                <p>
                    Blogr features an exceedingly intuitive interface which lets
                    you focus on one thing: creating content. The editor
                    supports management of multiple blogs and allows easy
                    manipulation of embeds such as images, videos and Markdown.
                    Extensibility with plugins and themes provide easy ways to
                    add functionality or change the looks of a blog.
                </p>
                <h2>Robust Content Management</h2>
                <p>
                    Flexible content management enables users to easily move
                    through posts. Increase the usability of your blogs by
                    adding customized categories, sections, format or flow. With
                    this functionality, you're in full control.
                </p>
            </div>
        </div>
    );
}
