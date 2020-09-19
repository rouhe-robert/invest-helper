import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

const NumberInput = ({id, label, setValue, value}) => {

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
    <FormGroup>
      <Label for={id}>{label}</Label>
      <Input
        id={id}
        onChange={onChange}
        value={displayedValue}
      />
    </FormGroup>
  );
}

export default NumberInput;
