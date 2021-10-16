import React from 'react';
import PropType from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div className={ cardRare.replace(/\s/g, '') }>
        <p className="nameCard">{ cardName }</p>
        { cardImage === ""
          ? <div className="branco" />
          : <img src={ cardImage } alt={ cardName } className="image-card" />}
        <p className="cardRare">{ cardRare }</p>
        { cardTrunfo && <p className="trunfo-card">Super Trunfo</p>}
        <p className="description-card">{ cardDescription }</p>
        <div className="attrContainer">
          <p className="attrCard">
            Atributo 1:
            {' '}
            { cardAttr1 }
            {' '}
          </p>
          <p className="attrCard">
            Atributo 2:
            {' '}
            { cardAttr2 }
            {' '}
          </p>
          <p className="attrCard">
            Atributo 3:
            {' '}
            { cardAttr3 }
            {' '}
          </p>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.string.isRequired,
  cardAttr2: PropType.string.isRequired,
  cardAttr3: PropType.string.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
};

export default Card;
