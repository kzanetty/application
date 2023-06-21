import "./container.component.css"
import React from 'react';

export function ContainerComponent({ children, boleano }) {
    function fullHeightOrNot() {
        return boleano ? "container-full-height" : '';
    }

    return <div className={`container ${fullHeightOrNot()}`}>{children}</div>;
}