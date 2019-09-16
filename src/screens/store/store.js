import React from 'react';

import Navbar from '../../components/commons/navbar';
import info from '../../staticInfo/store';
import Title from '../../components/title';
import CardDefault from '../../components/cards/cardDefault';
import CardHorizontal from '../../components/cards/cardHorizontal';
import Footer from '../../components/commons/footer';
import Modal from '../../components/modal/modal';
import { write } from 'fs';

export default class Store extends React.Component {
  renderSpotlight() {
    const p = info.products[0];

    const imgSrc = p.imgSrc;
    const title = p.name;
    const description = (
      <div>
        <blockquote>{`R$ ${p.price.toFixed(2)}`}</blockquote>
        <p>{p.description}</p>
      </div>
    );

    return (
      <CardDefault colSize="s12 m6" imageSrc={imgSrc} title={title} description={description} />
    );
  }

  renderProducts(from, to, col) {
    return info.products.slice(from, to).map(p => {
      const imgSrc = p.imgSrc;
      const title = p.name;
      const content = (
        <div>
          <blockquote>{`R$ ${p.price.toFixed(2)}`}</blockquote>
          <p>{p.description}</p>
        </div>
      );

      return (
        <CardHorizontal
          imageSrc={imgSrc}
          title={title}
          content={content}
          col={col}
          size="small"
          buttonName="Comprar"
          buttonLink={`#${title}`}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Title>Loja</Title>

          <div className="row">
            {this.renderSpotlight()}

            <div className="col m6 s12">
              <div className="row">{this.renderProducts(1, 3, 's12')}</div>
            </div>
          </div>

          <div className="row">{this.renderProducts(3, info.products.length, 'col s12 m6')}</div>

          <h2 className="center-align">Informações</h2>

          <div className="row">
            {info.informative.map(i => (
              <CardDefault
                colSize="s12 m6"
                centerTitle
                title={i.title}
                description={i.description}
              />
            ))}
          </div>
          {info.products.map(i => (
            <Modal modalId={i.name} title={i.description} price={i.price} hasSize={!!i.hasSize} />
          ))}
        </div>

        <Footer />
      </div>
    );
  }
}
