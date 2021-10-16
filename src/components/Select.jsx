import React from 'react';
import PropType from 'prop-types';

class Select extends React.Component {
  render() {
    const { name, formType, labelText, testid, value, onChange } = this.props;
    return (
      <label htmlFor={ labelText }>
        { labelText }
        <select
          id={ labelText }
          type={ formType }
          data-testid={ testid }
          name={ name }
          onChange={ onChange }
          value={ value }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropType.string.isRequired,
  formType: PropType.string.isRequired,
  labelText: PropType.string.isRequired,
  testid: PropType.string.isRequired,
  value: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
};

export default Select;
