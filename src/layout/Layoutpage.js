import React from "react"
import { NavbarComponent } from "../components/NavbarComponent"

const LayoutPageHOC = (PassedComponent) => {
    const LayoutPage = () => {
        return(
            <div>
                <NavbarComponent/>
                <div>
                <PassedComponent />
                </div>
            </div>
        );
    };
    return LayoutPage;
}

export {LayoutPageHOC as LayoutPage}