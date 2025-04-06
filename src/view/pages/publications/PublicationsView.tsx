import App from "../../../App";
import '../../../styles/pages/Publications.scss';
import {PUBLICATIONS_DATA} from "../../../data/pages/publications/PublicationsClassProperties";
import {JSX} from "react";
import {Link} from "react-router";

export function PublicationsView(props: any) {
    return (
        App(page())
    )
}

function pa(publication: PublicationModel, element: JSX.Element) {
    return (publication.link === "") ? element :
         (
            <a href={publication.link} target="_blank" rel="noopener noreferrer">
                {element}
            </a>
        )
}

function page() {
    return (
        <main>
            <div className="publications-page">
                <h1>Публикации</h1>
                {
                    PUBLICATIONS_DATA.map(publications => {
                        return (
                            <div>
                                <h2> {publications.year} </h2>
                                {publications.publications.map(p => {
                                    return (
                                        <div className="publication">
                                            <div className="publication-authors-titles">
                                                {pa(p, <p>{p.authors}</p>)}
                                                {pa(p, <p>{p.theme}</p>)}
                                            </div>
                                            {pa(p, <p className="publication-published"> {p.published} </p>)}
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })
                }

            </div>
        </main>
    )
}
