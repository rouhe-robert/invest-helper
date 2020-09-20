import React from 'react';
import { Input, Label } from 'reactstrap';

import '../../style/layout/CheckboxInput.css';

const CheckboxInput = ({checked, id, label, setChecked}) => (
  <div className="checkbox-input">
    <Label>
      <Input
        checked={checked}
        id={id}
        onChange={event => setChecked(event.target.checked)}
        type="checkbox"
      />
      {label}
    </Label>
  </div>
);

export default CheckboxInput;
