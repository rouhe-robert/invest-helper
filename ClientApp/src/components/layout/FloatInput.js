import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

import '../../style/layout/FloatInput.css';

const FloatInput = ({id, label, setValue, value}) => {

  var displayedValue = value === '0' ? '' : value;

  const isNumeric = value => !isNaN(parseFloat(value)) && isFinite(value);

  const onChange = event => {
    if (event.target.value === '') {
      setValue('0');
    }

    if (isNumeric(event.target.value)) {
      setValue(event.target.value);
    }
  }

  return (
    <div className="float-input-wrapper">
      <div className="float-input">
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

export default FloatInput;
