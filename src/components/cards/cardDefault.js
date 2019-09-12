import React from 'react'

export default class CardDefault extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            imageSrc: props.imageSrc,
            description: props.description,
            title: props.title,
            pageLink: props.pageLink,
            class: `col ${props.colSize != null ? props.colSize : "s12 m4"} ${props.class}`,
            size: props.size,
            centerTitle: props.centerTitle === undefined ? false : true
        }
    }

    renderDescription() {
        if (typeof(this.state.description) == "string") {
            return <p>{this.state.description}</p>
        } else {
            return this.state.description
        }
    }

    render() {

        const title = 
                <span className={`card-title ${this.state.centerTitle ? "center-align" : ""}`}>
                        {this.state.title}
                </span>

        const imgTitle = 
                <div>
                    <img src={this.state.imageSrc}/>
                    {title}
                </div>

        const cardActions =
                <div className="card-action">
                    <a href={this.state.pageLink}>Mais Informações</a>
                </div>

        return(
            <div className={this.state.class}>
                <div className={`card ${this.state.size != null ? this.state.size : ""}  black`}>
                    <div className="card-image">
                        {this.state.imageSrc != null ? imgTitle : ""}
                    </div>
                    <div className="card-content">
                    {this.state.imageSrc == null ? title : ""}
                        {this.renderDescription()}
                    </div>
                    {this.state.pageLink != null ? cardActions : ""}
                </div>
            </div>
        )
    }
}