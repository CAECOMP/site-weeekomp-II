import React from 'react';

export default class CardHorizontal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      col: props.col,
      imageSrc: props.imageSrc,
      content: props.content,
      buttonLink: props.buttonLink,
      buttonName: props.buttonName,
      size: props.size,
      buttonDisabled: props.buttonDisabled,
    };
  }

  renderContent() {
    if (typeof this.state.content == 'string') {
      return <p>{this.state.content}</p>;
    } else {
      return this.state.content;
    }
  }

  render() {
    const imgStyle = { objectFit: 'cover' };
    return (
      <div className={this.state.col != null ? 'col ' + this.state.col : ''}>
        <div
          className={`card ${
            this.state.size != null ? this.state.size : ''
          } horizontal grey darken-4`}
        >
          <div className="card-image valign-wrapper">
            <img style={imgStyle} src={this.state.imageSrc} alt="" />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <span class="card-title">{this.state.title}</span>
              {this.renderContent()}
            </div>
            {!this.state.buttonDisabled && (
              <div className="card-action">
                {/* <a class="modal-trigger" href={this.state.buttonLink}> */}
                <a
                  class="modal-trigger"
                  href={localStorage.getItem('userToken') ? this.state.buttonLink : '/login'}
                >
                  {this.state.buttonName}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
