import IAIELogo from '../../images/iaie-icon.png'
import React, {Component, ReactElement} from "react"
import {NavbarElement} from "./NavbarElement";

interface NavbarProps {
    currentPath: string
}

/**
 * Шапка навигации
 */
export class Navbar extends Component<NavbarProps> {
    render(): ReactElement {
        return (
            <nav>
                <a href="https://www.iae.nsk.su/ru/"> <img src={IAIELogo} alt="IAIE logo"/></a>
                <div className="nav-elem-box">
                    <NavbarElement path="/home" title="Главная" currentPath={this.props.currentPath}/>
                    <NavbarElement path="/works" title="Дипломные работы и диссертации" currentPath={this.props.currentPath}/>
                    <NavbarElement path="/docs" title="Документация и инструкции" currentPath={this.props.currentPath}/>
                    <NavbarElement path="/projects" title="Проекты" currentPath={this.props.currentPath}/>
                    <NavbarElement path="/publications" title="Публикации" currentPath={this.props.currentPath}/>
                    <NavbarElement path="/video" title="Видео" currentPath={this.props.currentPath}/>
                </div>
            </nav>
        )
    }
}

