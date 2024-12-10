import {Component, ReactElement} from "react";
import {FooterRowProp} from "../../model/footer/view/FooterRowProp";
import {FooterRowState} from "../../model/footer/view/FooterRowState";

export class FooterRow extends Component<FooterRowProp, FooterRowState>{
    render(): ReactElement {
        const data = this.props.rowData.data.map( (it) =>
            <li> <a href={it.link}> {it.name} </a> </li>
        )

        return (
            <div>
                <div className="footer-row-header"> {this.props.name} </div>
                <ul> {data}</ul>
            </div>
        )
    }
}
