import React from 'react';
import {View} from 'react-native';

export const Separator = ({children}) => {
  return (
    <View>
      {children}
      <View
        style={{
          backgroundColor: '#e1e4e4',
          borderBottomColor: '#e1e4e4',
          borderBottomWidth: 1,
          height: 0,
          width: '100%',
          marginVertical: 0,
        }}
      />
    </View>
  );
};
