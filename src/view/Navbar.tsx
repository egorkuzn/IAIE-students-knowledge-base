import IAIELogo from '../images/iaie-icon.png'
import React, {Component, ReactElement} from "react"

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
                    <NavbarElement path="/doc" title="Документация и инструкции" currentPath={this.props.currentPath}/>
                    <NavbarElement path="/projects" title="Проекты" currentPath={this.props.currentPath}/>
                    <NavbarElement path="/publications" title="Публикации" currentPath={this.props.currentPath}/>
                    <NavbarElement path="/video" title="Видео" currentPath={this.props.currentPath}/>
                </div>
            </nav>
        )
    }
}

/**
 * Описываем принимаемые параметры компонента
 */
interface NavbarElementProp {
    path: string,
    title: string,
    currentPath: string
}

interface NavbarElementState {
    activeElement: string
}

/**
 * Компонент
 */
class NavbarElement extends Component<NavbarElementProp, NavbarElementState> {
    state: NavbarElementState = {
        activeElement: this.props.currentPath
    }

    getStyle(): string {
        return (this.state.activeElement === this.props.path) ? "nav-border-enable" : "nav-border-disable"
    }

    onComponentEnter() {
        let newState: NavbarElementState = {activeElement: this.props.path}
        this.setState(newState)
    }

    onComponentOut() {
        let newState: NavbarElementState = {activeElement: this.props.currentPath}
        this.setState(newState)
    }

    render(): ReactElement {
        let style = this.getStyle()

        return (
            <a
                className={style}
                href={this.props.path}
                onMouseEnter={() => this.onComponentEnter()}
                onMouseOut={() => this.onComponentOut()}
            >
                {this.props.title}
            </a>
        )
    }
}
