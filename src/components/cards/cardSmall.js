import React from 'react'

export default class CardSmall extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            imageSrc: props.imageSrc,
            title: props.title,
            content: props.content,
            buttonLink: props.buttonLink,
            buttonName: props.buttonName,
            class: "col l3 m6 s12 " + props.class,
        }
    }

    render() {
        return (
            <div className={this.state.class}>
                <div className="card black">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={this.state.imageSrc} alt=""/>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator">{this.state.title}<i className="material-icons right">more_vert</i></span>
                        <p><a className="amber-text text-accent-4 modal-trigger" 
                        href={localStorage.getItem('userToken') ? this.state.buttonLink : '/login'}>
                        {this.state.buttonName}
                        </a></p>
                    </div>
                    <div className="card-reveal black">
                        <span className="card-title">{this.state.title}<i class="material-icons right">close</i></span>
                        <p>{this.state.content}</p>
                    </div>
                </div>

            </div>
        )
    }
}