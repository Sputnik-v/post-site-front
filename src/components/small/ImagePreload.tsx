import React from 'react';

interface IImageProperties {
    src: string;
    classes: string;
}


export const ImagePreload = ({src, classes}:IImageProperties) => {
    return (
        <img className={classes} src={src} alt="" />
    )
}