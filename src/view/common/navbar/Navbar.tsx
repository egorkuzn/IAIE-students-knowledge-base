import IAIELogo from '../../../images/iaie-icon.png'
import React, {Component, ReactElement} from "react"
import {NavbarElement} from "./NavbarElement";
import {NavbarState} from "../../../model/navbar/NavbarState";

/**
 * Шапка навигации
 */
export class Navbar extends Component<{}, NavbarState> {
    state: NavbarState =  {
        active: "/home",
        pressed: "/home",
        entered: "/home"
    }

    setActive(entered: string, pressed: string) {
        if (entered !== "") return entered
        else return pressed
    }

    map = new Map<string, string>(
        [["/home", "Главная"],
            ["/works", "Дипломные работы и диссертации"],
            ["/docs", "Документация и инструкции"],
            ["/projects", "Проекты"],
            ["/publications", "Публикации"],
            ["/video", "Видео"]]
    )

    render(): ReactElement {
        return (
            <nav>
                <a href="https://www.iae.nsk.su/ru/"> <img src={IAIELogo} alt="IAIE logo"/></a>
                <div className="nav-elem-box">
                    {this.map.entries().map(
                        (entry) => <NavbarElement path={entry[0]}
                                                  title={entry[1]}
                                                  navbarStateValue={this.state}
                                                  onChange={(newSate) => this.setState(newSate)}/>
                    )}
                </div>
            </nav>
        )
    }
}

