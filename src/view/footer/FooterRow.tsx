import {Component, ReactElement} from "react";
import {FooterRowProp} from "../../model/footer/view/FooterRowProp";
import {FooterRowState} from "../../model/footer/view/FooterRowState";

export class FooterRow extends Component<FooterRowProp, FooterRowState>{
    render(): ReactElement {
        return (
            <div> {this.props.name} </div>

        ) + this.props.data.data.map(());
    }
}
