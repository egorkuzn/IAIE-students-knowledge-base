import IAIELogo from '../../../images/iaie-icon.png'
import React, {Component, ReactElement} from "react"
import {NavbarElement} from "./NavbarElement";
import {NavbarState} from "../../../model/navbar/NavbarState";
import {NavigationTree} from "../../../data/navbar/NavigationTree";

/**
 * Шапка навигации
 */
export class Navbar extends Component<{}, NavbarState> {
    location(): string {
        return window.location.pathname.substring(1)
    }

    state: NavbarState = {
        active: this.location(),
        pressed: this.location(),
        entered: ""
    }

    render(): ReactElement {
        console.log(this.state.active)
        return (
            <nav>
                <a href="https://www.iae.nsk.su/ru/"> <img src={IAIELogo} alt="IAIE logo"/></a>
                <div className="nav-elem-box">
                    {NavigationTree.entries().map(
                        (entry) => <NavbarElement path={entry[0]}
                                                  title={entry[1]}
                                                  navbarStateValue={this.state}
                                                  onChange={(newSate) => {
                                                      newSate.active = this.location()
                                                      this.setState(newSate)
                                                  }}/>
                    )}
                </div>
            </nav>
        )
    }
}

