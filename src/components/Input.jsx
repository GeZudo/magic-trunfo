import React from 'react';
import PropType from 'prop-types';

class Imput extends React.Component {
  render() {
    const { name, value, formType, labelText, testid, onChange } = this.props;
    return (
      <div className={ testid }>
        {formType === 'checkbox' ? (
          <div className="checked">
            <label htmlFor={ labelText }>
              <span>{ labelText }</span>
              <input
                id={ labelText }
                type={ formType }
                name={ name }
                className={ testid }
                onChange={ onChange }
                checked={ value }
              />
            </label>
          </div>
        )
          : (
            <label htmlFor={ labelText }>
              <span>{ labelText }</span>
              <input
                id={ labelText }
                type={ formType }
                name={ name }
                placeholder={ labelText }
                className={ testid }
                onChange={ onChange }
                value={ value }
              />
            </label>)}
      </div>
    );
  }
}

Imput.propTypes = {
  name: PropType.string.isRequired,
  value: PropType.string.isRequired,
  formType: PropType.string.isRequired,
  labelText: PropType.string.isRequired,
  testid: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
};

export default Imput;
