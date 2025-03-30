import {Component, ReactElement} from "react";
import {FooterRowProp} from "../../../model/footer/view/FooterRowProp";
import {FooterRowState} from "../../../model/footer/view/FooterRowState";

export class FooterRow extends Component<FooterRowProp, FooterRowState>{
    render(): ReactElement {
        const data = this.props.rowData.data.map( (it) =>
            <div> <a href={it.link}> {it.title} </a> </div>
        )

        return (
            <div className="row">
                <div className="header"> {this.props.name} </div>
                {data}
            </div>
        )
    }
}
