import React from "react";


interface IHomeLayout {
    children?: React.ReactElement | React.ReactNode
}


export const HomeLayouts = ({ children }: IHomeLayout) => {
    return (
        <div className="">
            {children}
        </div>
    )
}
