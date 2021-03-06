import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

import '../../style/layout/NumberInput.css';

const NumberInput = ({id, label, setValue, value}) => {

  var displayedValue = value === '0' ? '' : value;

  const isNumeric = value => !isNaN(parseInt(value)) && isFinite(value) && parseInt(value).toString() === value;

  const onChange = event => {
    if (event.target.value === '') {
      setValue('0');
    }

    if (isNumeric(event.target.value)) {
      setValue(parseInt(event.target.value));
    }
  }

  return (
    <div className="number-input-wrapper">
      <div className="number-input">
        <FormGroup>
          <Label for={id}>{label}</Label>
          <Input
            id={id}
            onChange={onChange}
            value={displayedValue}
          />
        </FormGroup>
      </div>
    </div>
  );
}

export default NumberInput;
