import React from 'react';
import PropType from 'prop-types';
import Input from './Input';
import Select from './Select';

class Form extends React.Component {
  // constructor() {
  //   super();

  // }
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className="inputs">
        <Input
          formType="text"
          labelText="Nome"
          testid="name-input"
          name="cardName"
          value={ cardName }
          onChange={ onInputChange }
        />
        <Input
          formType="textarea"
          labelText="Descrição"
          testid="description-input"
          name="cardDescription"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <Input
          formType="number"
          labelText="Atributo 1:"
          testid="attr1-input"
          name="cardAttr1"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <Input
          formType="number"
          labelText="Atributo 2:"
          testid="attr2-input"
          name="cardAttr2"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <Input
          formType="number"
          labelText="Atributo 3:"
          testid="attr3-input"
          name="cardAttr3"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <Input
          formType="text"
          labelText="Imagem"
          testid="image-input"
          name="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <Select
          labelText="Raridade"
          testid="rare-input"
          formType="select"
          name="cardRare"
          value={ cardRare }
          onChange={ onInputChange }
        />
        {
          hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : <Input
            formType="checkbox"
            labelText="Super Trunfo"
            testid="trunfo-input"
            name="cardTrunfo"
            value={ cardTrunfo }
            onChange={ onInputChange }
          />
        }
        <button
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </div>
    );
  }
}
Form.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.string.isRequired,
  cardAttr2: PropType.string.isRequired,
  cardAttr3: PropType.string.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
  hasTrunfo: PropType.bool.isRequired,
  isSaveButtonDisabled: PropType.bool.isRequired,
  onInputChange: PropType.func.isRequired,
  onSaveButtonClick: PropType.func.isRequired,
};

export default Form;
