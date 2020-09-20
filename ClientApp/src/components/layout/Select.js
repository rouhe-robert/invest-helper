import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

import '../../style/layout/Select.css';

const Select = ({id, label, options, setValue, value}) => (
  <div className="select-wrapper">
    <div className="select">
      <FormGroup>
        <Label for={id}>{label}</Label>
        <Input
          id={id}
          onChange={event => setValue(event.target.value)}
          type="select"
          value={value}
        >
          {options.map(option => (
            <option key={id + option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </Input>
      </FormGroup>
    </div>
  </div>
);

export default Select;
