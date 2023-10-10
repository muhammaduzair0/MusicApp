import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

const CheckBoxComponent = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <CheckBox
      disabled={false}
      value={toggleCheckBox}
      onValueChange={newValue => setToggleCheckBox(newValue)}
    />
  );
};

export default CheckBoxComponent
