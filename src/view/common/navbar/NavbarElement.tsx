import React, {Component, ReactElement} from "react";
import {NavbarElementProp} from "../../../model/navbar/NavbarElementProp";
import {router} from "../../../config/Router";

/**
 * Компонент
 */
export class NavbarElement extends Component<NavbarElementProp> {
    getStyle(): string {
        return (
            (this.props.navbarStateValue.entered === this.props.path && this.props.navbarStateValue.entered !== "")
            || (this.props.navbarStateValue.active === this.props.path && this.props.navbarStateValue.entered === "")
        ) ?
            "nav-border-enable"
        : "nav-border-disable"
    }

    onComponentEnter() {
        this.props.onChange(
            {
                active: this.props.navbarStateValue.active,
                pressed: this.props.navbarStateValue.pressed,
                entered: this.props.path
            }
        )
    }

    onComponentOut() {
        if (this.props.navbarStateValue.entered === this.props.path) { this.props.navbarStateValue.entered = ""}

        console.log(this.props.navbarStateValue.active)

        this.props.onChange(
            {
                active: this.props.navbarStateValue.active,
                pressed: this.props.navbarStateValue.pressed,
                entered: this.props.navbarStateValue.entered
            }
        )
    }

    render(): ReactElement {
        let style = this.getStyle()

        return (
            <a
                className={style}
                href={router.basename + this.props.path}
                onMouseEnter={() => this.onComponentEnter()}
                onMouseOut={() => this.onComponentOut()}
            >
                {this.props.title}
            </a>
        )
    }
}