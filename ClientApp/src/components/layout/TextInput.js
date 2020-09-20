import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

import '../../style/layout/TextInput.css';

const TextInput = ({id, label, setValue, value}) => (
  <div className="text-input-wrapper">
    <div className="text-input">
      <FormGroup>
        <Label for={id}>{label}</Label>
        <Input
          id={id}
          onChange={event => setValue(event.target.value)}
          value={value}
        />
      </FormGroup>
    </div>
  </div>
);

export default TextInput;
