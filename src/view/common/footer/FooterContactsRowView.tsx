import {Component} from "react";

export class FooterContactsRowView extends Component<any> {
    render() {
        return (<div>
            <ul style={{paddingLeft: 0, marginLeft: 0, listStyle: 'none'}}>
            <ContactElementView resourceName="Почта" text="poprog@iae.nsk.su" path=""/>
            <ContactElementView resourceName="Телеграмм" text="@poprog" path="https://t.me/poprog"/>
            <ContactElementView resourceName="Реддит" text="r/poprog" path="https://reddit.com/r/poprog/"/>
            </ul>
            <p>О нас</p>
            <p>Карьера</p>
            <p>© 2025 poprog</p>
        </div>);
    }
}

interface ContactElementProp {
    resourceName: string;
    path: string;
    text: string;
}

class ContactElementView extends Component<ContactElementProp> {
    render() {
        let phrase = this.props.resourceName + ": " + this.props.text

        if (this.props.path === "") {
            return <li>{phrase}</li>
        } else {
            return <li><a href={this.props.path} target="_blank" rel="noopener noreferrer">{phrase}</a></li>;
        }
    }
}
