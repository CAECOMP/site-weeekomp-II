import React from 'react'

export default class Title extends React.Component {
    render() {
        return(
            <h1 className="center-align">{this.props.children}</h1>
        )
    }
}