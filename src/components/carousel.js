import React from 'react'

import M from "materialize-css";

export default class Carousel extends React.Component {
    
    componentDidMount() {
        const carousel = document.querySelector(".carousel")

        M.Carousel.init(carousel, {
            fullWidth: true,
            indicators: true
        });
    }
    
    constructor(props) {
        super(props)

        this.state = {
            itens: props.itens,
        }
    }

    render() {
        return(
            <div className="carousel carousel-slider center">
                {this.state.itens.map((item) =>

                    <div className="carousel-item black" href="#one!">
                        <div className="container">
                        <div className="row">
                            <div className="col m8 hide-on-small-only" style={{ 
                                backgroundImage: "url(" + item.imageSrc +")", 
                                height: "45vh", 
                                backgroundSize: "cover",
                                backgroundPosition: "center"}}> 
                                
                            </div>
                            <div className="col m4">
                                <h2 className="white-text left-align">{item.name}</h2>
                                <p className="white-text left-align">{item.description}</p>
                                <a className="waves-effect waves-light btn-small " style={{backgroundColor: '#461000'}}> Ir para a loja</a>
                            </div>
                        </div>
                        </div>
                    </div>

                )}
            </div>
        )
    }
}