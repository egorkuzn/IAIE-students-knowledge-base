import React, {Component, ReactElement} from "react";
import {NavbarElementProp} from "../../../model/navbar/NavbarElementProp";
import {NavbarElementState} from "../../../model/navbar/NavbarElementState";

/**
 * Компонент
 */
export class NavbarElement extends Component<NavbarElementProp, NavbarElementState> {
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