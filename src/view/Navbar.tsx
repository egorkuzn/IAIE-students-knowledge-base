import IAIELogo from '../images/iaie-icon.png'
import {Component, ContextType, ReactElement} from "react";

/**
 * Шапка навигации
 */
export class Navbar extends Component {
    render(): ReactElement {
        return (<nav>
            <a href="https://www.iae.nsk.su/ru/"> <img src={IAIELogo} alt="IAIE logo"/></a>
            <ul>
                <NavbarElement path="/home" title="Главная"/>
            </ul>
        </nav>)
    }
}

/**
 * Описываем принимаемые параметры компонента
 */
interface NavbarElementProp {
    path?: string,
    title?: string
}

/**
 * Компонент
 */
class NavbarElement extends Component<NavbarElementProp> {
    render(): ReactElement {
        return (<li><a href={this.props.path}> {this.props.title} </a></li>)
    }
}
