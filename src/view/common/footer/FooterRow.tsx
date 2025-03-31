import {Component, ReactElement} from "react";
import {FooterRowProp} from "../../../model/footer/view/FooterRowProp";
import {FooterRowState} from "../../../model/footer/view/FooterRowState";
import {Link} from "react-router";

export class FooterRow extends Component<FooterRowProp, FooterRowState> {
    render(): ReactElement {
        const data = this.props.rowData.data.map((it) =>
            <div><Link to={
                {
                    pathname: this.props.pathname,
                    hash: it.hash
                }
            }> {it.title} </Link></div>
        )

        const head = <Link to={{pathname: this.props.pathname}}>
            <div className="header"> {this.props.name} </div>
        </Link>

        return (
            <div className="row">
                {head}
                {data}
            </div>
        )
    }
}
