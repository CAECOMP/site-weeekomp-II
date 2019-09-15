import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInfo,faInfoCircle} from '@fortawesome/free-solid-svg-icons'

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
            centerTitle: props.centerTitle == undefined ? false : true
        }
    }

    renderDescription() {
        if (typeof(this.state.description) == "object") {
            return this.state.description.map((info) => {return(
               <div className="collapse"> 
                   <ul><li>{info}</li></ul>
               </div>
            )
            })
            
        } else {
            return this.state.description
        }
    }

    render() {

        const title = 
                <span className={`card-title ${this.state.centerTitle ? "center-align" : ""}`}>
                       <i> <FontAwesomeIcon icon={faInfoCircle} color='white' className='fa-sm'  /> </i>
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