import React from 'react';
import { View } from 'react-native';



export function Line(props) {
  return (
    <View style={{ 
        borderWidth: 0.5,
        borderColor: props.color,
        marginLeft: props.margin,
        marginRight: props.margin
    }} />
  );
}