import React from 'react';
import { View } from 'react-native';
import { brandColors } from '../Core/basicStyles';

const Divider = (props) => {
  return (
    <View
      style={[
        {
          alignSelf: 'center',
          height: 1,
          width: '100%',
          backgroundColor: brandColors.textColor,
          opacity: 0.4,
        },
        props.style,
      ]}
    />
  );
};

export default Divider;
