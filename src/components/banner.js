import React from 'react'

export default class Banner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageSrc: props.imageSrc,
        }
    }

    render() {
        const styleAttributes = {
            backgroundImage: "url(" + this.state.imageSrc + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
            justifyContent: "center",
            height: "70vh",
        }

        return(
            <div className="responsive-img hide-on-med-and-down"  style={styleAttributes}/>
        )
    }
}
