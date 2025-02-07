import React, {Component, ReactElement} from "react";
import {NavbarElementProp} from "../../../model/navbar/NavbarElementProp";

/**
 * Компонент
 */
export class NavbarElement extends Component<NavbarElementProp> {
    getStyle(): string {
        return (this.props.navbarStateValue.active === this.props.path) ? "nav-border-enable" : "nav-border-disable"
    }

    onComponentEnter() {
        this.props.onChange(
            {
                active: this.props.path,
                pressed: this.props.navbarStateValue.pressed,
                entered: this.props.path
            }
        )
    }

    onComponentOut() {
        let entered = this.props.navbarStateValue.entered
        if (this.props.path === this.props.navbarStateValue.entered) entered = ""
        let active = this.props.navbarStateValue.active
        if (entered === "") active = this.props.navbarStateValue.pressed

        this.props.onChange(
            {
                active: active,
                pressed: this.props.navbarStateValue.pressed,
                entered: entered
            }
        )
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