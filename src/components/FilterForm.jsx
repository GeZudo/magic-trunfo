import React from 'react';
import PropType from 'prop-types';
import Input from './Input';
import FilterSelect from './FilterSelect';

class FilterForm extends React.Component {
  render() {
    const {
      onInputChange,
      filterName,
      filterRare,
      filterTrunfo,
    } = this.props;

    return (
      <div className="inputFilter">
        <Input
          formType="text"
          labelText="Filtro de Busca"
          testid="name-filter"
          name="filterName"
          value={ filterName }
          onChange={ onInputChange }
        />
        <FilterSelect
          labelText="Raridade"
          testid="rare-filter"
          formType="select"
          name="filterRare"
          value={ filterRare }
          onChange={ onInputChange }
        />
        <Input
          formType="checkbox"
          labelText="Super Trunfo"
          testid="trunfo-filter"
          name="filterTrunfo"
          value={ filterTrunfo }
          onChange={ onInputChange }
        />
      </div>
    );
  }
}

FilterForm.propTypes = {
  onInputChange: PropType.string.isRequired,
  filterName: PropType.string.isRequired,
  filterRare: PropType.string.isRequired,
  filterTrunfo: PropType.bool.isRequired,
};

export default FilterForm;
